import { useNavigate } from "react-router-dom";
import styles from "./navigation.module.scss"

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <ul className={styles.wrapper}>
      <li onClick={() => navigate("/")}>
        Home
      </li>

      <li onClick={() => navigate("/bikes")}>
        Bikes
      </li>
    </ul>
  );
};

export default Navigation;
