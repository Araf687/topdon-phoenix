import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface NavLinkProps {
  name: string;
  link: string;
}
export interface Benefit {
  icon: ReactNode; // To allow JSX components like <Truck />
  title: string;
  description: string;
  numberIcon:ReactNode;
}

export interface FeaturedProduct {
  image: StaticImageData;
  name: string;
  rating: number;
  price_was: string;
  price_now: string;
  status: StaticImageData | ""; // Customize this based on the possible statuses you need
}
