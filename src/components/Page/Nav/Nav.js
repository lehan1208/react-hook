import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='topnav'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/todo'>Todo</NavLink>
      <NavLink to='/countdown'>Timer App</NavLink>
      <NavLink to='/blog'>Blog App</NavLink>
      <NavLink to='/covid'>Covid</NavLink>
    </div>
  );
};

export default Nav;
