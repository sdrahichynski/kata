import * as React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.scss";

interface CardProps {
  title: string;
  content?: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ title, content, id }) => {
  return (
    <div className={style.wrapper}>
      <h4 className={style.title}>{title}</h4>
      {content && <div className={style.content}>...</div>}
      {/*<Link to={`todos/${id}`}>Show</Link>*/}
    </div>
  );
};

export default Card;
