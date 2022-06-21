import React from 'react';
import { useEffect, useState } from 'react';

function Countdown({ onTimesUp }) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      //   onTimesUp();
      return;
    }

    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div>Countdown: {count}</div>;
}

export default Countdown;
