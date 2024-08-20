import { useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSub() {
    if (count === 0) {
      return count;
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">
          Add
        </button>
        <button className="sub" onClick={handleSub}>
          Sub
        </button>
      </div>
    </div>
  );
}
