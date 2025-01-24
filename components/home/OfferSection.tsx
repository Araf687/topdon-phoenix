import { CircleCheck, ClockAlert, Truck } from "lucide-react";
import React from "react";
import reviewStar from "@/assets/image/reviewStar.svg"; // Make sure the import path is correct
import Image from "next/image";

type OfferSectionItem = {
  icon: React.ReactNode | null;
  offerTitle: string;
};

const OfferSection = () => {
  const offerSection: OfferSectionItem[] = [
    { icon: <Truck />, offerTitle: "Free Delivery" },
    { icon: null, offerTitle: "iCarsoft UK Authorised Dealer" },
    { icon: <Image src={reviewStar} alt="review-star" />, offerTitle: "Rated Excellent" }, // Wrap reviewStar in <img />
    { icon: <ClockAlert />, offerTitle: "On-Time Delivery" },
    { icon: <CircleCheck color="#00809d"/>, offerTitle: "Quality Assurance" },
  ];

  return (
    <div className="lg:flex hidden justify-center items-center gap-20 py-[7px] text-[#FFFFFF]">
      {offerSection.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {item.icon && <span>{item.icon}</span>}
          <span>{item.offerTitle}</span>
        </div>
      ))}
    </div>
  );
};

export default OfferSection;
