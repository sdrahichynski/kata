import * as React from "react";
import style from "./header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return <div className={style.wrapper}>HEADER</div>;
};

export default Header;
