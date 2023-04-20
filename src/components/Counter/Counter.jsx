import React, { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      Tickets
      <span>{count}</span>
      <div className="buttons">
        <button onClick={incrementCount} className="addButton">
          +
        </button>
        <button onClick={decrementCount} className="minusButton">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
