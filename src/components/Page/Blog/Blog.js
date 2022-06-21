import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetch from '../Customize/fetch';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './Blog.scss';
import AddNewBlog from './AddNewBlog';

function Blog() {
  /*----MODAL BOOTSTRAP */
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /*----MODAL BOOTSTRAP */

  const { data: dataBlog, loading } = useFetch(
    // Sửa dataCovid = dataBlog, tham số thứ 2 của useFetch = false
    'https://jsonplaceholder.typicode.com/posts',
    false
  );

  useEffect(() => {
    if (dataBlog && dataBlog.length > 0) {
      let data = dataBlog.slice(0, 10);
      /** Cắt slice từ phần tử đầu tiên đến phần tử thứ 10 */
      setNewData(data);
    }
  }, [dataBlog]); //    Khi dataBlog thay đổi thì set lại state cho setNewData

  const handleAddNew = (blog) => {
    // nhận 1 blog mới
    let data = newData;
    data.unshift(blog); // Đẩy blog mới vào danh sách các blog đã có sẵn
    setShow(false); // Ẩn modal
    setNewData(data);
  };

  const handleDeletePost = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };

  return (
    <div>
      {/* -----------MODAL BOOTSTRAP----------------- */}

      <Button variant='primary' className='my-3' onClick={handleShow}>
        &#43; Add New Blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew} />
          {/*  Nhận 1 props handleAddNew từ <Blog/> vào cho con là <AddNewBlog/> */}
        </Modal.Body>
      </Modal>

      {/* -----------MODAL BOOTSTRAP----------------- */}

      <div className='blog-container'>
        {newData &&
          newData.length > 0 &&
          newData.map((item) => (
            <div className='single-blog' key={item.id}>
              <div className='title'>
                <span>{item.title}</span>
              </div>
              <div className='content'> {item.body}</div>
              <button>
                <Link to={`/blog/${item.id}`}>View Detail</Link>
              </button>
              <button onClick={() => handleDeletePost(item.id)}>
                Delete Post
              </button>
            </div>
          ))}

        {loading === true && <div>Loading data...</div>}
      </div>
    </div>
  );
}

export default Blog;
