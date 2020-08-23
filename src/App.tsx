import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  { title: "What is React?", content: "React is a frontend framework" },
  {
    title: "Why use React?",
    content: "React is a favorite frontend framework",
  },
  {
    title: "How do you use React",
    content: "You use react by creating components",
  },
];
function App() {
  return (
    <div className="App">
      {/* <Accordion items={items}></Accordion> */}
      <Search />
    </div>
  );
}

export default App;
