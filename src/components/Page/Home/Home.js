import React from 'react';
import { useState } from 'react';

function Home() {
  const [state, setState] = useState('Le Han');
  const [name, setName] = useState('');

  const handleClick = () => {
    setState(name);
  };

  return (
    <div>
      <h1>Hello World with React from {state}</h1>
      <br />
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button type='submit' onClick={() => handleClick()}>
        Click me!
      </button>
    </div>
  );
}

export default Home;
