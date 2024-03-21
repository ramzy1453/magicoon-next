import {
  ReactElement,
  RefObject,
  cloneElement,
  useEffect,
  useRef,
} from "react";
import { useSearchStore } from "@/store/zustand";
import Image from "next/image";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { useCopyToClipboard, useOnClickOutside } from "usehooks-ts";
import reactElementToJSXString from "react-element-to-jsx-string";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import classNames from "classnames";

export default function IconPopup() {
  const [_, copy] = useCopyToClipboard();
  const { selectedIcon, color, hideModal } = useSearchStore();
  const { isSm } = useMediaQuery();
  const clonedSvg = cloneElement(selectedIcon?.path as ReactElement, {
    width: "96",
    height: "96",
    fill: color,
  });
  const svg = reactElementToJSXString(clonedSvg);
  const handleCopy = async (text: string) => {
    try {
      await copy(text);
      toast.success("Copied!");
    } catch (error) {
      toast.error("Failed to copy!");
    }
  };

  const download = () => {
    const blob = new Blob([svg]);
    const tempElement = document.createElement("a");
    tempElement.download = `${selectedIcon?.name}-(${selectedIcon?.type}).svg`;
    tempElement.href = window.URL.createObjectURL(blob);
    tempElement.click();
    tempElement.remove();
    toast.success("Downloading!");
  };

  const ref = useRef() as RefObject<HTMLElement>;

  useOnClickOutside(ref, () => {
    hideModal();
  });

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (selectedIcon && e.key === "Escape") {
        hideModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [hideModal, selectedIcon]);

  return (
    <>
      <Toaster position="top-center" />
      <div className="fixed top-0 w-full h-full right-0 left-0 z-50 flex justify-center items-center pt-24">
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.05 }}
          className="modal-box max-w-[440px] p-0"
          ref={ref as RefObject<HTMLDivElement>}
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-between p-4 bg-[#E0E8F3] border-b border-gray-200 px-8 py-4">
              <p className="text-lg font-bold">{selectedIcon?.name}</p>
              <IoMdClose
                size={24}
                className="cursor-pointer"
                onClick={hideModal}
              />
            </div>
            <div className="p-8 space-y-6 sm:space-y-0 flex flex-col sm:flex-row space-x-0 sm:space-x-6 border-b border-[#E0E8F3]">
              <div className="flex items-center justify-center">
                <div className="bg-[#E0E8F3] rounded-xl flex flex-col items-center justify-center w-[168px] h-[168px] space-y-4 px-9 pt-6 pb-4">
                  {clonedSvg}
                  <span className="text-sm font-bold" style={{ color }}>
                    {selectedIcon?.type}
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center space-y-3 items-center sm:items-start">
                <button
                  className={classNames(
                    "btn btn-primary rounded-full btn-block"
                  )}
                  onClick={download}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.29297 12.707C5.90197 12.316 5.90197 11.684 6.29297 11.293C6.68397 10.902 7.31603 10.902 7.70703 11.293L11 14.5859V3C11 2.448 11.447 2 12 2C12.553 2 13 2.448 13 3V14.5859L16.293 11.293C16.684 10.902 17.316 10.902 17.707 11.293C18.098 11.684 18.098 12.316 17.707 12.707L12.708 17.7061C12.615 17.7991 12.5051 17.8721 12.3821 17.9231C12.2601 17.9741 12.13 18 12 18C11.87 18 11.7399 17.9731 11.6179 17.9231C11.4949 17.8721 11.385 17.7991 11.292 17.7061L6.29297 12.707ZM18 20H6C5.447 20 5 20.448 5 21C5 21.552 5.447 22 6 22H18C18.553 22 19 21.552 19 21C19 20.448 18.553 20 18 20Z"
                      fill="#FCFDFF"
                    />
                  </svg>
                  Download
                </button>
                <button
                  onClick={() => {
                    handleCopy(svg);
                  }}
                  className={classNames(
                    "btn rounded-full border-2 border-[#25314C] hover:border-2 hover:border-[#25314C] btn-block"
                  )}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.625 7H17V5.625C17 3.875 16.125 3 14.375 3H5.625C3.875 3 3 3.875 3 5.625V14.375C3 16.125 3.875 17 5.625 17H7V9.625C7 7.875 7.875 7 9.625 7Z"
                      fill="#25314C"
                    />
                    <path
                      opacity="0.4"
                      d="M18.375 7H17H9.625C7.875 7 7 7.875 7 9.625V17V18.375C7 20.125 7.875 21 9.625 21H18.375C20.125 21 21 20.125 21 18.375V9.625C21 7.875 20.125 7 18.375 7Z"
                      fill="#25314C"
                    />
                  </svg>
                  Copy SVG
                </button>
                <Link
                  href="/"
                  className={
                    "btn bg-[#11BC7F] text-primary-content hover:bg-[#61cea8] rounded-full btn-block text-sm"
                  }
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0195 21C11.8095 21 11.6195 20.86 11.5595 20.66L10.8195 18.08C10.1495 15.71 8.29947 13.87 5.92947 13.2L3.33951 12.46C3.08951 12.39 2.93949 12.13 3.00949 11.88C3.04949 11.72 3.17951 11.6 3.33951 11.55L5.92947 10.81C8.29947 10.14 10.1495 8.30002 10.8195 5.93002L11.5595 3.35003C11.6295 3.10003 11.8895 2.95003 12.1495 3.02003C12.3095 3.07003 12.4295 3.19003 12.4795 3.35003L13.2194 5.93002C13.8894 8.30002 15.7395 10.14 18.1095 10.81L20.6995 11.55C20.9495 11.65 21.0695 11.94 20.9694 12.19C20.9195 12.31 20.8195 12.41 20.6995 12.46L18.1095 13.2C15.7395 13.87 13.8894 15.72 13.2194 18.08L12.4795 20.66C12.4195 20.86 12.2295 21 12.0195 21ZM5.83951 20.9L6.06949 20.12C6.26949 19.41 6.82946 18.86 7.53946 18.66L8.31949 18.44C8.39949 18.41 8.4295 18.32 8.3995 18.25C8.3795 18.21 8.35949 18.19 8.31949 18.17L7.53946 17.95C6.82946 17.75 6.26949 17.2 6.06949 16.49L5.83951 15.71C5.81951 15.63 5.73945 15.59 5.65945 15.61C5.60945 15.62 5.57948 15.66 5.55948 15.71L5.33951 16.49C5.13951 17.2 4.57947 17.75 3.86947 17.95L3.08951 18.17C3.00951 18.19 2.96947 18.27 2.98947 18.35C2.99947 18.4 3.03951 18.43 3.08951 18.45L3.86947 18.67C4.57947 18.87 5.13951 19.42 5.33951 20.13L5.55948 20.91C5.57948 20.99 5.65947 21.03 5.73947 21.01C5.78947 21 5.81951 20.96 5.83951 20.91V20.9ZM19.2995 6.53002L19.4495 6.01002C19.5795 5.54002 19.9495 5.17002 20.4295 5.04002L20.9495 4.89002C20.9995 4.87002 21.0195 4.81002 20.9995 4.76002C20.9895 4.74002 20.9695 4.72003 20.9495 4.71003L20.4295 4.56002C19.9595 4.43002 19.5895 4.06002 19.4495 3.59002L19.2995 3.07003C19.2895 3.02003 19.2295 2.99002 19.1795 3.01002C19.1495 3.01002 19.1295 3.04003 19.1195 3.07003L18.9694 3.59002C18.8394 4.06002 18.4695 4.43002 17.9895 4.56002L17.4694 4.71003C17.4194 4.72003 17.3895 4.78003 17.4095 4.83003C17.4095 4.86003 17.4394 4.88002 17.4694 4.89002L17.9895 5.04002C18.4595 5.17002 18.8294 5.54002 18.9694 6.01002L19.1195 6.53002C19.1295 6.58002 19.1895 6.61002 19.2395 6.59002C19.2695 6.59002 19.2895 6.56002 19.2995 6.53002Z"
                      fill="white"
                    />
                  </svg>
                  Upgrade to Pro
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center px-6 py-6">
              <Link
                href="5"
                className="p-4 border space-x-4 flex bg-white text-primary rounded-lg min-h-[132px] max-w-[376px] min-w-[2 70x]"
              >
                <Image
                  className="max-w-[130px] max-h-[100px]"
                  alt="hero-search"
                  src="/hero-search.jpeg"
                  width={130}
                  height={100}
                />
                <div className="flex flex-col max-w-[204px] justify-center items-center space-y-[10px] font-medium text-sm">
                  <p className="">
                    high-quality essential UI icons, modernly designed,
                    featuring multiple styles, and categories.
                  </p>
                  <p className="self-end">Read more</p>
                </div>
              </Link>{" "}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
