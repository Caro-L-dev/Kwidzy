import React from "react";
import styles from "../Button/index.module.css";

interface ThirdBtnProps {
  children?: React.ReactNode;
}

const ThirdBtn: React.FC<ThirdBtnProps> = ({ children }) => {
  return (
    <button type="button" className={`${styles.btn} ${styles.third}`}>
      {children}
    </button>
  );
};

export default ThirdBtn;
