

"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { ChevronRight } from "lucide-react";
import { additionalTools, diagnosticTools, scannerToolsLinks } from "@/lib/constants";
import phoenix from "@/assets/image/phoenix.svg"
import Image, { StaticImageData } from "next/image";



interface LinkProps{ title: string; href: string; image?:StaticImageData}

const Nav = () => {
  const carDiagnosticTools = [
    { title: "Universal Car Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Citroen Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Renault Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Audi Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Ford Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "SAAB Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Bentley Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Lamborghini Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "SEAT Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "BMW / MINI / Rolls-Royce Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Land Rover / Jaguar Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Skoda Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Bugatti Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Mercedes-Benz Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Vauxhall / Opel Diagnostic Tools & Scanners", href: "#", image:phoenix },
    { title: "Volkswagen (VW) Diagnostic Tools & Scanners", href: "#", image:phoenix },
  ];
  
 
  
  return (
    <div className="hidden lg:flex gap-[40px] justify-center py-[12px] bg-[#1F242D] text-[#CCCCCC]">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="mr-5">
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink>OBDeleven</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent shadow-none">
              Scanner Types
            </NavigationMenuTrigger>
            <NavigationMenuContent className={`bg-[#1F2632] text-[#CCCCCC] border border-[#CCCCCC] `}>
              <ul className="grid w-[400px] gap-3 p-5 md:w-[800px] md:grid-cols-2 lg:w-[800px] ">
                {scannerToolsLinks.map((component:LinkProps) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
          
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent shadow-none ">
              Car Makes
            </NavigationMenuTrigger>
            <NavigationMenuContent className={`bg-[#1F2632] text-[#CCCCCC] border border-[#CCCCCC] `}>
              <ul className="grid w-[400px] p-5 md:grid-cols-2 lg:w-[1000px] ">
                {carDiagnosticTools.map((component:LinkProps) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    image={component.image}
                  >
                
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent shadow-none ">
              Service Reset Tools
            </NavigationMenuTrigger>
            <NavigationMenuContent className={`bg-[#1F2632] text-[#CCCCCC] border border-[#CCCCCC] `}>
              <ul className="grid w-[400px] gap-3 p-5  md:grid-cols-3 w-[1200px] ">
                {diagnosticTools.map((component:LinkProps) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent shadow-none ">
            Other Tools & Accessories
            </NavigationMenuTrigger>
            <NavigationMenuContent className={`bg-[#1F2632] text-[#CCCCCC] border border-[#CCCCCC] `}>
              <ul className="grid w-[400px] gap-3 p-5 md:grid-cols-3 w-[800px] ">
                {additionalTools.map((component:LinkProps) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                 
                  >
                
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
export default Nav;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">& { image?: string | StaticImageData; title: string }
>(({ className, image, title, ...props }, ref) => {

  console.log(" image ", image)
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:text-[#EA4C49]",
            className
          )}
          {...props}
        >
          
          <div className="text-sm font-medium leading-none flex items-center">
           <div>{image?<Image src={image} alt="image" className="w-[50px]"/>: <ChevronRight />}</div>
            <div>{title}</div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
