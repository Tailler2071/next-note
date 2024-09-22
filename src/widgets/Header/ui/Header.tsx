import {FC} from "react";
import {User} from "lucide-react";
import {cn} from '@/shared/lib';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({className}) => {
  return (
    <header className={cn("border ", className)}>
      I am Header <User size={20}/>
    </header>
  );
};
