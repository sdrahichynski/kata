import * as React from "react";
import styles from "./card.module.scss";

interface CardProps {
  title?: React.ReactNode;
  // ref: React.ForwardedRef<HTMLDivElement>;
}

const Card: React.FC<CardProps> = React.forwardRef(({ title }, ref) => {
  return (
    //@ts-ignore //TODO: fix typings
    <div className={styles.wrapper} ref={ref}>
      {title}
    </div>
  );
});

export default Card;
