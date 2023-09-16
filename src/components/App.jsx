import React, { useState } from "react";
import ReactDom from "react-dom";
function App() {
  const [count, setState] = useState(0);

  function increase() {
    setState(count + 1);
  }

  function decrease() {
    setState(count - 1);
  }

  ReactDom.render(
    <div className="container">
      <h1>{count}</h1>
      <buttin onClick={decrease}>-</buttin>
      <button onClick={increase}>+</button>
    </div>,

    document.getElementById("root")
  );
}
export default App;
