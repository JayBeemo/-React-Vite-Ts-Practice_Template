import { Dispatch, ReactNode, useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { A_appBarVisibility } from "@/context/recoil/atoms";
import Icons from "@/components/common/icons";
import Wrapper from "@/components/container/wrapper";
import { SideMenuList, SubMenuList } from "@/constants/sideMenuList";
import { useCheckMedia } from "@/hooks/useCheckMedia";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Backdrop } from "../common/backdrop";
import Popover from "../common/popover";

interface childProps {
  children?: ReactNode;
}

const AppBar = (props: {
  isSideOpen: boolean;
  setIsSideOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const isMobile = useCheckMedia("mobile");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handler = {
    handleNotifyOpen: () => {
      setAnchorEl(anchorEl ? null : buttonRef.current);
    },
    handlenotifyClose: () => {
      setAnchorEl(null);
    },
  };

  return (
    <nav
      className={`flex w-[100%] h-[60px] px-2 isMobile:h-[56px]
         bg-gradient-to-r from-sky-500 from-30% to-indigo-700
    `}
    >
      <section className="flex w-[50%] h-[100%] items-center">
        {!props.isSideOpen && (
          <button
            id="btn-menu"
            aria-label="btn-menu"
            className={`flex w-[50px] h-[80%] outline-none isDesktop:hover:bg-sky-400 
              flex-center rounded-md transition-all`}
            onClick={() => props.setIsSideOpen(!props.isSideOpen)}
          >
            {!isMobile ? (
              <Icons.Menu size={32} fill="white" />
            ) : (
              <Icons.Menu size={28} fill="white" />
            )}
          </button>
        )}
      </section>
      <section className="flex w-[50%] h-[100%] px-2 gap-2 isMobile:gap-4 justify-end items-center">
        <button
          id="btn-notify"
          aria-label="btn-notification"
          ref={buttonRef}
          onClick={handler.handleNotifyOpen}
          className={`
                  flex flex-center w-[38px] h-[38px] 
                  isMobile:w-[32px] isMobile:h-[32px] rounded-full 
                  isDesktop:hover:bg-sky-400 transition-all
                  `}
        >
          <Icons.Notification fill="white" />
        </button>
        <button
          id="btn-profile"
          aria-label="btn-profile"
          className={`
                  flex flex-center w-[38px] h-[38px] 
                  isMobile:w-[32px] isMobile:h-[32px] rounded-full 
                  isDesktop:hover:bg-sky-400 transition-all
                  `}
        >
          <Icons.User fill="white" />
        </button>
        <Popover
          anchorEl={anchorEl}
          onClose={handler.handlenotifyClose}
          width={isMobile ? 280 : 350}
          height={isMobile ? 300 : 400}
        >
          <header className="flex w-[100%] h-[50px] px-4 border-b-[1px] items-center">
            <h4>• Alarm Popover</h4>
          </header>
          <main className="flex flex-col flex-1 p-4">
            <h5>This is Example Popover.</h5>
          </main>
        </Popover>
      </section>
    </nav>
  );
};

const SideMenu = (props: {
  isSideOpen: boolean;
  setIsSideOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const isDesktop = useCheckMedia("desktop");
  const isMobile = useCheckMedia("mobile");
  const [subMenuIndexes, setSubMenuIndexes] = useState<number[]>([]);

  const handler = {
    handleSideToggle: () => {
      switch (props.isSideOpen) {
        case false:
          return "-translate-x-[240px] isMobile:-translate-x-[200px]";
        case true:
          return "w-[240px] isMobile:w-[220px]";
      }
    },
    handleCollapse: (index: number) => {
      const currentIndex = subMenuIndexes.indexOf(index);
      const newOpenIndexes = [...subMenuIndexes];
      if (currentIndex === -1) {
        newOpenIndexes.push(index);
      } else {
        newOpenIndexes.splice(currentIndex, 1);
      }
      setSubMenuIndexes(newOpenIndexes);
    },
    handleMenuNavigate: (route: string) => {
      navigate(route);
      if (!isDesktop) {
        props.setIsSideOpen(false);
      }
    },
  };

  return (
    <React.Fragment>
      {!isDesktop && props.isSideOpen && <Backdrop />}
      <nav
        className={`flex z-10 flex-col absolute h-[100%] bg-sky-500 ${handler.handleSideToggle()} transition-all`}
      >
        <header className="flex w-[100%] h-[60px] px-2 flex-center">
          <span className="flex w-[70%] h-[100%] items-center">
            <h2 className="text-white">LOGO</h2>
          </span>
          <span className="flex w-[30%] h-[100%] items-center justify-end">
            <button
              className={`flex w-[50px] h-[80%] outline-none isDesktop:hover:bg-sky-400 
                flex-center rounded-md transition-all`}
              onClick={() => props.setIsSideOpen(!props.isSideOpen)}
            >
              {!isMobile ? (
                <Icons.Chevron_Left size={32} fill="white" />
              ) : (
                <Icons.Chevron_Left size={28} fill="white" />
              )}
            </button>
          </span>
        </header>
        <main className="flex flex-col flex-1 relative w-[100%] overflow-auto">
          {SideMenuList.map((item, idx) => (
            <React.Fragment key={`sidemenu-${idx}-${item.id}`}>
              <button
                type="button"
                className={`flex w-[100%] h-[54px] isMobile:h-[48px] px-2
              bg-sky-500 isDesktop:hover:bg-sky-600 transition-all`}
                onClick={() => {
                  if (item.withSubMenu === true) {
                    handler.handleCollapse(idx);
                  } else {
                    handler.handleMenuNavigate(item.route);
                  }
                }}
              >
                <div className="flex w-[80%] h-[100%] gap-2 items-center">
                  {item.icon}
                  <h5 className="text-white">{item.name}</h5>
                </div>
                {item.withSubMenu && (
                  <div className="flex w-[20%] h-[100%] justify-end items-center">
                    <Icons.Dropdown fill="white" />
                  </div>
                )}
              </button>
              <div
                className={`flex flex-col overflow-hidden ${
                  subMenuIndexes.includes(idx) && "animate-collapse_in"
                }
                `}
              >
                {subMenuIndexes.map(
                  (index) =>
                    index === item.id &&
                    SubMenuList.filter(
                      (filteredItem) => filteredItem.parentId === item.id
                    ).map((subItem, subIdx) => (
                      <React.Fragment
                        key={`subMenu-${subItem.parentId}-${subIdx}`}
                      >
                        <button
                          type="button"
                          className={`
                          flex w-[100%] h-[54px] isMobile:h-[48px] pl-12 
                          items-center bg-sky-400 isDesktop:hover:bg-sky-600 transition-all`}
                          onClick={() =>
                            handler.handleMenuNavigate(subItem.route)
                          }
                        >
                          <h5 className="text-white">• {subItem.name}</h5>
                        </button>
                      </React.Fragment>
                    ))
                )}
              </div>
            </React.Fragment>
          ))}
        </main>
        <footer className="flex relative w-[100%] h-[58px] isMobile:h-[52px] border-t-[1px]">
          <button
            type="button"
            className={`flex w-[100%] h-[100%] isMobile:h-[52px] px-2 gap-2 items-center 
              bg-sky-500 isDesktop:hover:bg-sky-600 transition-all`}
            onClick={() => {
              props.setIsSideOpen(false);
              navigate("/", {
                replace: true,
              });
            }}
          >
            <Icons.Logout size={22} fill="white" />
            <h5 className="text-white">Logout</h5>
          </button>
        </footer>
      </nav>
    </React.Fragment>
  );
};

export const Layout = (props: childProps) => {
  const [isSideOpen, setIsSideOpen] = useState<boolean>(false);
  const isAppBarVisible = useRecoilValue(A_appBarVisibility);

  const handler = {
    handleSideToggle: () => {
      switch (isSideOpen) {
        case true:
          return "isDesktop:pl-[240px]";
        case false:
          return "";
      }
    },
  };

  return (
    <main className="flex flex-col fixed w-full h-full overflow-hidden">
      {isAppBarVisible && (
        <React.Fragment>
          <AppBar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
          <SideMenu isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
        </React.Fragment>
      )}
      <Wrapper
        className={`flex flex-1 w-[100%] overflow-hidden ${handler.handleSideToggle()}`}
      >
        {props.children && props.children}
      </Wrapper>
    </main>
  );
};

export default Layout;
