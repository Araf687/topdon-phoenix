import * as React from "react";
import { FeaturedProduct } from "@/types/data";
import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  //  Star
} from "lucide-react";
import Rating from "@/assets/image/featured_products/rating.svg";
import { Separator } from "../ui/separator";

export function FeaturedProductCard({ data }: { data: FeaturedProduct }) {
  const { image, name, rating, price_was, price_now, status } = data;
  console.log(rating);
  return (
    <div className="border w-[277px] rounded-[15px] shadow-md">
      {/* Product Image */}
      <div className="relative pb-[25px]">
        <Image
          src={image}
          alt={name || "featured-product"}
          className="rounded-t-[15px] object-cover"
          width={277}
        />

        <div className="absolute inset-0 flex justify-between items-start p-2">
          <div className="bg-[#253146] p-2 rounded">
            <Heart color="white" size={"20px"} />
          </div>
          {/* Status */}
          {status && <Image src={status} alt="product-status" />}
        </div>
      </div>

      {/* Product Info */}
      <div className="px-[25px] space-y-4 pb-[25px] ">
        {/* Rating */}

        {/* dynamically shows the rating */}
        {/* <div className="flex items-center">
          {Array.from({ length: rating }, (_, index) => (
            <Star key={index} color="#FFD700" size={15} />
          ))}
        </div> */}

        <div className="flex items-center gap-1">
          <span className="text-[#737F96] text-sm">Rating: </span>
          <Image src={Rating} alt="ratings" />
        </div>
        <Separator color="#253146" />
        <h3 className="font-semibold text-[14px] text-[#838896]">{name}</h3>
        <Separator color="#253146" />

        {/* Pricing */}
        <div className="flex items-center gap-2">
          <span className="text-[#EA4C49] text-wide font-bold text-base">
            ${price_now}
          </span>
          {price_was && (
            <span className="text-[#737F96] text-wide line-through text-sm">
              ${price_was}
            </span>
          )}
          <span className="text-[#CCCCCC] text-sm">Inc. VAT</span>
        </div>

        <div className="w-full flex justify-center items-center text-[16px] gap-2 py-[10px] bg-[#282E3A] text-[#838896] rounded-[30px] hover:bg-[#EA4C49] hover:text-white transition-colors duration-300 ease-in-out cursor-pointer">
          <ShoppingCart color="#838896" className="h-[20px] w-[20px]" /> Add to
          Cart
        </div>
      </div>
    </div>
  );
}
