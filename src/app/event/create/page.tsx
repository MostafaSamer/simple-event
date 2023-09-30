"use client";

import styles from './page.module.css'
import { FormEvent, useState } from 'react';
import { addEvent, reset } from "@/redux/features/eventsSlice";
import { useAppDispatch, useAppSelector } from '@/redux/hook';

export default function SingleEvent() {

  const dispatch = useAppDispatch();
  const nextEventId = useAppSelector((state) => state.eventsReducer.nextEventId);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addEvent({
      date: new Date(date),
      eventName: name,
      id: nextEventId,
    }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
