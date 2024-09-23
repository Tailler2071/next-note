import NextAuth, { Profile } from 'next-auth';
import Yandex from '@auth/core/providers/yandex';

// Данные профиля (profile) приходящие от Yandex
export interface CustomYandexProfileI extends Profile {
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
