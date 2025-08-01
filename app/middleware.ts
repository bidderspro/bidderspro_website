import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply to the upwork-automation page
  if (request.nextUrl.pathname.includes('/services/upwork-automation')) {
    // Create a new response
    const response = NextResponse.next();
    
    // Set aggressive cache control headers to prevent caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '-1');
    response.headers.set('Surrogate-Control', 'no-store');
    response.headers.set('Vary', '*');
    
    // Add a timestamp to ensure uniqueness
    response.headers.set('X-Timestamp', Date.now().toString());
    
    return response;
  }
  
  return NextResponse.next();
}

// Configure matcher for the middleware
export const config = {
  matcher: ['/services/upwork-automation/:path*'],
};