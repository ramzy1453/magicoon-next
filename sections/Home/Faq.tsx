import FaqItem, { Props as IFaq } from "@/components/Home/FaqItem";
import { useState } from "react";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="space-y-8">
        <p className="text-primary text-3xl md:text-5xl font-bold text-center">
          Frequently Asked Questions
        </p>
        <div>
          <p className="text-center text-primary text-xl font-medium">
            We'd like you to be able to use magicoon in the best way.
          </p>
          <p className="text-center text-primary text-xl font-medium">
            The section below will tell you how.
          </p>
        </div>
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <FaqItem
            key={faq.id}
            {...faq}
            isOpen={open === i}
            onClick={() => {
              if (open === i) {
                setOpen(null);
              } else {
                setOpen(i);
              }
            }}
          />
        ))}
      </div>
    </>
  );
}

const faqs = [
  {
    id: 1,
    question: "How many styles and types are included in the Iconly app?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
  {
    id: 2,
    question: "Can I order custom icons for my personal project?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
  {
    id: 3,
    question: "How can I request new icons?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
  {
    id: 4,
    question: "How many devices can I use with my subscription?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
  {
    id: 5,
    question: "How can I refund my money?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
  {
    id: 6,
    question:
      "Is there any option for customizing icons and saving them for myself?",
    reply:
      "You will have access to 6 styles in the initial version we will continue to add more exciting icons in the future.",
  },
];
