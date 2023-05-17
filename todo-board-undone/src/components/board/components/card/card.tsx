import * as React from "react";
import { cx } from "utils";
import styles from "./card.module.scss";

interface CardProps {
  type?: "card" | "placeholder" | "drop";
  order?: number;

  onDragStart(order: number): void;

  onDragEnd(): void;

  // onDragOver(order: number, side: "left" | "right"): void;
  onMouseIn(order: number, side: "left" | "right"): void;

  onMouseOut(): void;
}

const Card: React.FC<CardProps & React.PropsWithChildren> = ({
  children,
  type = "card",
  order = 0,
  onDragStart,
  onDragEnd,
  onMouseIn,
  onMouseOut,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const flyRef = React.useRef<HTMLDivElement | null>(null);
  const firstClickRef = React.useRef<{ top: number; left: number } | null>(
    null
  );
  const [isDrag, setIsDrag] = React.useState(false);
  const [dragPosition, setDragPosition] = React.useState({ top: 0, left: 0 });

  const mouseMoveHandler = React.useCallback((event: MouseEvent) => {
    if (firstClickRef.current) {
      setIsDrag(true);

      setDragPosition({
        top: event.pageY - firstClickRef.current?.top,
        left: event.pageX - firstClickRef.current?.left,
      });
    }
  }, []);

  const mouseDownHandler = React.useCallback((event: MouseEvent) => {
    if (!event.currentTarget) return;
    // @ts-ignore
    const elRect = event.currentTarget.getBoundingClientRect();

    firstClickRef.current = {
      top: event.pageY - elRect.y,
      left: event.pageX - elRect.x,
    };

    console.log(event.pageY, elRect.y);

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  }, []);

  const mouseUpHandler = React.useCallback((event: MouseEvent) => {
    setIsDrag(false);

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  }, []);

  const mouseInHandler = React.useCallback(
    (event: MouseEvent) => {
      if (!ref.current) return;
      onMouseIn(order, "left");
    },
    [order, onMouseIn]
  );

  const mouseOutHandler = React.useCallback(() => {
    onMouseOut();
  }, [onMouseOut]);

  React.useEffect(() => {
    if (!ref.current) return;

    ref.current.addEventListener("mousedown", mouseDownHandler);
    ref.current.addEventListener("mouseenter", mouseInHandler);
    ref.current.addEventListener("mouseleave", mouseOutHandler);

    return () => {
      ref.current?.removeEventListener("mousedown", mouseDownHandler);
      ref.current?.addEventListener("mouseenter", mouseInHandler);
      ref.current?.addEventListener("mouseleave", mouseOutHandler);
    };
  }, [isDrag]);

  React.useLayoutEffect(() => {
    if (ref.current && flyRef.current) {
      flyRef.current.style.height = `${ref.current.offsetHeight}px`;
      flyRef.current.style.width = `${ref.current.offsetWidth}px`;
    }
  }, [isDrag]);

  React.useLayoutEffect(() => {
    if (isDrag) {
      onDragStart(order);
    } else {
      onDragEnd();
    }
  }, [isDrag, order]);

  return (
    <>
      {!isDrag && (
        <div
          ref={ref}
          className={cx(
            styles.wrapper,
            isDrag ? styles.placeholder : styles[type]
          )}
          style={{ order }}
        >
          {!isDrag && children}
        </div>
      )}

      {isDrag && (
        <div
          className={styles.fly}
          ref={flyRef}
          style={{
            transform: `translate( ${dragPosition.left}px, ${dragPosition.top}px)`,
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Card;
