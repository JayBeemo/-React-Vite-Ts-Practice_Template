import { ReactNode, useEffect, useState } from "react";
import Icons from "./icons";
import useDidMountEffect from "@/hooks/useDidMountEffect";

interface childProps {
  children?: ReactNode;
  open: boolean;
  closeDialog: () => void | Promise<void>;
}

export const Dialog = (props: childProps) => {
  const [animation, setAnimation] = useState<string>("animate-slide_up");

  const handleClose = () => {
    setAnimation("animate-slide_down");
    setTimeout(props.closeDialog, 150);
  };

  useEffect(() => {
    return () => {
      setAnimation("animate-slide_up");
    };
  }, [props.open]);

  return (
    props.open && (
      <div
        id="div-dialog"
        className={`
      flex flex-col fixed inset-0 bg-white justify-center z-[1000] ${animation}
      `}
      >
        <header className="flex w-[100%] h-[60px] border-b-[1px]">
          <div className="flex w-[100%] h-[100%] justify-end items-center px-2 ">
            <button
              className={`
                flex w-[36px] h-[36px] bg-gray-100 isDesktop:hover:bg-gray-300
                flex-center rounded-xl
                `}
              onClick={() => handleClose()}
            >
              <Icons.X size={"60%"} fill="#666666" />
            </button>
          </div>
        </header>
        {props.children && props.children}
      </div>
    )
  );
};

export default Dialog;
