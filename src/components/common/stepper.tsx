import Divider from "./divider";
import React from "react";
import Icons from "./icons";
import { useCheckMedia } from "@/hooks/useCheckMedia";

interface childProps {
  step: string[];
  currentStep: number;
  width?: number | string;
}

export const Stepper = (props: childProps) => {
  const isMobile = useCheckMedia("mobile");
  return (
    <div
      className="flex min-h-[48px] p-4 gap-4 isMobile:p-2 isMobile:gap-2 items-center"
      style={{
        width: props.width ? props.width : "100%",
      }}
    >
      {props.step.map((item, idx) => (
        <React.Fragment key={`step-${idx}`}>
          <div className="flex h-full gap-2 flex-center">
            {props.currentStep > idx + 1 ? (
              <Icons.CircleCheck
                size={!isMobile ? 32 : 20}
                fill="#00ff37"
                className="transition-all"
              />
            ) : (
              <Icons.CircleOutline
                size={!isMobile ? 32 : 20}
                fill="#00a2ff"
                className={`transition-all ${
                  props.currentStep === idx + 1 && "animate-bounce"
                }`}
              />
            )}
            <p className="font-PTD_Semibold text-[22px] isMobile:text-[14px]">
              {item}
            </p>
          </div>
          {props.step.length !== idx + 1 && (
            <Divider orientation="horizontal" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
