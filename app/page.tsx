import { Slider } from "@/components/home/Slider";
import sliderBg from "@/assets/image/sliderbg.png";
import OfferSection from "@/components/home/OfferSection";
import H from "@/components/ui/customized/Heading";
import scannerImage from "@/assets/image/scanner.svg";
import Image from "next/image";
import P from "@/components/ui/customized/P";
import { Headset, PoundSterling, Truck, Wrench } from "lucide-react";
import Description from "@/components/ui/customized/Description";
import { Benefit } from "@/types/data";
import BenifitCard from "@/components/home/BenifitCard";

export default function Home() {
  const benifits = [
    {
      icon: <Headset color="#EA4C49" size={40} />,
      title: "Excellent customer service",
      description:
        "We genuinely believe the key to success is serving our customers. Being there for you before and after the sale. See our feedback to get a feel for how much we GENUINELY care about our customers.",
    },
    {
      icon: <Wrench color="#EA4C49" size={40} />,
      title: "Tools you can trust",
      description:
        "We know the diagnostics industry can be a minefield, terms such as EOBD2, OBDII, CANBUS, UDS and with so many scanners to choose from it can be difficult to decide what to buy. We’ll talk you through the options and we’ll never up sell. We’ll advise what’s appropriate for you.",
    },
    {
      icon: <Truck color="#EA4C49" size={40} />,
      title: "FREE next day delivery",
      description:
        "We know when you order a scanner for your car, you may need it fast! All of our scanners are dispatched via Royal Mail first class the next working day, providing you order before our cut off time of 12pm.",
    },
  ];
  return (
    <div className="bg-[#1A1F28]">
      <div
        className=" h-[430px] md:h-[623px] bg-cover bg-center bg-[#1a1f28]"
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
        <div className="px-[20px] lg:px-[120px] py-20 bg-[#1A1F28]">
          {/* toots & scanner view */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1 md:col-span-2">
              <p className="text-[#CCCCCC] font-sans text-xl font-thin text-center">
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
          <div className="py-20 mt-20 border-t">
            <H className="font-bold italic">Why Choose Us?</H>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {benifits.map((item: Benefit, index: number) => (
                <BenifitCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
