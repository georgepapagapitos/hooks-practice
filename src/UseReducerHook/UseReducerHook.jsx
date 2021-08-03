import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'TOGGLE_SHOW_TEXT':
      return { ...state, showText: !state.showText };
    default:
      return state;
  };
}

export default function UseReducerHook() {

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true
  });

  const handleClick = () => {
    dispatch({ type: 'INCREMENT' });
    dispatch({ type: 'TOGGLE_SHOW_TEXT' })
  }

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={handleClick}>Click</button>
      {state.showText && <p>This is some text.</p>}
    </>
  );
}

