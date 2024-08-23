import React, { useRef, useEffect } from "react";
import Portal from "./portal";

interface childProps {
  anchorEl: HTMLElement | null;
  children: React.ReactNode;
  width: number;
  height: number;
  onClose: () => void;
}

const Popover = (props: childProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        props.anchorEl &&
        !props.anchorEl.contains(event.target as Node)
      ) {
        props.onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.anchorEl, props.onClose]);

  if (!props.anchorEl) return null;

  const anchorRect = props.anchorEl.getBoundingClientRect();

  return (
    <Portal selector="#portal-root">
      <div className="relative w-[100vw] h-[100vh]">
        <div
          ref={popoverRef}
          className={`
        sticky flex flex-col bg-white rounded-lg shadow-lg border-[1px]
        animate-fade_in
        `}
          style={{
            top: anchorRect.bottom + window.scrollY,
            left: anchorRect.right - props.width,
            width: props.width,
            height: props.height,
          }}
        >
          {props.children}
        </div>
      </div>
    </Portal>
  );
};

export default Popover;
