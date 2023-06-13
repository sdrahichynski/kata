import * as React from "react";
import Reorder from "../reorder";
import styles from "./list.module.scss";

interface Item {
  id: number | string;
}

interface ListProps {
  items: Item[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <>
      <Reorder.Group className={styles.wrapper}>
        {items.map(({ id }) => (
          <Reorder.Item key={id} className={styles.listItem}>
            {id}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
};

export default List;
