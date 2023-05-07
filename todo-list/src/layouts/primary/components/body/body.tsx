import * as React from "react";
import style from "./body.module.scss";

interface BodyProps {}

const Body: React.FC<BodyProps & React.PropsWithChildren> = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default Body;
