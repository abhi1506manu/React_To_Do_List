import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [item, setItem] = useState([]);

  function changeInput(event) {
    const newValue = event.target.value;
    setName(newValue);
  }

  function buttonClick() {
    setItem((prevItem) => {
      return [...prevItem, name];
    });
    setName("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeInput} type="text" value={name} />
        <button onClick={buttonClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem) => (
            <li>{todoItem} </li>
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}

export default App;
