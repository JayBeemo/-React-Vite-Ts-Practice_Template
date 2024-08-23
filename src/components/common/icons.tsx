// import User from "@mui/icons-material/Person";
import { CSSProperties } from "react";
import { MdPerson as User } from "react-icons/md";
import { MdKey as Key } from "react-icons/md";
import { MdMenu as Menu } from "react-icons/md";
import { MdHome as Home } from "react-icons/md";
import { MdLogout as Logout } from "react-icons/md";
import { MdCircle as Circle } from "react-icons/md";
import { MdOutlineCircle as CircleOutline } from "react-icons/md";
import { MdCheckCircle as CircleCheck } from "react-icons/md";
import { MdClose as X } from "react-icons/md";
import { MdOutlineWarning as Warning } from "react-icons/md";
import { MdChevronLeft as Chevron_Left } from "react-icons/md";
import { MdChevronRight as Chevron_Right } from "react-icons/md";
import { MdArrowDropDown as Dropdown } from "react-icons/md";
import { MdNotifications as Notification } from "react-icons/md";

interface childProps {
  size?: string | number;
  fill?: string;
  stroke?: string;
  style?: CSSProperties;
  className?: string;
}

export const Icons = {
  User: (props: childProps) => {
    return (
      <User
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  Key: (props: childProps) => {
    return (
      <Key
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  Menu: (props: childProps) => {
    return (
      <Menu
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  Home: (props: childProps) => {
    return (
      <Home
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  Chevron_Right: (props: childProps) => {
    return (
      <Chevron_Right
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  Chevron_Left: (props: childProps) => {
    return (
      <Chevron_Left
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  Logout: (props: childProps) => {
    return (
      <Logout
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  Circle: (props: childProps) => {
    return (
      <Circle
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  CircleOutline: (props: childProps) => {
    return (
      <CircleOutline
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  CircleCheck: (props: childProps) => {
    return (
      <CircleCheck
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  Dropdown: (props: childProps) => {
    return (
      <Dropdown
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  Notification: (props: childProps) => {
    return (
      <Notification
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  X: (props: childProps) => {
    return (
      <X
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
  Warning: (props: childProps) => {
    return (
      <Warning
        size={props.size ? props.size : 24}
        fill={props.fill ? props.fill : "inherit"}
        style={props.style && props.style}
        className={props.className && props.className}
      />
    );
  },
};

export default Icons;
