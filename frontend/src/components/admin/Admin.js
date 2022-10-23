import React from 'react';
import {NavLink, Outlet} from 'react-router-dom'
import './admin.css';

const Admin = () => {
  return (
    <div className='portal'>
      <Outlet/>
<NavLink className='active-portal' to='login'><button className='portal-button'>Login</button></NavLink>
<NavLink className='active-portal' to='register'><button className='portal-button'>Sign up</button></NavLink>
    </div>
  )
}

export default Admin