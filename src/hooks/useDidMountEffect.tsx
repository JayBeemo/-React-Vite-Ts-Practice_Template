import { DependencyList, useEffect, useRef } from "react";

const useDidMountEffect = (
  fnc: () => void,
  deps: DependencyList | undefined
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) fnc();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;
