import * as React from "react";
import * as LC from "./components";
import styles from "./slider.module.scss";

interface SliderProps {}

const slides = new Array(500).fill(null).map((_, index) => ({
  id: index,
  text: String(index),
}));

const Slider: React.FC<SliderProps> = () => {
  const [index, setIndex] = React.useState({
    prev: 0,
    curr: 0,
  });

  const SLIDES = React.useMemo(() => {
    return [slides[slides.length - 1], ...slides, slides[0]];
  }, [slides]);

  const trackRef = React.useRef<HTMLDivElement>(null);

  const handleForward = () => {
    setIndex((prev) => ({
      prev: prev.curr,
      curr: prev.curr === slides.length - 1 ? 0 : prev.curr + 1,
    }));
  };

  const handleBackward = () => {
    setIndex((prev) => ({
      prev: prev.curr,
      curr: prev.curr === 0 ? slides.length - 1 : prev.curr - 1,
    }));
  };

  React.useLayoutEffect(() => {
    if (trackRef.current) {
      if (index.prev === 0 && index.curr === slides.length - 1) {
        const transition = trackRef.current.style.transition;
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translateX(${
          -(index.curr + 2) * 100
        }%)`;
        setTimeout(() => {
          // @ts-ignore
          trackRef.current.style.transition = transition;
          // @ts-ignore
          trackRef.current.style.transform = `translateX(${
            -(index.curr + 1) * 100
          }%)`;
        }, 0);

        return;
      }

      if (index.prev === slides.length - 1 && index.curr === 0) {
        const transition = trackRef.current.style.transition;
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translateX(${-index.curr * 100}%)`;
        setTimeout(() => {
          // @ts-ignore
          trackRef.current.style.transition = transition;
          // @ts-ignore
          trackRef.current.style.transform = `translateX(${
            -(index.curr + 1) * 100
          }%)`;
        }, 0);

        return;
      }

      trackRef.current.style.transform = `translateX(${
        -(index.curr + 1) * 100
      }%)`;
    }
  }, [index]);

  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={styles.rails}
          ref={trackRef}
        >
          {SLIDES.map(
            ({ text, id }, index) => (
              <div
                className={styles.slideWrapper}
                key={`${id}-${index === 0 ? "extra" : ""}${
                  index === slides.length + 1 ? "extra" : ""
                }`}
              >
                <LC.Slide text={text} />
              </div>
            )
          )}
        </div>
      </div>

      <button onClick={() => handleBackward()}> prev</button>
      <button onClick={() => handleForward()}> next</button>
    </>
  );
};

export default Slider;
