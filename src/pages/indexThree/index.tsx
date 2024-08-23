import { Route, Routes } from "react-router-dom";
import SubMenuOne from "@/pages/indexThree/contents/subMenuOne";
import SubMenuTwo from "@/pages/indexThree/contents/subMenuTwo";
import { lazy } from "react";

const WebGLTest = lazy(() => import("@/pages/indexThree/contents/webglTest"));

export const IndexThree = () => {
  return (
    <Routes>
      <Route path="sub1" element={<SubMenuOne />} />
      <Route path="sub2" element={<SubMenuTwo />} />
      <Route path="sub3" element={<WebGLTest />} />
    </Routes>
  );
};

export default IndexThree;
