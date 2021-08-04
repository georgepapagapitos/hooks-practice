import { useRef } from "react";
import Button from "./Button";

export default function ImperativeHandle() {

  const buttonRef = useRef(null);

  return (
    <>
      <button onClick={() => { buttonRef.current.handleToggle() }}>Button From Parent</button>
      <Button ref={buttonRef} />
    </>
  )
}