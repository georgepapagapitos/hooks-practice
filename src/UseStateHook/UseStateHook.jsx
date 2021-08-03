import { useState } from "react";

export default function UseStateHook() {

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Function that increases count by 1
  const increment = () => {
    setCount(prevState => prevState += 1);
  }

  // Function that decreases count by 1
  const decrement = () => {
    setCount(prevState => prevState -= 1);
  }

  // Function that sets count to 0
  const zero = () => {
    setCount(0);
  }

  // Function that handles input value change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <div>
        <h1>
          {count}
        </h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={zero}>Zero</button>
      </div>
      <div>
        <input type='text' placeholder='Enter some text...' onChange={handleChange} />
        <h2>{inputValue}</h2>
      </div>
    </>
  );
}