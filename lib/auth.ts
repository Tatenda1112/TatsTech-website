import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
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
          return null
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
        return null
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
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub || '1'
        session.user.role = token.role as string
      }
      return session
    }
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
