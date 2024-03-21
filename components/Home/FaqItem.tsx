import classNames from "classnames";
import { MouseEventHandler } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";

export type Props = {
  question: string;
  reply: string;
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export default function FaqItem(props: Props) {
  return (
    <div
      onClick={props.onClick}
      className={classNames("collapse bg-white cursor-pointer", {
        "collapse-close": !props.isOpen,
        "collapse-open": props.isOpen,
      })}
    >
      <div className="collapse-title px-8 flex items-center justify-between text-lg font-bold">
        <span>{props.question}</span>
        {props.isOpen ? (
          <HiOutlineMinus className="w-4 h-4" />
        ) : (
          <GoPlus className="w-4 h-4" />
        )}
      </div>
      {props.isOpen && (
        <div className="collapse-content px-8">
          <p>{props.reply}</p>
        </div>
      )}
    </div>
  );
}
