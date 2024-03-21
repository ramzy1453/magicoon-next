import HeroSeach from "@/components/Search/HeroSearch";
import { useSearchStore } from "@/store/zustand";
import Image from "next/image";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";

export default function Hero() {
  const { heroRef } = useSearchStore();
  return (
    <div
      ref={heroRef}
      className="px-6 max-w-[1224px] laptop:max-w-[1240px] laptop:px-8 mx-auto flex flex-col text-primary-content"
    >
      <div className="flex flex-col justify-center space-x-0 laptop:space-x-8 laptop:flex-row laptop:items-start laptop:justify-start mb-12">
        <div className="flex-1 mb-6 laptop:mb-0">
          <div className="font-extrabold text-4xl text-[40px] mb-6 uppercase text-center laptop:text-left">
            <p>Find your</p>
            <p>
              <LinearGradient
                gradient={["to right", "#F5D5E3 0%, #AE99FF 28.78%"]}
                className=""
              >
                UI icons
              </LinearGradient>{" "}
              right now!
            </p>
          </div>
          <p className="text-lg font-medium text-center laptop:text-left">
            <span className="font-extrabold">1080 FREE </span>high-quality UI
            icons that provide multiple styles, made for designers and
            developers.
          </p>
        </div>
        <div className="flex flex-1 justify-center laptop:justify-end items-center">
          <Link
            href="ok"
            className="flex bg-white text-primary rounded-lg min-h-[132px] max-w-[376px] min-w-[270x]"
          >
            <div className="flex items-center justify-center p-2 xs:p-0">
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-tl-lg rounded-bl-lg rounded-tr-lg laptop:rounded-tr-none max-w-[172px] max-h-[132px]"
                  alt="hero-search"
                  src="/hero-search.jpeg"
                  width={172}
                  height={132}
                />
              </div>
            </div>
            <div className="flex flex-col w-[204px] justify-center items-center p-4 space-y-[10px] font-medium text-sm">
              <p className="">
                high-quality essential UI icons, modernly designed, featuring
                multiple styles, and categories.
              </p>
              <p className="self-end">Read more</p>
            </div>
          </Link>{" "}
        </div>
      </div>
      <HeroSeach />
    </div>
  );
}

const PublicityDesktop = () => {
  return 3;
};
const PublicityMobile = () => {
  return (
    <div className="flex flex-col bg-white text-primary rounded-lg min-h-[132px]">
      <Image
        className="rounded-tl-lg rounded-bl-lg rounded-tr-lg laptop:rounded-tr-none"
        alt="hero-search"
        src="/hero-search.jpeg"
        width={172}
        height={132}
      />
      <div className="flex flex-col w-[204px] justify-center items-center p-4 space-y-[10px] font-medium text-sm">
        <p className="">
          high-quality essential UI icons, modernly designed, featuring multiple
          styles, and categories.
        </p>
        <p className="self-end">Read more</p>
      </div>
    </div>
  );
};
