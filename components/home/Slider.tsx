import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import phoenixImage from "@/assets/image/phoenix.svg";
import Image from "next/image";

export function Slider() {
  return (
    <div className="h-full  lg:px-10 relative overflow-hidden">
     
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex h-full items-center justify-center lg:p-10">
                {/* Left section (Text content) */}
                <div className="w-1/2 py-10 px-5 lg:p-10">
                  <p className="lg:text-3xl text-white">TOPDON Phoenix Elite</p>
                  <p className="mt-4 text-white lg:block hidden">
                    TOPDON Phoenix Elite, dealer-level diagnostics at a fraction
                    of the cost. If you don’t need the online programming
                    capabilities, you may want to consider the PHOENIX LITE 2, which offers
                      excellent value for money.
                   
                  </p>
                  <p className="mt-4 text-xs text-white lg:hidden ">
                    TOPDON Phoenix Elite, dealer-level diagnostics at a fraction
                    of the cost. If you don’t need the online programming
                    capabilities,
                  
                  </p>
                    <Button className="mt-4 bg-[#EA4C49] lg:p-5 lg:text-lg">Learn More</Button>
                </div>

                {/* Right section (Image) */}
                <div className="w-1/2 flex justify-center">
                  <Image
                    src={phoenixImage}
                    alt="phoenix-img"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="invisible lg:visible absolute left-0 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="invisible lg:visible absolute right-0 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
