import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  price?: number;
  src: string;
};

export default function MarketItem(props: Props) {
  return (
    <Link
      href="/search"
      className="card card-compact bg-white border border-[#DCE3ED] h-94 min-w-[376px] md:min-w-[300px] lg:min-w-[376px] cursor-pointer hover:shadow transition"
    >
      <Image
        src={props.src}
        alt="Shoes"
        className="rounded-tr-xl rounded-tl-xl w-full"
        width={376}
        height={284}
      />
      <div className="card-body">
        <div className="flex justify-between items-center">
          <p className="text-md font-medium">magicoon - 288 UI icons library</p>
          {props.price ? (
            <p className="font-bold text-lg text-right">${props.price}</p>
          ) : (
            <button className="btn btn-primary rounded-full text-primary-content btn-xs">
              Free
            </button>
          )}
        </div>
        <p className="text-sm font-bold">
          <span className="text-[#8594B4]">By </span>
          magicoon Library
        </p>
      </div>
    </Link>
  );
}
