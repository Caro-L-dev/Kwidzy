import React from "react";
import styles from "../Button/index.module.css";

interface SecondaryBtnProps {
  children?: React.ReactNode;
}

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({ children }) => {
  return (
    <button type="button" className={`${styles.btn} ${styles.secondary}`}>
      {children}
    </button>
  );
};

export default SecondaryBtn;
