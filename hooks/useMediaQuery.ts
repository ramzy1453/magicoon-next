import { useEffect, useState } from "react";

interface BreakpointPoint<T = boolean> {
  isXXs: T;
  isXs: T;
  isSm: T;
  isMd: T;
  isLg: T;
  isXl: T;
  is2xl: T;
}

const useMediaQuery = () => {
  const breakpointsConfig: BreakpointPoint<string> = {
    isXXs: "(max-width: 420px)",
    isXs: "(max-width: 639px)",
    isSm: "(min-width: 640px)",
    isMd: "(min-width: 768px)",
    isLg: "(min-width: 1024px)",
    isXl: "(min-width: 1280px)",
    is2xl: "(min-width: 1536px)",
  };

  const [breakpoints, setBreakpoints] = useState<BreakpointPoint>({
    isXXs: false,
    isXs: false,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2xl: false,
  });

  useEffect(() => {
    const updateBreakpoints = () => {
      const updatedBreakpoints: BreakpointPoint = {
        isXXs: window.matchMedia(breakpointsConfig.isXXs).matches,
        isXs: window.matchMedia(breakpointsConfig.isXs).matches,
        isSm: window.matchMedia(breakpointsConfig.isSm).matches,
        isMd: window.matchMedia(breakpointsConfig.isMd).matches,
        isLg: window.matchMedia(breakpointsConfig.isLg).matches,
        isXl: window.matchMedia(breakpointsConfig.isXl).matches,
        is2xl: window.matchMedia(breakpointsConfig.is2xl).matches,
      };

      setBreakpoints((prevBreakpoints) => {
        if (
          JSON.stringify(prevBreakpoints) !== JSON.stringify(updatedBreakpoints)
        ) {
          return updatedBreakpoints;
        }
        return prevBreakpoints;
      });
    };
    window.addEventListener("resize", updateBreakpoints);

    updateBreakpoints();

    return () => {
      window.removeEventListener("resize", updateBreakpoints);
    };
  }, []);

  const onBreakpoint = (
    breakpoint: keyof BreakpointPoint,
    callback: Function
  ) => {
    if (breakpoints[breakpoint]) {
      callback();
    }
  };
  return { ...breakpoints, onBreakpoint };
};

export default useMediaQuery;
