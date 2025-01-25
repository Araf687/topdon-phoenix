import { Slider } from "@/components/home/Slider";
import sliderBg from "@/assets/image/sliderbg.svg";
import OfferSection from "@/components/home/OfferSection";
import H from "@/components/ui/customized/Heading";

import Image, { StaticImageData } from "next/image";
import P from "@/components/ui/customized/P";
import {  PoundSterling } from "lucide-react";
import Description from "@/components/ui/customized/Description";
import { Benefit } from "@/types/data";
import BenifitCard from "@/components/home/BenifitCard";
import FeatureProductsSection from "@/components/home/FeatureProductsSection";
import CustomerReviewSection from "@/components/home/CustomerReviewSection";
import scannerImage from "@/assets/image/scanner.svg";
import audi from "@/assets/image/brands/audi-logo.svg";
import bmw from "@/assets/image/brands/bmw-logo.svg";
import jaguar from "@/assets/image/brands/jaguar-logo.svg";
import rangeRover from "@/assets/image/brands/range-rover-logo.svg";
import seat from "@/assets/image/brands/seat-logo.svg";
import skoda from "@/assets/image/brands/skoda-logo.svg";
import vw from "@/assets/image/brands/vw-logo.svg";
import headphone from "@/assets/image/icon/headphone.svg";
import truck from "@/assets/image/icon/truck.svg";
import tools from "@/assets/image/icon/tools.svg";
import one from "@/assets/image/icon/1.svg"
import two from "@/assets/image/icon/2.svg"
import three from "@/assets/image/icon/3.svg"

export default function Home() {
  const benifits = [
    {
      icon: <Image src={headphone} alt="icon" height={40}/>,
      numberIcon:<Image src={one} alt="iconc" />,
      title: "Excellent customer service",
      description:
        "We genuinely believe the key to success is serving our customers. Being there for you before and after the sale. See our feedback to get a feel for how much we GENUINELY care about our customers.",
    },
    {
      icon:  <Image src={tools} alt="icon" height={40}/>,
      numberIcon:<Image src={two} alt="iconc"/>,
      title: "Tools you can trust",
      description:
        "We know the diagnostics industry can be a minefield, terms such as EOBD2, OBDII, CANBUS, UDS and with so many scanners to choose from it can be difficult to decide what to buy. We’ll talk you through the options and we’ll never up sell. We’ll advise what’s appropriate for you.",
    },
    {
      icon: <Image src={truck} alt="icon" height={40}/>,
      numberIcon:<Image src={three} alt="iconc"/>,
      title: "FREE next day delivery",
      description:
        "We know when you order a scanner for your car, you may need it fast! All of our scanners are dispatched via Royal Mail first class the next working day, providing you order before our cut off time of 12pm.",
    },
  ];

  const brandImages = [vw, audi, bmw, jaguar, seat, skoda, rangeRover];

  return (
    <div className="bg-[#1A1F28]">
      <div
        className=" h-[300px] md:h-[623px] bg-cover bg-center bg-[#1a1f28]"
        style={{
          backgroundImage: `url(${sliderBg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <OfferSection />
        <Slider />
      </div>

      {/* body container */}
      <div>
        <div className="px-[20px] lg:px-[120px] bg-[#1A1F28]">
          {/* toots & scanner view */}
          <div className="grid grid-cols-1 pb-[40px] lg:pb-[80px] md:grid-cols-2 ">
            <div className="col-span-1 py-[30px] lg:py-[50px] md:col-span-2">
              <p className="text-[#CCCCCC] font-sans text-[14px] lg:text-[24px] font-thin text-center">
                Car Diagnostic
              </p>
              <H className="text-center">Tools and Scanners</H>
            </div>

            {/* Image section */}
            <div className="col-span-1 md:flex md:justify-center">
              <Image
                src={scannerImage}
                className="w-[537px]"
                alt="scanner-image"
              />
            </div>

            <div className="md:col-span-1 flex justify-center items-center ">
              <div className="gap-10">
                <P
                  className="lg:text-left flex items-center mb-2"
                  color="#CCCCCC"
                >
                  <PoundSterling color="#737F96" className="mr-1 lg:h-21" />{" "}
                  Save money and diagnose faults
                </P>
                <Description color="#737F96">
                  A car diagnostic scan from your local dealership could cost up
                  to £100 + VAT. Why not buy a scanner and do it yourself? They
                  are easy to use. The scanner will pay for itself. You can then
                  present the findings to your local mechanic who won’t have to
                  run a diagnostics scan, thus saving time and money.
                </Description>
              </div>
            </div>
          </div>

          {/* benifits section or why choose us? */}
          <div className="py-[35px] lg:py-[70px] space-y-[40px] lg:space-y-[60px] border-t border-b">
            <H className="font-bold uppercase italic">Why Choose Us?</H>
            <div className="grid grid-cols-1 gap-[40px] md:grid-cols-3">
              {benifits.map((item: Benefit, index: number) => (
                <BenifitCard key={index} data={item} />
              ))}
            </div>
          </div>

          {/* Featured product section  */}
          <FeatureProductsSection />
        </div>
        {/* customer review section  */}
        <CustomerReviewSection />

        {/* brand section */}
        <div className="bg-[#1D232D] py-[40px] px-[26px] overflow-x-auto lg:px-[120px] lg:py-[70px]">
          <div className="flex justify-between items-center lg:spacex-1 space-x-10">
            {brandImages.map((item: StaticImageData, index) => (
              <Image
                key={index}
                src={item}
                alt="brand-image"
                className="flex-shrink-0" // Prevents images from shrinking
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
