import React from "react";
import { ReactNode } from "react";

interface childProps {
  children?: ReactNode;
}

export const Backdrop = (props: childProps) => {
  return (
    <React.Fragment>
      <div className="fixed z-10 top-0 left-0 w-screen h-screen bg-black opacity-35" />
      <section className="fixed flex flex-center top-0 left-0 z-10 w-screen h-screen">
        {props.children && props.children}
      </section>
    </React.Fragment>
  );
};
