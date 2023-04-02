import * as React from "react";
import * as LC from "./components";
import styles from "./slider.module.scss";

interface SliderProps {}

const slides = new Array(10).fill(null).map((_, index) => ({
  id: index,
  text: String(index),
}));

const SLIDES = [
  { ...slides[slides.length - 1], id: "extra_-1" },
  ...slides,
  { ...slides[0], id: "extra_0" },
];

const ACTIONS = {
  BACK: "BACK",
  FORWARD: "FORWARD",
  JUMP: "JUMP",
};

const getTransformByIndex = (index: number) => {
  return `translateX(-${index * 100}%)`;
};

const Slider: React.FC<SliderProps> = () => {
  const [index, setIndex] = React.useState(0);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const lastActionRef = React.useRef<string | null>(null);

  const handleBackward = () => {
    lastActionRef.current = ACTIONS.BACK;

    setIndex((prev) => {
      if (prev === 0) return slides.length - 1;
      return prev - 1;
    });
  };

  const handleForward = () => {
    lastActionRef.current = ACTIONS.FORWARD;

    setIndex((prev) => {
      if (prev === slides.length - 1) return 0;
      return prev + 1;
    });
  };

  React.useLayoutEffect(() => {
    const track = trackRef.current;
    const lastAction = lastActionRef.current;

    if (!track) return;

    const { transition } = getComputedStyle(track);

    let prevTransformIndex =
      lastAction === ACTIONS.BACK
        ? index + 1
        : lastAction === ACTIONS.FORWARD
        ? index - 1
        : index;

    // TODO: fix in strictmode
    track.style.transition = "none";
    track.style.transform = getTransformByIndex(prevTransformIndex + 1);

    setTimeout(() => {
      track.style.transition = transition;
      track.style.transform = getTransformByIndex(index + 1);
    }, 0);
  }, [index]);

  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.prev} onClick={() => handleBackward()}>
          {"<"}
        </button>

        <button className={styles.next} onClick={() => handleForward()}>
          {">"}
        </button>

        <div className={styles.rails} ref={trackRef}>
          {SLIDES.map(({ text, id }) => (
            <div className={styles.slideWrapper} key={id}>
              <LC.Slide text={text} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
