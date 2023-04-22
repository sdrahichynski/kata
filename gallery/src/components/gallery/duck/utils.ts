import { CSSProperties } from "react";
import { SLIDE_STEP, SCROLL_STEP } from "./consts";

export const getSlideStyle = (
  i: number,
  scroll: number
): Partial<CSSProperties> => {
  const transform = scroll - i * SLIDE_STEP;
  const opacity =
    transform >= SLIDE_STEP || transform < -SLIDE_STEP
      ? 0
      : transform < -SLIDE_STEP / 2
      ? 0.5
      : 1;

  return {
    transform: `translateZ(${transform}px)`,
    opacity,
  };
};

export const calculateScroll = (
  prevScroll: number,
  delta: number,
  slidesCount: number
) => {
  const minScroll = -0.5 * SLIDE_STEP;
  const maxScroll = (slidesCount - 0.5) * SLIDE_STEP;
  const rawScroll = Math.min(
    maxScroll,
    Math.max(minScroll, prevScroll + delta)
  );

  if (delta < 0) return Math.floor(rawScroll / SCROLL_STEP) * SCROLL_STEP;
  return Math.ceil(rawScroll / SCROLL_STEP) * SCROLL_STEP;
};
