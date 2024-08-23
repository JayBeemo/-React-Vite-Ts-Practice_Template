import { ButtonHTMLAttributes, ReactNode } from "react";

interface childProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
  color: "blue" | "green" | "orange" | "red" | "cyan" | "gray";
  size: "lg" | "md";
}

export const Chip = (props: childProps) => {
  const setColor = () => {
    switch (props.color) {
      case "blue":
        return "bg-blue-600 isDesktop:hover:bg-blue-700 text-white";
      case "green":
        return "bg-green-600 isDesktop:hover:bg-green-700 text-white";
      case "orange":
        return "bg-orange-600 isDesktop:hover:bg-orange-700 text-white";
      case "red":
        return "bg-red-600 isDesktop:hover:bg-red-700 text-white";
      case "cyan":
        return "bg-cyan-600 isDesktop:hover:bg-cyan-700 text-white";
      case "gray":
        return "bg-gray-600 isDesktop:hover:bg-gray-700 text-white";
    }
  };
  const setSize = () => {
    switch (props.size) {
      case "lg":
        return "w-[108px] h-[36px] text-lg isMobile:text-base isMobile:w-[94px] isMobile:h-[32px] rounded-3xl";
      case "md":
        return "w-[92px] h-[32px] text-base isMobile:text-sm isMobile:w-[86px] isMobile:h-[30px] rounded-3xl";
    }
  };
  return (
    <button
      id={props.id}
      name={props.name}
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
      style={props.style}
      disabled={props.disabled}
      className={`${setColor()} ${setSize()} outline-none flex gap-1 flex-center transition-all`}
    >
      {props.icon && props.icon}
      {props.children && props.children}
    </button>
  );
};
