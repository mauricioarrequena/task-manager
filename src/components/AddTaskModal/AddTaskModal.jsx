import { useState } from "react";
import styles from "./AddTaskModal.module.css";
import { postTask } from "../../services/taskService.js";

export default function AddTaskModal({ onClose }) {
  const [taskName, setTaskName] = useState("Submit travel form by next Wed p3");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!taskName.trim()) {
      return;
    }

    const newTask = {
      title: taskName,
      description: "",
    };
    try {
      const createdTask = await postTask(newTask);
      console.log(`we are submitting a not empty form ${createdTask}`);
      setTaskName("");
      onClose();
    } 
    catch (error) {
      console.log("Error adding task:", error);
    }
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input
            className={styles.taskInput}
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <div className={styles.descriptionLabel}>Description</div>

          <div className={styles.buttonRow}>
            <button className={styles.optionButton}>
              <span className={styles.buttonIcon}>📅</span> Date
            </button>
            <button className={styles.optionButton}>
              <span className={styles.buttonIcon}>🏳️</span> Priority
            </button>
            <button className={styles.optionButton}>
              <span className={styles.buttonIcon}>⏰</span> Reminders
            </button>
            <button className={styles.moreButton}>
              <span className={styles.moreIcon}>•••</span>
            </button>
          </div>

          <div className={styles.footer}>
            <div className={styles.inboxDropdown}>
              <span className={styles.inboxIcon}>📥</span>
              <span className={styles.inboxText}>Inbox</span>
              <span className={styles.dropdownArrow}>▼</span>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.cancelButton} onClick={onClose}>
                Cancel
              </button>
              <button className={styles.addButton} type="submit">
                Add task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
