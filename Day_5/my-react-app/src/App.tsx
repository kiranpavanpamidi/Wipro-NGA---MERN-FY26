import React, { useState } from "react";
import NumberList, { NumberItem } from "./components/NumberList";
import FilterControls from "./components/FilterControls";
import Logger from "./components/Logger";
import HoistingDemo from "./components/HoistingDemo";
import ConstructorDemo from "./components/ConstructorDemo";

const App: React.FC = () => {
  const originalNumbers: NumberItem[] = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  const [numbers, setNumbers] = useState<NumberItem[]>(originalNumbers);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>JSX and JavaScript Concepts Sprint</h2>

      <FilterControls
        originalNumbers={originalNumbers}
        setNumbers={setNumbers}
      />
      <NumberList numbers={numbers} />
      <Logger numbers={numbers} />
      <HoistingDemo />
      <ConstructorDemo />
    </div>
  );
};

export default App;
