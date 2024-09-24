import { FC } from 'react';
import { cn } from '@/shared/lib';
import { MainLayout, Separator } from '@/shared/ui';
import LogoXL from '@/shared/assets/icons/logo-xl.svg';

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn('bg-white', className)}>
      <MainLayout>
        <Separator />
        <div className='flex py-20 justify-between'>
          <div className='flex flex-col w-1/4'>
            <div className='flex gap-4 items-center mb-16'>
              <LogoXL />
              <div className='text-3xl font-medium'>Next Note</div>
            </div>

            <span className='mb-6'>
              Мы не продаем и не передаем вашу личную информацию
            </span>

            <span>© 2024 Next Note, Inc.</span>
          </div>

          <div className='flex items-center justify-center w-3/4'>Навигация</div>
        </div>
      </MainLayout>
    </footer>
  );
};
