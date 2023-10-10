import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })

  if (!token) {
    // Redirect to the sign-in page with the appropriate query parameters
    return NextResponse.redirect(`/sign-in?redirect=${encodeURIComponent(req.url)}`)
  }

  // Continue processing the request
  return NextResponse.next()
}

// Define the routes that should use the middleware
export const config = {
  middleware: 'auth', // Use a custom name for your middleware
  pages: ['/r/:path*/submit', '/r/create'], // Specify the protected routes
}
