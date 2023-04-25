import * as React from "react";
import styles from "./slide.module.scss";
import cx from "classnames";

export interface SlideProps
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
    <div className={cx(styles.slideWrapper, type)} {...rest}>
      <div className={cx(styles.slide, className)}>{children}</div>
    </div>
  );
};

export default Slide;
