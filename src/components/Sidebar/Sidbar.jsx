import { useState } from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import AddTaskModal from "../AddTaskModal/AddTaskModal.jsx";

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>Mauricio</div>
      <button className={styles.addTask} onClick={openModal}>
        + Add task
      </button>
      <div className={styles.menu}>
        <div className={styles.menuItem}>Search</div>
        <Link to="/" className={styles.menuItem}>
          Inbox
        </Link>
        <Link to="/today" className={styles.menuItem}>
          Today
        </Link>
        <div className={styles.menuItem}>Upcoming</div>
        <div className={styles.menuItem}>Filters & Labels</div>
        <div className={styles.menuItem}>Completed</div>
      </div>
      <div className={styles.projects}>
        <div className={styles.projectsHeader}>My Projects</div>
        <div className={styles.menuItem}>Home 🏡</div>
      </div>

      {isModalOpen && <AddTaskModal onClose={closeModal} />}
    </div>
  );
}
