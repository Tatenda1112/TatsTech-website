import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        console.log('Auth attempt:', { 
          email: credentials?.email, 
          password: credentials?.password ? '***' : 'missing' 
        });

        if (!credentials?.email || !credentials?.password) {
          console.log('Missing credentials');
          throw new Error('Missing credentials')
        }

        // Check against hardcoded credentials for security
        const adminEmail = 'tatendatatenda1112@gmail.com'
        const adminPassword = 'Tatendamukono1112@'

        console.log('Comparing with:', { 
          adminEmail, 
          emailMatch: credentials.email === adminEmail,
          passwordMatch: credentials.password === adminPassword
        });

        if (
          credentials.email === adminEmail &&
          credentials.password === adminPassword
        ) {
          console.log('Authentication successful');
          return {
            id: '1',
            email: adminEmail,
            name: 'Tatenda Mukono',
            role: 'admin'
          }
        }

        console.log('Authentication failed');
        throw new Error('Invalid credentials')
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).id = token.sub || '1'
        ;(session.user as any).role = token.role as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to admin dashboard after successful login
      if (url.startsWith('/')) return `${baseUrl}${url}`
      // If callback URL is on same origin, allow it
      else if (new URL(url).origin === baseUrl) return url
      // Otherwise redirect to admin dashboard
      return `${baseUrl}/admin/dashboard`
    }
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
})

export { handler as GET, handler as POST }
