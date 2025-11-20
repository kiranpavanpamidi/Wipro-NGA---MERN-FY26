import { useState, useRef } from "react";

export default function useTimer() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    if (timerRef.current) return; 
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const reset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  };

  return { time, start, stop, reset };
}
