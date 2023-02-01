import * as React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import styles from "./Navigation.module.scss";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return <nav className={styles.wrapper}>
    <Link to={"/"}>Home</Link>
    <Link to={"/bikes"}>Bikes</Link>
  </nav>;
};

export default Navigation;
