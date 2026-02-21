import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    const proto = request.headers.get('x-forwarded-proto');

    if (proto && proto !== 'https') {
      const url = request.nextUrl.clone();
      url.protocol = 'https:';
      return NextResponse.redirect(url, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};

// import { NextResponse, type NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const proto = request.headers.get('x-forwarded-proto');

//   // Only enforce when a proxy supplies proto and it isn't already HTTPS
//   if (proto && proto !== 'https') {
//     const url = request.nextUrl.clone();
//     url.protocol = 'https:';
//     return NextResponse.redirect(url, 308);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: '/:path*'
// };