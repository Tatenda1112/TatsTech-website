import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    // If user is not authenticated and trying to access admin routes
    if (req.nextUrl.pathname.startsWith('/admin') && !req.nextauth.token) {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    // If user is authenticated but not admin role
    if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to non-admin routes
        if (!req.nextUrl.pathname.startsWith('/admin')) {
          return true
        }
        
        // For admin routes, require authentication and admin role
        return !!token && token.role === 'admin'
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*']
}
