import React from "react";

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
  }
}

const ConstructorDemo: React.FC = () => {
  const person = new Person("John Doe", 25);

  return (
    <div>
      <h3>Constructor Demo</h3>
      <p>{person.introduce()}</p>
    </div>
  );
};

export default ConstructorDemo;
