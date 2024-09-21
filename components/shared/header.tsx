import {FC} from "react";
import {cn} from "@/lib/utils";
import {User} from "lucide-react";

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
