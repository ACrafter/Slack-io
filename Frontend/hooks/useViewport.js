import { useState, useEffect } from "react";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const getClosestBreakpoint = (width) => {
  const breakpointValues = Object.values(breakpoints);
  let closest = breakpointValues[0];

  for (let i = 1; i < breakpointValues.length; i++) {
    if (Math.abs(width - breakpointValues[i]) < Math.abs(width - closest)) {
      closest = breakpointValues[i];
    }
  }

  return closest;
};

const useViewport = () => {
  const [breakpoint, setBreakpoint] = useState(
    typeof window !== "undefined"
      ? getClosestBreakpoint(window.innerWidth)
      : breakpoints.md
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getClosestBreakpoint(window.innerWidth));
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return breakpoint;
};

export default useViewport;
