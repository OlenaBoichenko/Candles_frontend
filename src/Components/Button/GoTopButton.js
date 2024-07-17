import React, { useEffect, useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import styles from "./GoTopStyle.module.css";

export const GoTopButton = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 200);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div
      className={showGoTop ? "" : styles.goTopHidden}
      onClick={handleScrollUp}
    >
      <button type={"button"} className={styles.goTop}>
        <FiArrowUpCircle size="40" />
      </button>
    </div>
  );
};
