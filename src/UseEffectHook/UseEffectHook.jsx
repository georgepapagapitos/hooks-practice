import { useEffect, useState } from "react";
import axios from 'axios';

export default function UseEffectHook() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setData(response.data)
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchComments();
  }, []);

  return (
    <>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
    </>
  )
}