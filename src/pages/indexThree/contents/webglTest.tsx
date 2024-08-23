import Wrapper from "@/components/container/wrapper";
import { Unity, useUnityContext } from "react-unity-webgl";

export const WebGLTest = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/public/Build/build.loader.js",
    dataUrl: "/public/Build/build.data",
    frameworkUrl: "/public/Build/build.framework.js",
    codeUrl: "/public/Build/build.wasm",
  });

  return (
    <Wrapper className="flex flex-1 flex-col p-4 gap-4">
      <header className="flex justify-center">
        <h2>React-Unity-WebGL Test</h2>
      </header>
      <main className="flex flex-col flex-center relative w-full">
        <Unity
          unityProvider={unityProvider}
          style={{ width: "100%", height: 700 }}
        />
      </main>
    </Wrapper>
  );
};

export default WebGLTest;
