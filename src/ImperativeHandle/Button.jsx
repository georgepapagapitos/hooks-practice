import { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {

  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    handleToggle() {
      setToggle(prevState => !prevState);
    }
  }));

  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;