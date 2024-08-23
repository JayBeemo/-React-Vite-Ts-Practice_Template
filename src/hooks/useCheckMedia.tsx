import { useMediaQuery } from "react-responsive";

export const useCheckMedia = (device: "desktop" | "tablet" | "mobile") => {
  switch (device) {
    case "desktop":
      return useMediaQuery({ query: "(min-width: 1240px" });
    case "tablet":
      return useMediaQuery({ query: "(max-width: 1239px)" });
    case "mobile":
      return useMediaQuery({ query: "(max-width: 599px)" });
  }
};
