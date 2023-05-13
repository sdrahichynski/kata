import * as React from "react";
import style from "./card.module.scss";

interface CardProps {
  title: string;
  content?: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ title, content, id }) => {
  const [isMoving, setIsMoving] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const shadowRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    if (!wrapperRef.current || !shadowRef.current) return;

    shadowRef.current.style.height = `${wrapperRef.current?.offsetHeight}px`;
    shadowRef.current.style.top = `${wrapperRef.current?.offsetTop}px`;
    shadowRef.current.style.left = `${wrapperRef.current?.offsetLeft}px`;
  });

  return (
    <>
      <div className={style.wrapper} ref={wrapperRef}>
        <h4 className={style.title}>{title}</h4>
        {content && <div className={style.content}>...</div>}
        {/*<Link to={`todos/${id}`}>Show</Link>*/}
      </div>

      <div className={style.shadow} ref={shadowRef} />
    </>
  );
};

export default Card;
