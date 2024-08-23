import { ReactNode } from "react";

interface tabsProps {
  children?: ReactNode;
}

interface tabProps {
  tabIndex: number;
  value: number;
  name: string;
  tabChange: (newValue: number) => void | Promise<void>;
}

interface tabPanelProps {
  children?: ReactNode;
  tabIndex: number;
  value: number;
}

export const Tabs = (props: tabsProps) => {
  return (
    <div className="flex w-[100%] h-[48px] border-b-[1px] justify-end items-center flex-wrap">
      {props.children && props.children}
    </div>
  );
};

export const Tab = (props: tabProps) => {
  return (
    <button
      id={`tab-${props.tabIndex}`}
      aria-label={`tab-${props.tabIndex}`}
      onClick={() => props.tabChange(props.tabIndex)}
      className={`
        flex w-auto h-[90%] px-4 flex-center
        border-b-2 isDesktop:hover:bg-sky-100 isDesktop:hover:border-blue-600
        ${props.value === props.tabIndex && "border-blue-300"}
        transition-all
        `}
    >
      <p className="font-PTD_Semibold text-[14px]">{props.name}</p>
    </button>
  );
};

export const TabPanel = (props: tabPanelProps) => {
  return (
    props.value === props.tabIndex && (
      <div
        hidden={props.value !== props.tabIndex}
        className="flex flex-1 w-[100%]"
      >
        {props.children && props.children}
      </div>
    )
  );
};
