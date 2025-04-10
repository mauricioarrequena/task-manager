import React from "react";
import styles from './Layout.module.css'


export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>Mauricio</div>
        <button className={styles.addTask}>+ Add task</button>
        <div className={styles.menu}>
          <div className={`${styles.menuItem} ${styles.active}`}>Inbox</div>
          <div className={styles.menuItem}>Today</div>
          <div className={styles.menuItem}>Upcoming</div>
          <div className={styles.menuItem}>Filters & Labels</div>
          <div className={styles.menuItem}>Completed</div>
        </div>
        <div className={styles.projects}>
          <div className={styles.projectsHeader}>My Projects</div>
          <div className={styles.menuItem}>Home 🏡</div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.mainHeader}>Inbox</div>
        <div className={styles.tasks}>
          <div className={styles.task}>
            Download Todoist on all your devices
          </div>
          <div className={styles.task}>Take the productivity method quiz</div>
          <div className={styles.task}>Browse the Todoist Inspiration Hub</div>
          <div className={styles.task}>Plan my day 🌞</div>
        </div>
      </div>
    </div>
  );
}
