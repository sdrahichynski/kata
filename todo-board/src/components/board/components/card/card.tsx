import * as React from "react";
import styles from "./card.module.scss";

interface CardProps {
  title: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return <div className={styles.wrapper}>{title}</div>;
};

export default Card;
