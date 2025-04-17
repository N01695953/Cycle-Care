import React, { useState } from "react";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import styles from "../styles/MoodTracker.module.css";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState("");

  const moods = [
    { label: "Happy", icon: <FaSmile />, value: "happy" },
    { label: "Neutral", icon: <FaMeh />, value: "neutral" },
    { label: "Sad", icon: <FaFrown />, value: "sad" },
  ];

  return (
    <div className={styles.container}>
      <h2>How are you feeling today?</h2>
      <div className={styles.moodOptions}>
        {moods.map((mood) => (
          <button
            key={mood.value}
            className={`${styles.moodButton} ${
              selectedMood === mood.value ? styles.selected : ""
            }`}
            onClick={() => setSelectedMood(mood.value)}
          >
            {mood.icon}
            <span>{mood.label}</span>
          </button>
        ))}
      </div>
      {selectedMood && (
        <p className={styles.feedback}>You selected: <strong>{selectedMood}</strong> mood today.</p>
      )}
    </div>
  );
};

export default MoodTracker;
