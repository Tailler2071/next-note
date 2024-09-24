import { FC } from 'react';
import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';
import Logo from '@/shared/assets/icons/logo.svg';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('sticky top-0 z-50 bg-white', className)}>
      <div className='px-4 py-2.5 flex justify-between'>
        <div className='flex gap-2 items-center'>
          <Logo />
          <div className='text-xl font-medium'>Next Note</div>
        </div>

        <Button variant='default'>Войти</Button>
      </div>
    </header>
  );
};
