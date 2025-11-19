import React from "react";
import BookList from "../components/BookList";
import RenderPropsExample from "../components/UserStatus";

function Home() {
  return (
    <div>
      <h1>BookVerse - Home</h1>

      <RenderPropsExample
        render={(name) => <h3>Welcome back, {name}!</h3>}
      />

      <BookList />
    </div>
  );
}

export default Home;
