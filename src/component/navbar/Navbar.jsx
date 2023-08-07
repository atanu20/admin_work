import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import Avatar from 'react-avatar'
const Navbar = () => {

  const logout = () => {
    
    localStorage.removeItem('user_login');
    console.clear();
    window.location.href = '/login';
  };
  return (
    <>
    
    <div className="whole_box fixed-top">
      <div className="inn_box">
          <NavLink to="/">
            Admin
          </NavLink>
          <div>
          <Avatar name="Atanu Jana" size="40" round={true} />
          <div className='text_box'>
            <p className='m-0 text_user'>Hi, User</p>
            <p className='m-0 smm_text cur' onClick={logout}>Logout</p>
          </div>

          </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Navbar