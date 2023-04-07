import * as React from "react";
import { Outlet } from "react-router-dom";
import styles from "./unauthorized.module.scss";

interface UnauthorizedProps {}

const Unauthorized: React.FC<UnauthorizedProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default Unauthorized;
