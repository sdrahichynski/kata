import { Outlet } from "react-router";
import * as LC from "./components";
import styles from "./layout.module.scss";

const Layout = (props) => {
  console.log(props);

  return (
    <main className={styles.wrapper}>
      <header>
        <LC.Header />
      </header>

      <div className={styles.content}>
        <Outlet />
      </div>

      <footer>
        <LC.Footer />
      </footer>
    </main>
  );
};

export default Layout;
