import React from "react";
import styles from "../styles/TrackerCard.module.css";

const TrackerCard = ({ title, content, icon, bgColor }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default TrackerCard;
