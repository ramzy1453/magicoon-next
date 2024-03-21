import PricingItem, { IPricingItem } from "@/components/Home/PricingItem";
import useMediaQuery from "@/hooks/useMediaQuery";
import PricingMobile from "./PricingMobile";

export default function Pricing() {
  const { isMd, isLg } = useMediaQuery();
  if (!isLg) return <PricingMobile pricingItems={pricingItems} />;
  return (
    <>
      <p className="text-4xl font-black mb-7 text-center">Pricing</p>
      <div>
        <p className="text-lg text-center font-medium">
          Choose the best plan for you!
        </p>
        <p className="text-lg font-medium text-center">
          It doesn't end here, you are getting a lifetime of free updates
        </p>
      </div>
      <div className="grid grid-cols-3 py-6 gap-4 lg:gap-6">
        {pricingItems.map((pricingItem) => (
          <PricingItem key={pricingItem.title} pricingItem={pricingItem} />
        ))}
      </div>
    </>
  );
}

const pricingItems: IPricingItem[] = [
  {
    title: "SOLOR USER",
    description: "For solo work as a designer or developer.",
    price: 35,
    content: [
      {
        title: "5,400+ Total icons",
        subtitle: "1,350+ icons x 4 styles",
        approved: true,
      },
      {
        title: "4 Styles",
        subtitle: "Light, Regular, Filled, Duotone",
        approved: true,
      },
      {
        title: "7 Formats",
        subtitle: "Fig, Xd, IconJar, AI, EPS, SVG, PNG",
        approved: true,
      },
      {
        title: "29 Categories",
        approved: true,
      },
      {
        title: "Lifetime updates",
        approved: true,
      },
      {
        title: "Download Demo version",
        approved: true,
        link: {
          split: "Demo version",
          to: "www.google.com",
        },
      },
      {
        title: "Free magicoon Search account",
        approved: false,
        link: {
          split: "magicoon Search",
          to: "www.google.com",
        },
      },
    ],
  },
  {
    title: "TEAM",
    description: "For medium teams, up to 6 users.",
    price: 119,
    isPopular: true,
    content: [
      {
        title: "5,400+ Total icons",
        subtitle: "1,350+ icons x 4 styles",
        approved: true,
      },
      {
        title: "4 Styles",
        subtitle: "Light, Regular, Filled, Duotone",
        approved: true,
      },
      {
        title: "7 Formats",
        subtitle: "Fig, Xd, IconJar, AI, EPS, SVG, PNG",
        approved: true,
      },
      {
        title: "29 Categories",
        approved: true,
      },
      {
        title: "Lifetime updates",
        approved: true,
      },
      {
        title: "Download Demo version",
        approved: true,
        link: {
          split: "Demo version",
          to: "www.google.com",
        },
      },
      {
        title: "Free magicoon Search account",
        approved: true,
        link: {
          split: "magicoon Search",
          to: "www.google.com",
        },
      },
    ],
  },
  {
    title: "ENTERPRISE",
    description: "Unlimited number of users.",
    price: 319,
    content: [
      {
        title: "5,400+ Total icons",
        subtitle: "1,350+ icons x 4 styles",
        approved: true,
      },
      {
        title: "4 Styles",
        subtitle: "Light, Regular, Filled, Duotone",
        approved: true,
      },
      {
        title: "7 Formats",
        subtitle: "Fig, Xd, IconJar, AI, EPS, SVG, PNG",
        approved: true,
      },
      {
        title: "29 Categories",
        approved: true,
      },
      {
        title: "Lifetime updates",
        approved: true,
      },
      {
        title: "Download Demo version",
        approved: true,
        link: {
          split: "Demo version",
          to: "www.google.com",
        },
      },
      {
        title: "Free magicoon Search account",
        approved: true,
        link: {
          split: "magicoon Search",
          to: "www.google.com",
        },
      },
    ],
  },
];
