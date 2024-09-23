import NextAuth, { Profile, User } from 'next-auth';
import Yandex from '@auth/core/providers/yandex';
import { AdapterUser } from '@auth/core/adapters';
// eslint-disable-next-line
import { JWT } from 'next-auth/jwt'; // Это нужный import

// Данные профиля приходящие от Yandex
interface CustomYandexProfileI {
  id?: string | null;
  login?: string | null;
  client_id?: string | null;
  display_name?: string | null;
  real_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  sex?: string | null;
  default_email?: string | null;
  emails?: string[] | null;
  default_avatar_id?: string | null;
  is_avatar_empty?: boolean;
  psuid?: string | null;
}

declare module 'next-auth' {
  interface Profile extends CustomYandexProfileI {}

  // Обязательное расширение Session
  // eslint-disable-next-line
  interface Session {
    profile: Profile | undefined;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User | AdapterUser;
    profile: Profile | undefined;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Yandex],
  callbacks: {
    jwt({ token, user, profile }) {
      if (user) {
        token.user = user;
        token.profile = profile;
      }

      return token;
    },
    session({ session, token }) {
      // Обязательные поля в session
      session.user.id = token.user.id ?? '';
      session.user.email = token.user.email ?? '';

      // Не обязательные поля в session
      session.user.name = token.user.name;
      session.user.image = token.user.image;

      // Добовляем профиль (данные профиля) в session.profile
      session.profile = token.profile;

      return session;
    },
  },
});
