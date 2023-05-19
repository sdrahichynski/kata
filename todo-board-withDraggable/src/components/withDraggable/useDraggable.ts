import * as React from "react";

export const useDraggable = (
  ref: React.MutableRefObject<HTMLDivElement | undefined>
) => {
  const [isDrag, setIsDrag] = React.useState(false);
  const [translate, setTranslate] = React.useState<[number, number]>([0, 0]);
  const firstClickRef = React.useRef<[number, number] | null>(null);

  const onMousemove = (e: MouseEvent) => {
    if (!firstClickRef.current) return;

    setIsDrag(true);

    setTranslate([
      e.pageX - firstClickRef.current[0],
      e.pageY - firstClickRef.current[1],
    ]);
  };

  const onMouseup = (e: MouseEvent) => {
    setIsDrag(false);
    setTranslate([0, 0]);
    document.removeEventListener("mousemove", onMousemove);
  };

  const onMousedown = React.useCallback((e: MouseEvent) => {
    e.preventDefault();
    if (!e.currentTarget) return;
    // @ts-ignore
    const elRect = e.currentTarget.getBoundingClientRect();

    firstClickRef.current = [e.pageX - elRect.x, e.pageY - elRect.y];

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseup);
  }, []);

  React.useEffect(() => {
    if (!ref.current) return;

    // TODO: event delegation;
    ref.current.addEventListener("mousedown", onMousedown);

    return () => {
      if (!ref.current) return;

      ref.current.removeEventListener("mousedown", onMousedown);
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("mouseup", onMouseup);
    };
  }, []);

  return {
    isDrag,
    translate,
  };
};
