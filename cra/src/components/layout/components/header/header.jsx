import styles from "./header.module.scss";
import * as Media from "./media";
import * as LC from "./components";

const Header = () => {
  return (
    <>
      <div className={styles.logoContainer}>
        <img src={Media.Logo} alt="" width={200} />
      </div>

      <LC.Navigation />
    </>
  );
};

export default Header;
