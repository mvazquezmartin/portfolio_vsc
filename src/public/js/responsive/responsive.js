const mobile = "600px";
const desktop = "1024px";

const responsive = {
  BREAKPOINT_MOBILE: `(max-width:${mobile})`,
  BREAKPOINT_DESKTOP: `(min-width: ${desktop})`,
  BREAKPOINT_TABLET: `(min-width: ${
    parseInt(mobile) + 1
  }px) and (max-width: ${parseInt(desktop)-1}px)`,
};

export { responsive };
