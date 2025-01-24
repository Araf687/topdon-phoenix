import React from "react";
import product1Img from "@/assets/image/featured_products/vw_audi_sakoda_seat.svg";
import product2Img from "@/assets/image/featured_products/ancel_vd700_for_audi.svg";
import product3Img from "@/assets/image/featured_products/obd-evelenpro.svg";
import product4Img from "@/assets/image/featured_products/icrasoft_cr_max.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { FeaturedProductCard } from "./FeaturedProductCard";
import H from "../ui/customized/Heading";

const FeatureProductsSection = () => {
  const featuredProducts = [
    {
      image: product1Img,
      name: "VDubDiag for VW Audi Skoda Seat",
      rating: 5,
      price_was: "£89.99",
      price_now: "£79.99",
      status: "sale",
    },
    {
      image: product2Img,
      name: "ANCEL VD700 FOR AUDI, SEAT, SKODA, VOLKSWAGEN...",
      rating: 5,
      price_was: "£129.99",
      price_now: "£89.99",
      status: "new",
    },
    {
      image: product3Img,
      name: "OBDeleven Pro Pack (NextGen) Bluetooth Scanner...",
      rating: 5,
      price_was: "£119.99",
      price_now: "£114.99",
      status: "sold out",
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
    <div>
        <H className="itelic font-bold">Featured Products</H>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {featuredProducts.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <FeaturedProductCard data={item} />
            </CarouselItem>
          ))}
          \
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeatureProductsSection;
