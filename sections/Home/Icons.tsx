import IconItem, { Props as Icon } from "@/components/Home/IconItem";
import classNames from "classnames";

export default function Icons() {
  return (
    <>
      <p className="text-5xl text-[44px] font-black text-center text-primary mb-8">
        1,350 ICONS X 4 STYLES
      </p>
      <div className="font font-medium text-center text-lg mb-10">
        <p>
          The set contains 1,350 icons with 4 different styles for each, which
          makes them +5,400 icons in total.
        </p>
        <p>Neat and clear shapes, at your fingertips!</p>
      </div>
      <div
        className={classNames(
          "grid grid-cols-2 gap-x-24 gap-y-8",
          "sm:grid-cols-4 sm:gap-8",
          "xl:gap-20"
        )}
      >
        {icons.map((icon) => {
          return <IconItem key={icon.border} {...icon} />;
        })}
      </div>
    </>
  );
}

import ic from "../../lib/icons";

const icons: Icon[] = [
  {
    style: "1 px",
    border: "Light",
    Icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="#25314C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.518 14.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0Zm3.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5Zm5.973-2.707-.7 7.056A3.106 3.106 0 0 1 15.8 21.5H8.233c-2.839 0-3.347-1.8-3.482-3.151l-.7-7.039A2.5 2.5 0 0 1 5 6.5h2.3l2.272-3.759a.5.5 0 0 1 .856.518L8.467 6.5H15.5l-1.93-3.244a.5.5 0 0 1 .86-.512L16.664 6.5H19a2.5 2.5 0 0 1 .991 4.793Zm-1.7 6.956.675-6.749H5.071l.674 6.749c.14 1.39.6 2.251 2.488 2.251H15.8c1.882 0 2.356-.9 2.492-2.251ZM20.5 9A1.5 1.5 0 0 0 19 7.5H5a1.5 1.5 0 0 0 0 3h14A1.5 1.5 0 0 0 20.5 9Z" />
      </svg>
    ),
  },
  {
    style: "1.5 px",
    border: "Regular",
    Icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="#25314C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.768 14.5v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0Zm3.25-.75a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75Zm6.209-2.3-.692 6.925A3.328 3.328 0 0 1 15.8 21.75H8.233A3.328 3.328 0 0 1 4.5 18.373l-.69-6.9A2.743 2.743 0 0 1 5 6.25h2.157l2.2-3.638a.75.75 0 1 1 1.284.776L8.91 6.25h6.151l-1.706-2.866a.751.751 0 0 1 1.29-.768l2.161 3.634H19a2.742 2.742 0 0 1 1.227 5.2ZM3.75 9A1.252 1.252 0 0 0 5 10.25h14a1.25 1.25 0 0 0 0-2.5H5A1.252 1.252 0 0 0 3.75 9Zm14.94 2.75H5.347l.647 6.474c.132 1.314.527 2.026 2.239 2.026H15.8c1.7 0 2.11-.743 2.239-2.026Z" />
      </svg>
    ),
  },
  {
    style: "Solid",
    border: "Filled",
    Icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="#25314C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 9a2 2 0 0 1-2 2H5a2 2 0 0 1 0-4h1.728l2.649-4.388a.75.75 0 1 1 1.283.776L8.479 7h7.051l-2.156-3.616a.75.75 0 0 1 1.289-.768L17.277 7H19a2 2 0 0 1 2 2Zm-1.624 3.33-.606 5.97c-.14 1.53-.78 2.7-2.98 2.7H8.23c-2.24 0-2.83-1.17-2.99-2.7l-.616-5.969a.3.3 0 0 1 .3-.331h14.154a.3.3 0 0 1 .298.33ZM10.77 14.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0Zm4 0a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0Z" />
      </svg>
    ),
  },
  {
    style: "Two Tone",
    border: "Duotone",
    Icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="#25314C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="m19.525 10.92-.75 7.38A2.611 2.611 0 0 1 15.8 21H8.225c-2.24 0-2.83-1.17-2.99-2.7l-.76-7.37a1.7 1.7 0 0 0 .51.07h14a1.905 1.905 0 0 0 .54-.08Z"
            style={{
              opacity: 0.4,
            }}
          />
          <path d="M19 7h-1.723l-2.614-4.384a.75.75 0 1 0-1.289.768L15.53 7H8.479l2.181-3.612a.75.75 0 1 0-1.283-.776L6.728 7H5a2 2 0 0 0 0 4h14a2 2 0 0 0 0-4ZM10.018 18.25a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75Zm4.75-.75v-3a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0Z" />
        </g>
      </svg>
    ),
  },
];
