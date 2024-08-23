import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";
import { SuspenseProgress } from "./components/common/progress";
import GlobalQueryClient from "./services/react-query/queryClient";
import React from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Layout = lazy(() => import("@/components/layout/layout"));
const Login = lazy(() => import("@/pages/auth/index"));
const Home = lazy(() => import("@/pages/home/index"));
const IndexOne = lazy(() => import("@/pages/indexOne/index"));
const IndexTwo = lazy(() => import("@/pages/indexTwo/index"));
const IndexThree = lazy(() => import("@/pages/indexThree/index"));

if (import.meta.env.DEV) {
  const { worker } = await import("@/mocks/browser");
  worker.start({
    onUnhandledRequest: "bypass",
  });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={GlobalQueryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<SuspenseProgress />}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/index1" element={<IndexOne />} />
                <Route path="/index2/*" element={<IndexTwo />} />
                <Route path="/index3/*" element={<IndexThree />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
