import { ReactNode } from "react";

export interface NavLinkProps{
    name:string,
    link:string,
}
export interface Benefit {
    icon: ReactNode; // To allow JSX components like <Truck />
    title: string;
    description: string;
  };