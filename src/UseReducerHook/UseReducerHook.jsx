import { useState } from "react";

export default function UseReducerHook() {

  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(prevState => prevState += 1);
        setShowText(prevState => !prevState);
      }}>Click</button>
      {showText && <p>This is some text.</p>}
    </>
  );
}

