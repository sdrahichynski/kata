import * as React from "react";
import styles from "./board.module.scss";
import * as LC from "./components";

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
  return (
    <div className={styles.wrapper}>
      {CARDS.map(({ id }) => (
        <LC.DraggableCard title={id} key={id} />
      ))}
    </div>
  );
};

export default Board;
