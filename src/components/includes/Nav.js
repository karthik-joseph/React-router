import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav-container">
        <h1>Logo</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>about</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>contact</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/students'>students</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
