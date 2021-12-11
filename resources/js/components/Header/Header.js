import { Link } from 'react-router-dom'
import React from 'react'
const Header = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-primary'>
      <div className='nav navbar-nav'>
        <Link className='nav-item nav-link active' to='/'>
          Home <span className='sr-only' />
        </Link>
        <Link className='nav-item nav-link' to='/persoanlLoanProfileing'>
          App
        </Link>
      </div>
      <div className='h2 text-white'>SAI DEVS</div>
    </nav>
  )
}

export default Header
