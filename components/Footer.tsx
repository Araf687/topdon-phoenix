import React from "react";
import footerBG from "@/assets/image/footer-bg.svg";
import Image, { StaticImageData } from "next/image";
import brandLogo from "@/assets/image/albionshire.svg";
import P from "./ui/customized/P";
import { footerLink_Services, footerLinks_Company } from "@/lib/constants";
import Link from "next/link";
import card1 from "@/assets/image/cards/card-1.svg";
import card2 from "@/assets/image/cards/card-2.svg";
import card3 from "@/assets/image/cards/card-3.svg";
import card4 from "@/assets/image/cards/card-4.svg";
import card5 from "@/assets/image/cards/card-5.svg";
import fb from "@/assets/image/icon/fb.svg";
import insta from "@/assets/image/icon/insta.svg";
import youtube from "@/assets/image/icon/youtube.svg";
import tweetdeck from "@/assets/image/icon/xcore.svg";

const Footer = () => {
  const allPaymentCards = [card1, card2, card3, card4, card5];
  const socialIcons = [fb, tweetdeck, insta, youtube];
  return (
    <div
      //   className=""
      style={{
        backgroundImage: `url(${footerBG.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" px-[34px] lg:px-[120px] py-[30px] lg:py-[70px] grid grid-cols-1 lg:grid-cols-4 gap-[30px] items-center lg:items-start border-b border-[#CCCCCC]">
        {/* Left section (Brand logo and description) */}
        <div className="flex flex-col justify-start space-y-[10px] lg:space-y-4">
          <Image
            src={brandLogo}
            alt="brandLogo"
            className="h-[70px] w-[249px]"
          />
          <p className="text-[15px] text-justify text-white lg:pr-10">
            When you need the best auto parts for your ride, turn to Autovio.
            Limited time offer for only new customers, also get free shipping on
            orders.
          </p>
          <div className="flex items-center gap-[30px]">
            {socialIcons &&
              socialIcons.map((item: StaticImageData, index: number) => (
                <Image key={index} src={item} alt={"social-icon"} />
              ))}
          </div>
        </div>

        {/* Our Company section */}
        <div className="flex flex-col justify-start space-y-[10px] lg:space-y-[24px]">
          <P>Our Company</P>
          <div className="space-y-[15px] text-[#CCCCCC]">
            {footerLinks_Company.map(
              (item: { name: string; link: string }, index: number) => (
                <Link href={item.link} key={index} className="block">
                  {item?.name}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Our Services section */}
        <div className="flex flex-col justify-start space-y-[10px] lg:space-y-[24px]">
          <P>Our Services</P>
          <div className="space-y-[15px] text-[#CCCCCC]">
            {footerLink_Services.map(
              (item: { name: string; link: string }, index: number) => (
                <Link href={item.link} key={index} className="block">
                  {item?.name}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Contact Us section */}
        <div className="flex flex-col justify-start space-y-[10px] lg:space-y-[24px]">
          <P>Contact Us</P>
          <div className="space-y-[15px]">
            <p className="text-16px">
              <span className="text-[#EA4C49]">Address: </span>
              <span className="text-[#CCCCCC] text-wrap">
                126 Horton Grange Road, Bradford, West Yorkshire, BD7 2DW
              </span>
            </p>
            <p className="text-16px">
              <span className="text-[#EA4C49]">Phone: </span>
              <span className="text-[#CCCCCC] text-wrap">+1 86.36.166</span>
            </p>
            <p className="text-16px">
              <span className="text-[#EA4C49]">Fax: </span>
              <span className="text-[#CCCCCC] text-wrap">12345</span>
            </p>
            <p className="text-16px">
              <span className="text-[#EA4C49]">Mail: </span>
              <span className="text-[#CCCCCC] text-wrap">
                contact@abc.co.uk
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center px-[20px] lg:px-[120px] py-[20px] gap-[15px] lg:bg-none bg-[#13273A]">
        <p className="text-center lg:text-left text-[#CCCCCC] text-[15px]">
          Copyright © 2024 <span className="text-[#EA4C49]">abc</span> - All
          Rights Reserved.
        </p>

        <div className="flex justify-center lg:justify-end w-full lg:w-auto order-1 space-y-[10px] lg:order-none">
          <div className="flex items-center gap-[10px] ">
            {allPaymentCards &&
              allPaymentCards.map((imgSrc: StaticImageData, index: number) => (
                <Image key={index} src={imgSrc} alt="payment-card-image" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
