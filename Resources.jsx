import React from 'react';
import styles from '../styles/Resources.module.css';

const resources = [
  {
    title: "Nutrition Tips for Your Cycle",
    link: "https://www.healthline.com/nutrition/period-diet",
  },
  {
    title: "How to Track Your Period Effectively",
    link: "https://www.plannedparenthood.org/learn/health-and-wellness/menstruation",
  },
  {
    title: "Understanding Hormonal Changes",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6512260/",
  }
];

const Resources = () => (
  <div className={styles.container}>
    <h1>Helpful Resources</h1>
    <ul>
      {resources.map((item, index) => (
        <li key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Resources;
