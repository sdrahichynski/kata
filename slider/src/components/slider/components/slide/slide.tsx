import * as React from "react";
import styles from "./slide.module.scss";

interface SlideProps {
  text: string;
}

const Slide: React.FC<SlideProps> = ({ text }) => {
  return <div className={styles.wrapper}>
    <span>{text}</span>
  </div>;
};

export default Slide;
