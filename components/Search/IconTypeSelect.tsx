import classNames from "classnames";
import Link from "next/link";
import { HiLightningBolt } from "react-icons/hi";
import Svg from "./Svg";
import { useSearchStore } from "@/store/zustand";
import useMediaQuery from "@/hooks/useMediaQuery";
import HeroSeach from "./HeroSearch";
import { useEffect, useState } from "react";
import { responsive } from "../../lib/tw";

export default function IconTypeSelect() {
  const { color, resetColor, setColor, iconType, setIconType, heroRef } =
    useSearchStore();
  const [hasScrolled, setHasScrolled] = useState(false);
  const { isXXs } = useMediaQuery();
  console.log(
    responsive(
      "md",
      "flex-row items-center justify-center w-fit h-fit text-xs px-3 py-1 rounded-full space-x-2 bg-red-500"
    )
  );
  const heroRefCurrent = heroRef.current;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setHasScrolled(true);
          } else {
            setHasScrolled(false);
          }
        });
      },
      { threshold: 0 }
    );

    if (heroRefCurrent) {
      observer.observe(heroRefCurrent);
    }

    return () => {
      if (heroRefCurrent) {
        observer.unobserve(heroRefCurrent);
      }
    };
  }, [heroRefCurrent]);
  return (
    <div className="max-w-[1224px] md:max-w-[1240px] md:px-8 pt-2 mx-auto space-y-4">
      {hasScrolled && <HeroSeach />}
      <div className="flex justify-between flex-col lg:flex-row space-y-4 lg:space-y-0">
        <div className="border border-[#E0E8F3] flex rounded-full justify-evenly lg:justify-center items-center py-1 px-2 space-x-2">
          <button
            onClick={() => {
              setIconType(0);
            }}
            className={classNames("btn btn-sm btn-circle text-xs", {
              "bg-success hover:bg-success text-primary-content":
                iconType === 0,
              "text-primary hover:bg-[#E0E8F3] bg-transparent border-none":
                iconType !== 0,
            })}
          >
            ALL
          </button>
          {iconTypes.map((type, i) => (
            <button
              key={type.name}
              onClick={() => {
                setIconType(i + 1);
              }}
              className={classNames(
                "rounded-2xl btn-sm font-bold text-[10px] flex flex-col items-center justify-center w-14 h-14",
                "md:flex-row md:items-center md:justify-center md:w-fit md:h-fit md:text-xs md:px-3 md:py-1 md:rounded-full md:space-x-2",
                {
                  "bg-success hover:bg-success text-primary-content":
                    iconType === i + 1,
                  "text-primary hover:bg-[#E0E8F3] bg-transparent border-none":
                    iconType !== i + 1,
                }
              )}
            >
              <Svg
                fill={iconType !== i + 1 ? "#25314C" : "#F8F9FB"}
                path={type.path}
              />
              <span>{type.name}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-row justify-between items-center lg:justify-start space-x-4">
          <div className="flex items-center justify-center space-x-3 border border-[#E0E8F3] rounded-full py-1 px-2 w-fit lg:mx-auto">
            <button
              className="btn btn-primary btn-sm rounded-full"
              onClick={resetColor}
            >
              Reset
            </button>
            <p className="font-medium w-16">{color}</p>
            <div
              className="rounded-full w-6 h-6 cursor-pointer"
              style={{
                backgroundColor: color,
              }}
            >
              <input
                type="color"
                className="rounded-full w-6 h-6 overflow-hidden opacity-0 cursor-pointer"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>
            {/* <div className="w-6 h-6 bg-primary rounded-full " /> */}
          </div>
          <Link
            href="/"
            className={classNames(
              "btn btn-sm md:btn-md text-md md:text-lg btn-success hover:bg-[#6753da] text-primary-content rounded-full lg:px-6",
              {
                isXXs: "btn-circle",
              }
            )}
          >
            <HiLightningBolt size={18} /> {!isXXs && <span>5,400+ ICONS</span>}
          </Link>
        </div>
      </div>
    </div>
  );
}

const iconTypes = [
  {
    name: "LIGHT",
    path: "M12.0009 2.5C6.76392 2.5 2.50287 6.76102 2.50287 11.999C2.50287 13.363 2.80605 14.736 3.38105 15.974C3.52505 16.274 3.53589 16.648 3.41889 17.019L2.57782 19.52C2.39682 20.062 2.53803 20.651 2.94403 21.057C3.23203 21.346 3.61383 21.5 4.00483 21.5C4.16383 21.5 4.32388 21.474 4.48188 21.422L6.97504 20.585C7.35204 20.464 7.72593 20.477 8.03193 20.622C9.26493 21.195 10.6379 21.498 12.0019 21.498C17.2389 21.498 21.5009 17.237 21.5009 11.999C21.5009 6.76102 17.2379 2.5 12.0009 2.5ZM12.0009 20.498C10.7819 20.498 9.55595 20.227 8.45795 19.717C7.92695 19.463 7.29203 19.433 6.66303 19.634L4.16401 20.473C3.98101 20.533 3.78982 20.487 3.65082 20.349C3.51182 20.211 3.46482 20.018 3.52582 19.837L4.36884 17.33C4.56584 16.708 4.53585 16.074 4.28485 15.548C3.77285 14.445 3.50287 13.218 3.50287 11.999C3.50287 7.31302 7.31492 3.5 12.0009 3.5C16.6879 3.5 20.4999 7.31202 20.4999 11.999C20.4999 16.686 16.6879 20.498 12.0009 20.498ZM12.7499 12C12.7499 12.414 12.4158 12.75 12.0038 12.75C11.5928 12.75 11.2499 12.414 11.2499 12C11.2499 11.586 11.577 11.25 11.989 11.25H12.0038C12.4158 11.25 12.7499 11.586 12.7499 12ZM16.7499 12C16.7499 12.414 16.4158 12.75 16.0038 12.75C15.5928 12.75 15.2499 12.414 15.2499 12C15.2499 11.586 15.577 11.25 15.989 11.25H16.0038C16.4158 11.25 16.7499 11.586 16.7499 12ZM8.74994 12C8.74994 12.414 8.41585 12.75 8.00385 12.75C7.59285 12.75 7.24994 12.414 7.24994 12C7.24994 11.586 7.57696 11.25 7.98896 11.25H8.00385C8.41585 11.25 8.74994 11.586 8.74994 12Z",
  },
  {
    name: "REGULAR",
    path: "M4.0049 21.749C3.5479 21.749 3.10409 21.569 2.76809 21.233C2.29408 20.76 2.13108 20.073 2.34108 19.441L3.1819 16.94C3.2799 16.633 3.27102 16.325 3.15602 16.082C2.56402 14.809 2.25392 13.399 2.25392 11.999C2.25392 6.62402 6.62697 2.25 12.002 2.25C17.378 2.25 21.751 6.62302 21.751 11.999C21.751 17.375 17.378 21.748 12.002 21.748C10.603 21.748 9.19302 21.437 7.92702 20.848C7.67902 20.729 7.37002 20.721 7.05202 20.822L4.56301 21.658C4.37801 21.719 4.1899 21.749 4.0049 21.749ZM12.001 3.75C7.453 3.75 3.75295 7.45002 3.75295 11.999C3.75295 13.182 4.01596 14.373 4.51296 15.443C4.78896 16.024 4.82493 16.723 4.60793 17.406L3.76393 19.917C3.72193 20.042 3.7859 20.131 3.8279 20.173C3.8699 20.215 3.95998 20.279 4.08498 20.237L6.58303 19.398C7.27703 19.177 7.97696 19.211 8.56496 19.492C9.62696 19.986 10.818 20.249 12.001 20.249C16.55 20.249 20.25 16.549 20.25 12C20.25 7.451 16.55 3.75 12.001 3.75ZM12.0049 13C11.4529 13 11 12.552 11 12C11 11.448 11.4431 11 11.9951 11H12.0049C12.5579 11 13.0049 11.448 13.0049 12C13.0049 12.552 12.5579 13 12.0049 13ZM17.0049 12C17.0049 11.448 16.5579 11 16.0049 11H15.9951C15.4431 11 15 11.448 15 12C15 12.552 15.4529 13 16.0049 13C16.5579 13 17.0049 12.552 17.0049 12ZM9.0049 12C9.0049 11.448 8.5579 11 8.0049 11H7.99514C7.44314 11 7.00002 11.448 7.00002 12C7.00002 12.552 7.4529 13 8.0049 13C8.5579 13 9.0049 12.552 9.0049 12Z",
  },
  {
    name: "FILLED",
    path: "M12.001 3C7.031 3 3.00197 7.02902 3.00197 11.999C3.00197 13.339 3.30205 14.619 3.83205 15.758C4.04205 16.198 4.04211 16.708 3.89211 17.178L3.05202 19.678C2.79202 20.458 3.54204 21.208 4.32204 20.948L6.82204 20.108C7.29204 19.958 7.80196 19.958 8.24196 20.168C9.38197 20.698 10.662 20.998 12.002 20.998C16.972 20.998 21.001 16.969 21.001 11.999C21 7.02902 16.971 3 12.001 3ZM8.00197 13C7.44997 13 6.99709 12.552 6.99709 12C6.99709 11.448 7.43996 11 7.99196 11H8.00197C8.55497 11 9.00198 11.448 9.00198 12C9.00198 12.552 8.55497 13 8.00197 13ZM12.002 13C11.45 13 10.9971 12.552 10.9971 12C10.9971 11.448 11.44 11 11.992 11H12.002C12.555 11 13.002 11.448 13.002 12C13.002 12.552 12.555 13 12.002 13ZM16.002 13C15.45 13 14.9971 12.552 14.9971 12C14.9971 11.448 15.44 11 15.992 11H16.002C16.555 11 17.002 11.448 17.002 12C17.002 12.552 16.555 13 16.002 13Z",
  },
  {
    name: "DUOTONE",
    path: [
      "M3.00197 11.999C3.00197 13.339 3.30205 14.619 3.83205 15.759C4.04205 16.199 4.04211 16.709 3.89211 17.179L3.05202 19.679C2.79202 20.459 3.54204 21.209 4.32204 20.949L6.82204 20.109C7.29204 19.959 7.80196 19.959 8.24196 20.169C9.38197 20.699 10.662 20.999 12.002 20.999C16.972 20.999 21.001 16.97 21.001 12C21.001 7.03 16.972 3.00098 12.002 3.00098C7.03097 2.99998 3.00197 7.02902 3.00197 11.999Z",
      "M12.002 13C11.45 13 10.9971 12.552 10.9971 12C10.9971 11.448 11.4399 11 11.9919 11H12.002C12.555 11 13.002 11.448 13.002 12C13.002 12.552 12.555 13 12.002 13ZM17.002 12C17.002 11.448 16.555 11 16.002 11H15.9919C15.4399 11 14.9971 11.448 14.9971 12C14.9971 12.552 15.45 13 16.002 13C16.555 13 17.002 12.552 17.002 12ZM9.00195 12C9.00195 11.448 8.55495 11 8.00195 11H7.99194C7.43994 11 6.99707 11.448 6.99707 12C6.99707 12.552 7.44995 13 8.00195 13C8.55495 13 9.00195 12.552 9.00195 12Z",
    ],
  },
];
