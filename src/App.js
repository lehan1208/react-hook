import logo from './logo.svg';
import './App.scss';
import Nav from './components/Page/Nav/Nav.js';
import Covid from './components/Page/Covid/Covid';
import Countdown from './Countdown';
import Home from './components/Page/Home/Home';
import Todo from './components/Page/Todo/Todo';
import Blog from './components/Page/Blog/Blog';
import DetailBlog from './components/Page/Blog/DetailBlog';
import AddNewBlog from './components/Page/Blog/AddNewBlog';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const onTimesUp = () => {
    alert('Times-up!!!');
  };
  return (
    <Router>
      <div className='App'>
        <Nav />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/todo' element={<Todo />} />
            <Route
              path='/countdown'
              element={<Countdown onTimesUp={onTimesUp} />}
            />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<DetailBlog />} />
            <Route path='/add-new-blog' element={<AddNewBlog />} />
            <Route path='/covid' element={<Covid />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default App;
