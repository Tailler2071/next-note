import { FC, ReactNode } from 'react';
import { cn } from '@/shared/lib';

interface MainLayout {
  className?: string;
  children: ReactNode;
}

export const MainLayout: FC<MainLayout> = ({ className, children }) => {
  return <div className={cn('max-w-screen-xl mx-auto', className)}>{children}</div>;
};
