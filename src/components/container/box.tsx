import { HTMLAttributes, ReactNode } from "react";

interface childProps extends HTMLAttributes<HTMLDivElement> {
  smooth?: boolean;
  scaleAnimation?: boolean;
  children?: ReactNode;
}

export const Box = (props: childProps) => {
  return (
    <div
      id={props.id}
      className={`
        flex flex-col border-[1px] shadow-md rounded-lg bg-white
        ${props.className} transition-all ${
        props.smooth && "animate-smoothAppear"
      } ${props.scaleAnimation && "hover:scale-[1.02] hover:shadow-lg"}`}
      style={props.style}
    >
      {props.children && props.children}
    </div>
  );
};

export default Box;
