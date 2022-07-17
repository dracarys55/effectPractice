import { useState, useEffect } from 'react';
import WindowWidth from './WindowWidth';

function App() {
  const [rerource, setRerource] = useState('posts');
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${rerource}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [rerource]);
  return (
    <>
      <div className='App'>
        <button onClick={() => setRerource('posts')}>Posts</button>
        <button onClick={() => setRerource('users')}>Users</button>
        <button onClick={() => setRerource('comments')}>Comments</button>
      </div>
      <h1>{rerource}</h1>
      {item.map((item, index) => {
        if (index < 5) {
          return (
            <>
              <h3 key={index.toString()}>{index + 1}</h3>
              <p>{JSON.stringify(item)}</p>
            </>
          );
        }
        return null;
      })}
      <WindowWidth />
    </>
  );
}

export default App;
