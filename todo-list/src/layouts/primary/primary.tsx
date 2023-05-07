import * as React from "react";
import { Outlet } from "react-router-dom";
import * as LC from "./components";
import style from "./primary.module.scss";

interface PrimaryProps {}

const Primary: React.FC<PrimaryProps> = () => {
  return (
    <div className={style.wrapper}>
      <LC.Header />

      <LC.Body>
        <Outlet />
      </LC.Body>
    </div>
  );
};

export default Primary;
