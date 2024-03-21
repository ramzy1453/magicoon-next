import cn from "classnames";
import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
};

export default function FeatureItem(props: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white bg-opacity-100",
        "flex p-6 flex-col lg:flex-row items-center gap-6 h-full"
      )}
    >
      <div className="flex btn btn-circle place-content-center rounded-full bg-[#EAEEF5]">
        <Image alt="figma-icon" src={props.icon} width={18} height={18} />
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <p className={cn("text-lg text-primary font-bold")}>{props.title}</p>
        <p className="text-secondary font-bold">{props.subtitle}</p>
      </div>
    </div>
  );
}
