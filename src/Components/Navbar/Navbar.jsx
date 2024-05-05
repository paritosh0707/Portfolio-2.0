import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="name-logo-container">
            <div className="name-logo">P</div>
            <div className="name">Paritosh Sharma</div>
            </div>
            <ul className="navbar-options">
                <li>About me</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Projects</li>
            </ul>
        
    </div>
  )
}

export default Navbar
