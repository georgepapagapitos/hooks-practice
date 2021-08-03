import { useRef, useState } from "react"

export default function UseRefHook() {

  const [name, setName] = useState('George');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.value = '';
  }

  return (
    <>
      <h1>{name}</h1>
      <input type='text' placeholder='Enter your name...' onChange={handleChange} ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
    </>
  )
}