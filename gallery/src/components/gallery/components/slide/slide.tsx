import * as React from "react";
import styles from "./slide.module.scss";

interface SlideProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  type?: "left" | "right" | "center";
}

const Slide: React.FC<SlideProps> = ({
  children,
  type = "center",
  className,
  ...rest
}) => {
  return (
    <div className={styles.slide + " " + className} {...rest}>
      {children}
    </div>
  );
};

export default Slide;
