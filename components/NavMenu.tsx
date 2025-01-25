import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";

export function NavMenu() {
  const navLinks = [
    "OBDeleven",
    "Scanner Types",
    "Car Makes",
    "Service Reset Tools",
    "Other Tools & Accessories",
  ];

  const ListItem = ({ title }: { title: string }) => {
    return (
      <li className="p-2">{title}</li>
    );
  };

  return (
    <Popover >
      <PopoverTrigger asChild >
        <Menu color="white"/>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-[#1F2632] text-[#CCCCCC]">
        <ul className="space-y-2">
          {navLinks.map((item: string, index: number) => (
            <ListItem key={index} title={item} />
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

export default NavMenu;
