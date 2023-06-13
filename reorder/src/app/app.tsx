import * as React from "react";
import * as C from "components";
import styles from "./app.module.scss";
import { Reorder } from "framer-motion";

const LIST = [
  {
    id: 1,
    // name: "Super Bruni",
  },
  {
    id: 2,
  },
];

const App: React.FC = () => {
  const [items, setItems] = React.useState(LIST);

  const handleAdd = () => {
    setItems((prevItems) => [...prevItems, { id: prevItems.length + 1 }]);
  };

  const reorder = () => {
    //@ts-ignore
    setItems((prevItems) => prevItems.toSorted(() => Math.random() - 1));
  };

  return (
    <div>
      <button className={styles.button} onClick={handleAdd}>
        Add
      </button>

      <button className={styles.button} onClick={reorder}>
        Shuffle
      </button>

      <C.List items={items} />
    </div>
  );
};

export default App;
