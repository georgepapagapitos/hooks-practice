import { useEffect, useLayoutEffect, useRef } from "react"

export default function UseLayoutEffectHook() {

  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log(inputRef.current.value = 'HELLO');
  }, []);

  return (
    <>
      <input ref={inputRef} defaultValue='GEORGE' style={{ width: 400, height: 50 }} />
    </>
  );
}