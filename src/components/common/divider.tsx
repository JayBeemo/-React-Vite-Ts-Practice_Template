import { HTMLAttributes } from "react";

interface childProps extends HTMLAttributes<HTMLDivElement> {
  orientation: "vertical" | "horizontal";
}

export const Divider = (props: childProps) => {
  const setOrientation = () => {
    switch (props.orientation) {
      case "vertical":
        return "w-[1px] h-[100%]";
      case "horizontal":
        return "w-[100%] h-[1px]";
    }
  };

  return (
    <div
      className={`
            flex bg-gray-200
            ${setOrientation()}
            `}
    />
  );
};

export default Divider;
