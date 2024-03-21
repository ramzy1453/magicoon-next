import Image from "next/image";
import classNames from "classnames";
import FeatureItem from "@/components/Home/FeatureItem";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Features() {
  const { isLg } = useMediaQuery();

  return (
    <>
      <div
        className={classNames(
          "px-4 py-16 space-y-8 lg:space-y-0",
          "flex flex-col lg:px-24 lg:py-24 bg-[#EAEEF5]",
          "lg:flex-row lg:justify-between rounded-2xl text-primary"
        )}
      >
        <div className="flex flex-col space-y-8 flex-1">
          {isLg ? (
            <div className="flex items-center relative">
              <div className="h-px w-8 bg-primary absolute -translate-x-full -left-4" />
              <div className="font-bold text-primary">FEATURES</div>
            </div>
          ) : (
            <div className="font-bold text-primary">FEATURES</div>
          )}

          <div className="space-y-8">
            <p className="leading-[56px] font-extrabold text-[45px] md:leading-[60px]">
              Different Formats & Features at your Disposal
            </p>
            <div className="flex flex-col space-y-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center text-md space-x-2"
                >
                  <Image
                    className="mr-2 border"
                    width={16}
                    height={16}
                    alt="check_circle_filled"
                    src="check_circle_filled.svg"
                  />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4 lg:gap-8">
          {iconsFeatures.map(({ title, subtitle, icon }) => (
            <FeatureItem
              key={title}
              title={title}
              subtitle={subtitle}
              icon={icon}
            />
          ))}
        </div>
      </div>
      <div
        className="p-8 md:p-12 text-primary-content rounded-br-xl rounded-bl-xl relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(199,110,196,1) 11%, rgba(57,108,232,1) 100%)",
        }}
      >
        <div
          className={classNames(
            "gap-8",
            "grid grid-cols-2",
            "lg:flex lg:justify-between lg:space-x-10"
          )}
        >
          <div className="space-y-2 flex flex-col justify-center flex-[30] col-span-2 lg:col-span-1">
            <p className="font-black text-[28px]">Big Variety</p>
            <p className="text-md">
              Huge set of icons, categories and formats all at your fingertips.
            </p>
          </div>

          {iconsDescriptions.map(([n, title, subtitle]) => (
            <div className="flex flex-col space-y-2 flex-[17.5]" key={title}>
              <p className="font-black text-4xl">{n}</p>
              <p className="font-extrabold text-md">{title}</p>
              <p className="font-medium text-md">{subtitle}</p>
            </div>
          ))}
        </div>
        <div
          className="absolute right-0 top-0 h-full w-1/2"
          style={{
            backgroundImage: "url(bg-icons.png)",
            backgroundSize: "cover",
            backgroundPosition: "inherit",
            color: "black",
          }}
        ></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:grid-cols-4 xl:gap-10 my-16">
        <div className="flex flex-col space-y-3">
          <p className="font-black text-2xl">Perfect for</p>
          <p className="text-sm font-regular">
            Can be used for all types of devices and interfaces.
          </p>
        </div>
        {perfectFor.map(([icon, title]) => (
          <div
            key={title}
            className="rounded-xl bg-[#EAEEF5] flex px-4 py-6 items-center"
          >
            <div className="flex h-12 w-12 place-content-center bg-white rounded-full">
              <Image alt="figma-icon" src={icon} width={18} height={18} />
            </div>
            <p className="text-lg font-semibold ml-5">{title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

const features = [
  "Free and Premium Icons.",
  "5,400+ Icons (1,350+ icons × 4 styles).",
  "4 Styles - Light, Regular, Filled, Duotone.",
  "29 Popular Categories.",
  "Support - Fig, Xd, IconJar, AI, EPS, SVG, PNG.",
  "24 x 24px Grid Size.",
  "Perfect for Big or Small Projects.",
];

const iconsFeatures = [
  {
    title: "Figma",
    subtitle: "Format",
    icon: "figma_icon.svg",
  },
  {
    title: "Adobe Xd",
    subtitle: "Format",
    icon: "figma_icon.svg",
  },
  {
    title: "Ai",
    subtitle: "Format",
    icon: "figma_icon.svg",
  },
  {
    title: "SVG",
    subtitle: "Format",
    icon: "figma_icon.svg",
  },
  {
    title: "EPS",
    subtitle: "Format",
    icon: "figma_icon.svg",
  },
  {
    title: "PDF",
    subtitle: "Format",
    icon: "figma_icon.svg",
  },
  {
    title: "PNG",
    subtitle: "Format",
    icon: "figma_icon.svg",
  },
  {
    title: "Soon..",
    subtitle: "Format",
    icon: "figma_icon.svg",
  },
];

const iconsDescriptions = [
  [360, "ICONS", "90 Icons x 4 Styles"],
  [25, "CATEGORIES", "For Each style"],
  [4, "STYLES", "For All Icons"],
  [7, "FORMATS", "For Each style"],
];

const perfectFor = [
  ["figma_icon.svg", "Websites"],
  ["figma_icon.svg", "Applications"],
  ["figma_icon.svg", "Dashboard"],
];
