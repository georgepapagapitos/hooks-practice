import { useEffect, useState, useMemo } from "react";
import axios from 'axios';

export default function UseMemoHook() {

  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = '';
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log('this was computed');
    return longestName;
  }

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <>
      {getLongestName}
      <button onClick={() => setToggle(prevState => !prevState)}>Toggle</button>
      {toggle && <h1>toggle</h1>}
    </>
  )
}