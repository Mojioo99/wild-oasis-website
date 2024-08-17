"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(users.length);
  return <button onClick={() => setCount((count) => count + 1)}>{count}</button>;
}
