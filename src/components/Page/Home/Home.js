import React from 'react';
import { useState } from 'react';
import './Home.scss';

function Home() {
  const [state, setState] = useState('Le Han');
  const [name, setName] = useState('');

  const handleClick = () => {
    setState(name);
  };

  return (
    <div className='home-container'>
      <h1>Hello World with React from {state}</h1>
      <br />
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button
        className='change-btn'
        type='submit'
        onClick={() => handleClick()}
      >
        Click me!
      </button>
    </div>
  );
}

export default Home;
