import { A_appBarVisibility } from "@/context/recoil/atoms";
import { HTMLAttributes, ReactNode } from "react";
import { useRecoilValue } from "recoil";

interface childProps extends HTMLAttributes<HTMLDivElement> {
  key?: string;
  children?: ReactNode;
}

export const Wrapper = (props: childProps) => {
  const isAppBarVisible = useRecoilValue(A_appBarVisibility);
  return (
    <div
      key={props.key}
      id={props.id}
      className={`${props.className} bg-gray-50 overflow-auto ${
        isAppBarVisible && "transition-all"
      }`}
      style={props.style}
    >
      {props.children && props.children}
    </div>
  );
};

export default Wrapper;
