import classNames from "classnames";
import { ChangeEventHandler, createElement } from "react";

type Props = {
  type: "input" | "textarea";
  id: string;
  placeholder: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: string;
  email?: boolean;
};

export default function InputForm({
  type,
  id,
  placeholder,
  value,
  handleChange,
  email,
}: Props) {
  return createElement(type, {
    id,
    type: email ? "email" : "text",
    placeholder,
    value,
    onChange: handleChange,
    required: true,
    className: classNames(
      "bg-[#f8f9fb] hover:bg-transparent w-full focus:border-info focus:border-2 focus:outline-none text-sm font-medium",
      {
        "input input-bordered rounded-full": type === "input",
        "textarea textarea-bordered h-[220px] rounded-2xl resize-none":
          type === "textarea",
      }
    ),
  });
}
