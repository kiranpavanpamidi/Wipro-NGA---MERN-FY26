import React, { useState } from "react";
import useTimer from "../hooks/useTimer";

function WorkoutTracker() {
  const [sets, setSets] = useState(0);
  const { time, start, stop, reset } = useTimer();

  return (
    <div>
      <h3>Completed Sets: {sets}</h3>
      <button onClick={() => setSets(sets + 1)}>Complete Set</button>

      <h3>Rest Timer: {time}s</h3>

      <button onClick={start}>Start Rest</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default WorkoutTracker;
