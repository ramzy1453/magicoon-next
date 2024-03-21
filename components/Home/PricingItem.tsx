import classNames from "classnames";
import Image from "next/image";
import React from "react";

type Props = {
  pricingItem: IPricingItem;
  isMobile?: boolean;
};

export default function PricingItem({ pricingItem, isMobile }: Props) {
  return (
    <div
      className={classNames("border rounded-2xl overflow-hidden bg-white", {
        "px-5 lg:px-10 py-8 lg:py-14": !isMobile,
        "border-info relative": pricingItem.isPopular,
        "px-10 py-14": isMobile,
      })}
    >
      {pricingItem.isPopular && (
        <div className="bg-info absolute transition-all text-white top-0 right-0 rounded-bl-2xl text-lg px-6 py-2">
          Popular
        </div>
      )}
      <div id="header" className="flex flex-col space-y-4 mb-6">
        <div>
          <p className="text-primary text-md font-black">{pricingItem.title}</p>
          <p className="font-medium text-sm">{pricingItem.description} </p>
        </div>
        <div className="flex items-center space-x-4">
          <p
            className={classNames("font-black", {
              "text-3xl lg:text-5xl": !isMobile,
              "text-5xl": isMobile,
            })}
          >
            ${pricingItem.price}
          </p>
          <span className="font-bold text-lg">/One time</span>
        </div>
      </div>
      <div className="flex items-center justify-center mb-8">
        <button
          className={classNames(
            "btn btn-info text-primary-content rounded-full btn-block hover:bg-[#124AD5]",
            {
              "btn-md": isMobile,
              "btn-sm lg:btn-md": !isMobile,
            }
          )}
        >
          CHOOSE PLAN
        </button>
      </div>
      <div id="details-container" className="flex flex-col space-y-4">
        {pricingItem.content.map((detail) => {
          if (detail.link) {
            const [before, after] = detail.title?.split(detail.link.split);
            return (
              <div className="pl-0" key={detail.title}>
                <div className="flex">
                  <Image
                    alt="icon"
                    src={`check-circle-${detail.approved ? "blue" : "red"}.svg`}
                    width={16}
                    height={16}
                    className="mr-3"
                  />

                  <p className="font-bold">
                    {before}
                    <a
                      href={detail.link.to}
                      className="text-blue-600 dark:text-blue-500 underline"
                    >
                      {detail.link.split}
                    </a>
                    {after}
                  </p>
                </div>
                {detail.subtitle && (
                  <div className="flex">
                    <div className="w-4 h-4 mr-3" />
                    <p className="text-sm text-[#25314C]">{detail.subtitle}</p>
                  </div>
                )}
              </div>
            );
          }
          return (
            <div className="pl-0" key={detail.title}>
              <div className="flex">
                <Image
                  alt="icon"
                  src={`check-circle-${detail.approved ? "blue" : "red"}.svg`}
                  width={16}
                  height={16}
                  className="mr-3"
                />
                <p className="font-bold">{detail.title}</p>
              </div>
              {detail.subtitle && (
                <div className="flex">
                  <div className="w-4 h-4 mr-3" />
                  <p className="text-sm text-[#25314C]">{detail.subtitle}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export type IPricingDetails = {
  title: string;
  subtitle?: string;
  approved: boolean;
  link?: {
    split: string;
    to: string;
  };
};

export type IPricingItem = {
  title: string;
  description: string;
  price: number;
  isPopular?: boolean;
  content: IPricingDetails[];
};
