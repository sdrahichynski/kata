import * as React from "react";
import { useDraggable } from "./useDraggable";

const withDraggable = <T,>(Wrapped: React.FC<T>) => {
  const Draggable: React.FC<T> = (props) => {
    const wrapperRef = React.useRef<HTMLDivElement>();
    const { isDrag, translate } = useDraggable(wrapperRef);

    return (
      <>
        {isDrag && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              transform: `translate(${translate[0]}px, ${translate[1]}px)`,
            }}
          >
            <Wrapped {...props} ref={null} />
          </div>
        )}

        <Wrapped {...props} ref={wrapperRef} />
      </>
    );
  };

  return Draggable;
};

export default withDraggable;
