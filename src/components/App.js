import React from "react";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
  console.log(user);

  return (
    <div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;

