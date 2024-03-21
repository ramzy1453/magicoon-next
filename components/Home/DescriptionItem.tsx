import Image from "next/image";
import cn from "classnames";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  firstElement?: boolean;
};

export default function DescriptionItem(props: Props) {
  return (
    <div
      className={cn(
        "flex rounded-2xl p-8",
        {
          "bg-white cursor-pointer group hover:bg-primary": props.firstElement,
        },
        "transition-all"
      )}
    >
      <div
        className={cn(
          "flex btn-circle place-content-center rounded-full mr-6",
          props.color
        )}
      >
        <Image alt="figma-icon" src={props.icon} width={18} height={18} />
      </div>
      <div className="flex flex-col">
        <p
          className={cn("text-[28px] text-primary font-black", {
            "group-hover:text-white": props.firstElement,
          })}
        >
          {props.title}
        </p>
        <p className="text-secondary font-bold">{props.subtitle}</p>
      </div>
    </div>
  );
}
