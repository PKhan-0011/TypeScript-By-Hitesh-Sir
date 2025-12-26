import React from "react";
import { useState } from "react";

const Counter = (): React.ReactNode => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>click me </button>
    </div>
  );
};

export default Counter;
