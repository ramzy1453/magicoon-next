import React from "react";
import { LinearGradient } from "react-text-gradients";
import { HiLightningBolt } from "react-icons/hi";
import InputSearch from "@/components/Home/InputSearch";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useSearchStore } from "@/store/zustand";
import { useRouter } from "next/navigation";
export default function Hero() {
  const { isMd } = useMediaQuery();
  const { setQuery } = useSearchStore();
  const router = useRouter();

  return (
    <>
      <h1 className="text-center">
        <LinearGradient
          gradient={[
            "to right",
            "rgba(199,110,196,1) 0%, rgba(255,144,152,1) 49%, rgba(57,108,232,1) 100%",
          ]}
          className="text-5xl md:text-6xl font-black"
        >
          5,400+ ICONS
        </LinearGradient>

        <p className="text-5xl md:text-6xl font-black mt-6">
          Ready For Your Next Project!
        </p>
      </h1>
      <p className="text-lg text-primary text-center md:w-3/4 lg:w-1/2 mt-6 mb-8">
        Free and premium high-quality vector icons library, that provides
        multiple formats and styles, made for designers and developers.
      </p>

      <InputSearch width={!isMd ? "full" : undefined} setQuery={setQuery} />

      <div className="flex space-x-6 mt-10">
        <button className="btn text-lg btn-primary btn-outline rounded-full px-6">
          <div className="hover:text-primary-content">LIVE PREVIEW</div>
        </button>
        <button className="btn text-lg btn-info hover:bg-[#0c48d3] text-primary-content rounded-full px-6">
          <HiLightningBolt size={18} /> <div>BUY NOW!</div>
        </button>
      </div>
    </>
  );
}
