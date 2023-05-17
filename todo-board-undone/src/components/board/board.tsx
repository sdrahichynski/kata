import * as React from "react";
import * as LC from "./components";
import { BoardContext } from "./duck";
import styles from "./board.module.scss";

interface BoardProps {}

const CARDS = [
  {
    id: 1,
    order: 0,
  },
  {
    id: 2,
    order: 1,
  },
  {
    id: 3,
    order: 2,
  },
];

const Board: React.FC<BoardProps> = () => {
  const [phOrder, setPhOrder] = React.useState<number | null>(null);
  const defaultPhOrderRef = React.useRef<number | null>(null);

  const onDragStart = (cardOrder: number) => {
    setPhOrder(cardOrder);
    defaultPhOrderRef.current = cardOrder;
  };
  const onDragEnd = () => {
    setPhOrder(null);
    defaultPhOrderRef.current = null;
  };
  const onDragIn = (cardOrder: number, side: "left" | "right") => {
    // SOME MAGIC
    if (phOrder === null) return;

    if (side === "left") {
      setPhOrder(cardOrder);
    } else {
      setPhOrder(cardOrder + 1);
    }
  };
  const onDragOut = () => {
    setPhOrder(defaultPhOrderRef.current);
  };

  return (
    <BoardContext.Provider value={{}}>
      <div className={styles.wrapper}>
        {CARDS.map(({ id, order }) => (
          <LC.Card
            key={id}
            order={order}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onMouseIn={onDragIn}
            onMouseOut={onDragOut}
          >
            {id}
          </LC.Card>
        ))}

        {phOrder !== null && (
          <LC.Card
            type="placeholder"
            order={phOrder}
            onDragStart={() => {}}
            onDragEnd={() => {}}
            onMouseIn={onDragIn}
            onMouseOut={onDragOut}
          />
        )}

        {/*<LC.Card type="drop">DROP IT!</LC.Card>*/}
      </div>
    </BoardContext.Provider>
  );
};

export default Board;
