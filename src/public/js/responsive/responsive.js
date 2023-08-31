import { mobileResponsive } from "./mobile/mobile.js";
import { responsive } from "./responsiveBreakPoints.js";

const setUpResponsiveEvents = () => {
  if (window.matchMedia(responsive.BREAKPOINT_MOBILE).matches) {
    window.addEventListener("load", mobileResponsive);
    window.addEventListener("resize", mobileResponsive);
  }
};

export { setUpResponsiveEvents };
