import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactElement;
  selector: string;
};

const isServer = typeof window === "undefined";

const Portal = ({ children, selector }: PortalProps) => {
  const element = !isServer && document.querySelector(selector);

  return element && children ? createPortal(children, element) : null;
};

export default Portal;
