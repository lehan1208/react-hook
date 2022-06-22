import React from 'react';
import './Blog.scss';
import { useState } from 'react';
import axios from 'axios';

function AddNewBlog({ handleAddNew }) {
  // Nhận props từ cha là <Blog/>
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmitBtn = async (e) => {
    e.preventDefault();

    // if (title === '' || title === null || title === undefined)
    //   alert('Empty Title'); ===> Validate
    if (!title) {
      alert('Empty Title');
      return;
    }
    if (!content) {
      alert('Empty content');
      return;
    }

    let data = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      body: content,
      userId: Math.floor(Math.random() * 1000),
    };

    let res = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      data
    );

    if (res && res.data) {
      let newBlog = res.data;
      handleAddNew(newBlog); // Truyền blog tạo mới vào props đó rồi truyền lại sang <Blog/>
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitBtn}>
        <div className='add-new-container'>
          <div className='add-new-header'>--- Add New Blog ---</div>
          <div className='input-data'>
            <label>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className='input-data'>
            <label>Content</label>
            <input
              type='text'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <button className='add-new-btn' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddNewBlog;
