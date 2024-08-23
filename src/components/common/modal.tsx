import { ReactNode, useEffect } from "react";
import { Backdrop } from "./backdrop";

interface childProps {
  children?: ReactNode;
  width: string | number;
  minWidth?: string | number;
  height: string | number;
  modalClose: () => void | Promise<void>;
}

export const Modal = (props: childProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        props.modalClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Backdrop>
      <div
        style={{
          width: props.width,
          height: props.height,
          minWidth: props.minWidth && props.minWidth,
        }}
        className={`
          flex flex-col bg-white rounded-xl shadow-lg animate-fade_in
          `}
      >
        {props.children && props.children}
      </div>
    </Backdrop>
  );
};

export default Modal;
