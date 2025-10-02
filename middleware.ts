import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('authorization')
  const url = request.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    // Change these credentials to whatever you want
    if (user === 'tim' && pwd === 'preview2025') {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}

// Don't password protect API routes or static files
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
