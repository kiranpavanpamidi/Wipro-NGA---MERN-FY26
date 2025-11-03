import React from "react";

const HoistingDemo: React.FC = () => {
  function demonstrateHoisting() {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    // @ts-ignore  // tell TypeScript we *know* this is intentional
    console.log("Before declaration:", a);
    var a = 10;
    console.log("After declaration:", a);
  }

  return (
    <div>
      <h3>Hoisting Demo</h3>
      <button onClick={demonstrateHoisting}>Run Hoisting Example</button>
    </div>
  );
};

export default HoistingDemo;
