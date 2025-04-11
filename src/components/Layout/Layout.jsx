import React from "react";
import styles from './Layout.module.css';
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidbar.jsx";

export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar></Sidebar>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}
