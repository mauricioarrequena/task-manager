import styles from "./Sidebar.module.css"; 
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>Mauricio</div>
      <button className={styles.addTask}>+ Add task</button>
      <div className={styles.menu}>
        <Link to="/" className={styles.menuItem}>Inbox</Link>
        <Link to="/today" className={styles.menuItem}>Today</Link>
        <div className={styles.menuItem}>Upcoming</div>
        <div className={styles.menuItem}>Filters & Labels</div>
        <div className={styles.menuItem}>Completed</div>
      </div>
      <div className={styles.projects}>
        <div className={styles.projectsHeader}>My Projects</div>
        <div className={styles.menuItem}>Home 🏡</div>
      </div>
    </div>
  );
}
