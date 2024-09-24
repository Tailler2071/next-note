import { auth } from '@@/auth';

// Все роуты которые должны быть не доступы когда пользователь авторизирован
const DISABLED_ROUTES_WHEN_AUTHORIZED = ['/login'];

export default auth((req) => {
  const isDisabledRoute = DISABLED_ROUTES_WHEN_AUTHORIZED.includes(req.nextUrl.pathname);

  if (!req.auth && !isDisabledRoute) {
    const newUrl = new URL('/login', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  if (req.auth && isDisabledRoute) {
    const newUrl = new URL('/', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
