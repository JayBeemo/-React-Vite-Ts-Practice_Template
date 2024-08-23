import { ButtonHTMLAttributes, ReactNode } from "react";

interface childProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color: "blue" | "green" | "orange" | "red" | "cyan";
  size: "xl" | "lg" | "md" | "sm" | "xs";
}

export const Button = (props: childProps) => {
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
    }
  };

  const setSize = () => {
    switch (props.size) {
      case "xl":
        return "w-[120px] h-[46px] text-2xl isMobile:text-xl isMobile:w-[102px] isMobile:h-[42px]";
      case "lg":
        return "w-[100px] h-[42px] text-xl isMobile:text-lg isMobile:w-[90px] isMobile:h-[38px]";
      case "md":
        return "w-[92px] h-[38px] text-lg isMobile:text-base isMobile:w-[82px] isMobile:h-[32px]";
      case "sm":
        return "w-[86px] h-[32px] text-base isMobile:text-sm isMobile:w-[74px] isMobile:h-[28px]";
      case "xs":
        return "w-[78px] h-[28px] text-sm isMobile:text-xs isMobile:w-[64px] isMobile:h-[24px]";
    }
  };

  return (
    <button
      id={props.id}
      name={props.name}
      aria-label={`${props.id}`}
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
      style={props.style}
      disabled={props.disabled}
      className={`${setColor()} ${setSize()} ${
        props.className
      } rounded-md transition-all`}
    >
      {props.children && props.children}
    </button>
  );
};

export default Button;
