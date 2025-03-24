import { SECONDS_PER_MINUTE } from "../constants/date";

export const vhToPixels = (vh = 100): number => {
  return (vh * window.innerHeight) / 100;
};

export const vwToPixels = (vw = 100): number => {
  return (vw * window.innerWidth) / 100;
};

export const getTimezoneOffset = (): number => {
  return -(new Date().getTimezoneOffset() / SECONDS_PER_MINUTE);
};

export const _scroll = (px: number, isVh=false) => {
  window.scrollTo({
    top: isVh ? vhToPixels(10) : px,
    behavior: "smooth",
  });
};
