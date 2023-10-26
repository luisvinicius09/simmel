import { NextResponse, type NextRequest } from 'next/server';

const protectedRoutes = ['/charges', '/clients', '/dashboard', '/settings'];

export function middleware(request: NextRequest) {
	const token = request.cookies.get('token');

	if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
		if (!token || !token.value) {
			return NextResponse.redirect(new URL('/login', request.url));
		}
	}

	if (request.nextUrl.pathname === '/') {
		// TODO: should validate token?
		return NextResponse.redirect(new URL('/dashboard', request.url));
	}

	// if (request.nextUrl.pathname.startsWith('/login')) {
	// 	if (store.isAuthorized) {
	// 		return NextResponse.redirect(new URL('/dashboard', request.url));
	// 	}
	// }
}
