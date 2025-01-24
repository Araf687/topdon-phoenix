import { Slider } from "@/components/home/Slider";
import sliderBg from "@/assets/image/sliderbg.png";
import OfferSection from "@/components/home/OfferSection";

export default function Home() {
  return (
    <div>
      <div
        className=" h-[430px] md:h-[623px] bg-cover bg-center bg-[#1a1f28]"
        style={{
          backgroundImage: `url(${sliderBg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
         <OfferSection/>
        <Slider />
      </div>
    </div>
  );
}
