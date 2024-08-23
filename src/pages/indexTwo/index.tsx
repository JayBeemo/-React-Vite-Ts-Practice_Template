import { Route, Routes } from "react-router-dom";
import SubMenuOne from "@/pages/indexTwo/contents/subMenuOne";
import SubMenuTwo from "@/pages/indexTwo/contents/subMenuTwo";
import SubMenuThree from "./contents/subMenuThree";

export const IndexTwo = () => {
  return (
    <Routes>
      <Route path="sub1" element={<SubMenuOne />} />
      <Route path="sub2" element={<SubMenuTwo />} />
      <Route path="sub3" element={<SubMenuThree />} />
    </Routes>
  );
};

export default IndexTwo;
