import React from "react";
import styles from "../Button/index.module.css";

interface MainBtnProps {
  children?: React.ReactNode;
}

const MainBtn: React.FC<MainBtnProps> = ({ children }) => {
  return (
    <button type="button" className={`${styles.btn} ${styles.main}`}>
      {children}
    </button>
  );
};

export default MainBtn;
