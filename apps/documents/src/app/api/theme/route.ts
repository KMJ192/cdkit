import { NextResponse, NextRequest } from 'next/server';
import { themeCookieMaxAge } from '@src/utils/utils';

export async function GET(request: NextRequest) {
  const theme = request.url
    .replace(request.nextUrl.origin, '')
    .replace('/api/theme?theme=', '');

  const response = NextResponse.json({
    theme,
  });

  const themeValue = theme !== 'light' && theme !== 'dark' ? 'light' : theme;

  response.cookies.set({
    name: 'theme',
    value: themeValue,
    maxAge: themeCookieMaxAge,
  });

  return response;
}
