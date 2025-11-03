import React from "react";
import { NumberItem } from "./NumberList";

interface LoggerProps {
  numbers: NumberItem[];
}

const Logger: React.FC<LoggerProps> = ({ numbers }) => {
  const handleLog = () => {
    numbers.forEach((num) => console.log(num.value));
    alert("Numbers have been logged to the console!");
  };

  return (
    <div>
      <h3>Logger Component</h3>
      <button onClick={handleLog}>Log All Numbers</button>
    </div>
  );
};

export default Logger;
