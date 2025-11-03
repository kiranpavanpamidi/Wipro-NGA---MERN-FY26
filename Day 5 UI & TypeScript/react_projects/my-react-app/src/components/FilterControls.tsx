import React from "react";
import { NumberItem } from "./NumberList";

interface FilterControlsProps {
  originalNumbers: NumberItem[];
  setNumbers: React.Dispatch<React.SetStateAction<NumberItem[]>>;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  originalNumbers,
  setNumbers,
}) => {
  const filterEven = () => {
    const evenNumbers = originalNumbers.filter((num) => num.value % 2 === 0);
    setNumbers(evenNumbers);
  };

  const mapDouble = () => {
    const doubled = originalNumbers.map((num) => ({
      value: num.value * 2,
    }));
    setNumbers(doubled);
  };

  const resetList = () => {
    setNumbers(originalNumbers);
  };

  const logNumbers = () => {
    originalNumbers.forEach((num) => console.log(num.value));
    alert("Numbers logged to console!");
  };

  return (
    <div>
      <h3>Filter & Map Controls</h3>
      <button onClick={filterEven}>Filter Even Numbers</button>{" "}
      <button onClick={mapDouble}>Map (Double Numbers)</button>{" "}
      <button onClick={logNumbers}>Log Numbers</button>{" "}
      <button onClick={resetList}>Reset</button>
    </div>
  );
};

export default FilterControls;
