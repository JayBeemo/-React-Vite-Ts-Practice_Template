import { ReactNode, useEffect, useState } from "react";
import Icons from "./icons";

interface childProps {
  children?: ReactNode;
  open: boolean;
  duration?: number;
  handleClose: () => void | Promise<void>;
}

export const Snackbar = (props: childProps) => {
  const [animation, setAnimation] = useState<string>("animate-fade_in");

  const handleClose = () => {
    setAnimation("animate-fade_out");
    setTimeout(props.handleClose, 350);
  };

  useEffect(() => {
    if (props.duration) {
      const changeAnim = setTimeout(() => {
        setAnimation("animate-fade_out");
      }, props.duration - 400);

      const closeTimer = setTimeout(() => {
        props.handleClose();
        setAnimation("animate-fade_in");
      }, props.duration - 50);

      return () => {
        setAnimation("animate-fade_in");
        clearTimeout(changeAnim);
        clearTimeout(closeTimer);
      };
    } else
      return () => {
        setAnimation("animate-fade_in");
      };
  }, [props.open]);

  return (
    props.open && (
      <div
        id="snackbar"
        className={`
        flex fixed left-4 bottom-4 z-50 p-2 gap-4 items-center
        min-w-[20%] max-w-[90%] isMobile:min-w-[70%] min-h-[50px] 
        bg-white border-[1px] rounded-xl shadow-md
        ${animation}
    `}
      >
        <div className="flex flex-1 h-full flex-wrap text-ellipsis overflow-hidden">
          {props.children && props.children}
        </div>
        <div className="flex w-[20px] h-full">
          <button
            className="flex w-[20px] h-[100%] flex-center"
            onClick={() => handleClose()}
          >
            <Icons.X size={16} />
          </button>
        </div>
      </div>
    )
  );
};

export default Snackbar;
