import React from "react";
import product1Img from "@/assets/image/featured_products/vw_audi_sakoda_seat.svg";
import product2Img from "@/assets/image/featured_products/ancel_vd700_for_audi.svg";
import product3Img from "@/assets/image/featured_products/obd-evelenpro.svg";
import product4Img from "@/assets/image/featured_products/icrasoft_cr_max.svg";
import sale from "@/assets/image/featured_products/sale.svg";
import soldOut from "@/assets/image/featured_products/sold-out.svg";
import New from "@/assets/image/featured_products/new.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { FeaturedProductCard } from "./FeaturedProductCard";
import H from "../ui/customized/Heading";
import { FeaturedProductCategoryOption } from "@/lib/constants";
import { ChevronRight } from "lucide-react";

const FeatureProductsSection = () => {
  const featuredProducts = [
    {
      image: product1Img,
      name: "VDubDiag for VW Audi Skoda Seat",
      rating: 5,
      price_was: "£89.99",
      price_now: "£79.99",
      status: sale,
    },
    {
      image: product2Img,
      name: "ANCEL VD700 FOR AUDI, SEAT, SKODA, VOLKSWAGEN...",
      rating: 5,
      price_was: "£129.99",
      price_now: "£89.99",
      status: New,
    },
    {
      image: product3Img,
      name: "OBDeleven Pro Pack (NextGen) Bluetooth Scanner...",
      rating: 5,
      price_was: "£119.99",
      price_now: "£114.99",
      status: soldOut,
    },
    {
      image: product4Img,
      name: "iCarsoft CR MAX – 2024 Full System All Makes...",
      rating: 5,
      price_was: "£429.99",
      price_now: "£349.99",
      status: "",
    },
  ];

  return (
    <div className="border-b pt-[40px] pb-[100px] lg:pt-[70px] lg:pb-[150px]">
      <div className="space-y-[30px] relative">
        <H className="italic uppercase font-bold">Featured Products</H>
        <div className="overflow-hidden">
          {/* Category Options */}

          {FeaturedProductCategoryOption.map(
            (item: { name: string; isSelected: boolean }, index: number) => (
              <span
                key={index}
                className={`${
                  item.isSelected && "bg-[#EA4C49]"
                } px-[15px] py-[5px] text-white text-[16px] rounded-[5px]`}
              >
                {item?.name}
              </span>
            )
          )}

          {/* See All Products */}
          <p
            className={`lg:px-[15px] py-[5px] text-[#737F96] rounded-[5px] text-[16px] lg:inline`}
          >
            See All Products <ChevronRight className="inline" />
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="gap-2">
              {" "}
              {/* Reduce gap here */}
              {featuredProducts.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/4 flex-shrink-0" // Ensure items don't shrink
                >
                  <FeaturedProductCard data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <div className="absolute lg:bottom-[-50px] bottom-[-40px] left-0 w-full flex justify-center space-x-4">
              <CarouselPrevious className="left-[45%]" />
              <CarouselNext className="left-[55%]" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeatureProductsSection;
