import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../Customize/fetch';
import './Blog.scss';

function DetailBlog() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { data: dataBlogDetail, loading } = useFetch(
    // Sửa dataCovid = dataBlogDetail, tham số thứ 2 của useFetch = false
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    false
  );

  const handleBackBlog = () => {
    navigate('/blog');
  };

  return (
    <>
      <div>
        <span onClick={handleBackBlog}>&larr; Back</span>
      </div>
      {loading === true ? (
        'Loading data...'
      ) : (
        <div className='blog-detail'>
          <div className='title'>{dataBlogDetail.title}</div>
          <div className='content'>{dataBlogDetail.body}</div>
        </div>
      )}
    </>
  );
}

export default DetailBlog;
