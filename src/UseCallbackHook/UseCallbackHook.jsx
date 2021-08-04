import { useCallback, useState } from 'react';
import Child from './Child';

function UseCallbackHook() {

  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('some comment');

  const returnComment = useCallback((name) => {
    return data + name;
  }, [data]);

  return (
    <div>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(prevState => !prevState)}>toggle</button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default UseCallbackHook
