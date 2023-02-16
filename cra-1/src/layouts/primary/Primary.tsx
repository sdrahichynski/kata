import * as React from "react";
import * as C from "components";
// @ts-ignore
import Logo from "./logo.png";
// @ts-ignore
import styles from "./Primary.module.scss";

interface PrimaryProps extends React.PropsWithChildren {
  loading?: boolean,
}

const Primary: React.FC<PrimaryProps> = ({ loading = false, children }) => {
  return <div className={styles.wrapper}>
    <div className={styles.header}>
      <div className={styles.headerLogoContainer}>
        <img src={Logo} alt={""} />
      </div>

      <div className={styles.navContainer}>
        <C.Navigation />
      </div>
    </div>

    <div className={styles.content}>
      { loading ? "........LOADING.........." : children}
    </div>

    <div className={styles.footer}>
      FOOTER!
    </div>
  </div>;
};

export default Primary;
