"use client";
import styles from "./styles.module.css";

export default function ChatLoader() {
  return (
    <>
      <div className={`${styles.loader}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
