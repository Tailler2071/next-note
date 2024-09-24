import { AdapterUser } from '@auth/core/adapters';
import { CustomYandexProfileI } from '@@/auth';

// Обязательные импорты для расширения типов
// eslint-disable-next-line
import { Profile, User, Session } from 'next-auth';
// eslint-disable-next-line
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    profile: CustomYandexProfileI | Profile | undefined;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User | AdapterUser;
    profile: CustomYandexProfileI | Profile | undefined;
  }
}
