import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid links">
         <div> <NavLink  to='/' className='logo'>PkTeam</NavLink></div>
           
          <div>
          <NavLink to='./login'  className="links">Login</NavLink>
          <NavLink to='./sign' className="links">SignUp</NavLink>
          <NavLink to='./detail' className="links">Details</NavLink>
          </div>

        </div>
      </nav>
    )
}

export default Header
