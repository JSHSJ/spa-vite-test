import { useState } from "react";

export default function Root(props) {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>Hallo Vite Single Spa</h1>
        <p>Willkommen.</p>
       <span>Current counter is: {counter}</span>
      <button onClick={() => (setCounter(counter + 1))}>+1</button>
    </div>
  );
}
