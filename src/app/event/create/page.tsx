"use client";

import styles from "./page.module.css";
import { FormEvent, useState } from "react";
import { addEvent } from "@/redux/features/eventsSlice";
import { useAppDispatch } from "@/redux/hook";
import { useRouter } from "next/navigation";

export default function SingleEvent() {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      addEvent({
        date: date,
        eventName: name,
      })
    );
    push("/");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formField}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="date" className={styles.label}>
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className={styles.inputField}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
