import * as C from "components";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <C.Slider />
      </div>

      <div className={styles.slider}>
        <C.Slider_2 />
      </div>
    </div>
  );
}

export default App;
