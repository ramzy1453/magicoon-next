import React from "react";

export default function CodeUpdate() {
  return (
    <div
      className="text-primary space-y-10"
      style={{
        fontFamily: "'Source Code Pro', monospace",
      }}
    >
      {updates.map((update, i) => (
        <div key={i}>
          <p className="font-black">
            v.{update.version} ({update.date})
          </p>
          {update.ameliorations.map(({ content, type }) => (
            <p key={content}>
              - {type}: {content}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

type Update = {
  version: string;
  date: string;
  ameliorations: Amelioration[];
};

type Amelioration = {
  content: string;
  type: string;
};
const updates: Update[] = [
  {
    version: "1.3",
    date: "January 3, 2023",
    ameliorations: [
      {
        content:
          "Sports & Fitness category, Brands category, Food & Cooking category, Emoji category.",
        type: "New",
      },
    ],
  },
  {
    version: "1.2",
    date: "January 3, 2023",
    ameliorations: [
      {
        content: "shoes, shirt, pants, bed-front, quote in General category.",
        type: "Added",
      },
      {
        content: "lamp-desk, weight-scale in Devices & Hardware category.",
        type: "Added",
      },
    ],
  },
  {
    version: "1.1",
    date: "January 3, 2023",
    ameliorations: [
      {
        content:
          "cursor, cursor-click, taxi, rocket, rocket-launch in General category.",
        type: "Improved",
      },
    ],
  },
];
