import { LinearGradient } from "react-text-gradients";
import styles from "../../styles/navbar.module.css";

import MarketItem from "@/components/Home/MarketItem";
import classNames from "classnames";

import "swiper/css";
import "swiper/css/pagination";

export default function Market() {
  return (
    <>
      <div className="flex flex-col justify-center space-y-12">
        <p className="text-5xl font-extrabold text-center">
          magicoon{" "}
          <LinearGradient gradient={["to right", "#396CE8 0%, #C76EC4 100%"]}>
            Market
          </LinearGradient>
        </p>
        <div>
          <p className="text-lg text-center font-medium">
            We would like you to be able to use magicoon in the best way.
          </p>
          <p className="text-lg text-center">
            The section below will tell you how.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
          {[...market].map(({ price, src }) => (
            <MarketItem key={src} price={price} src={src} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button
            className={classNames(
              "h-12 px-6 rounded-full font-bold text-primary-content text-center",
              styles["gradient-button"]
            )}
          >
            GO TO MARKET!
          </button>
        </div>
      </div>

      <div className="mt-40 flex flex-col xl:flex-row justify-around bg-[#EAEEF5] rounded-xl py-12 px-12 space-y-6 space-x-0 xl:space-x-6 xl:space-y-0 items-center xl:items-start">
        <div className="flex-[1] flex flex-col items-center space-y-8 justify-center xl:items-start">
          <p className="text-5xl font-extrabol mb-4">
            magicoon{" "}
            <LinearGradient
              gradient={[
                "to right",
                "rgba(199,110,196,1) 0%, rgba(255,144,152,1) 49%, rgba(57,108,232,1) 100%",
              ]}
              className="text-5xl font-extrabold"
            >
              Freebies
            </LinearGradient>
          </p>
          <p className="text-lg font-medium text-center lg:text-left">
            We would like you to be able to use magicoon in the best way. The
            section below will tell you how.
          </p>
          <button className="btn btn-primary text-primary-content px-6 text-lg rounded-full">
            START NOW!
          </button>
        </div>
        <div className="flex flex-col lg:flex-row space-x-0 space-y-6 lg:space-y-0 lg:space-x-6">
          <MarketItem src="/1-Detail Images-288 UI icons library-Seyfeddine Beroual.png" />
          <MarketItem src="/1 - Detail Images - magicoon - Modern icons library 1800-1360.png" />
        </div>
      </div>
    </>
  );
}

const market = [
  {
    price: 21,
    src: "/1 - Detail Images - magicoon - Modern icons library 1800-1360.png",
  },
  {
    price: 31,
    src: "/1.png",
  },
  {
    price: 41,
    src: "/1-Detail Images-288 UI icons library-Seyfeddine Beroual.png",
  },
];
