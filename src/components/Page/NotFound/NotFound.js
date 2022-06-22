import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  let navigate = useNavigate();
  const handleClickBtn = () => {
    navigate('/');
  };
  return (
    <div className='not-found-container'>
      <h4>This Page Isn't Available</h4>
      <h5>
        This link may be broken, or the page may have been removed. Check the
        link your are trying to open is correct
      </h5>
      <button className='btn btn-primary' onClick={handleClickBtn}>
        Go to News Feed
      </button>
    </div>
  );
}

export default NotFound;
