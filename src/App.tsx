import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [{ label: 'Red', value: 'red' }, { label: 'Green', value: 'green' }, { label: 'Blue', value: 'blue' },];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="App">
      {/* <Accordion items={items}></Accordion> */}
      {/* <Search /> */}
      <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
    </div>
  );
}

export default App;
