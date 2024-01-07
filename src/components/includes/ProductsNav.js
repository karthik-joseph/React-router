import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';

export default function ProductsNav() {
  return (
    <>
        <div className='products-nav'>
            <ul>
                <li>
                    <NavLink to="all" className={({isActive})=> isActive ? "active" : ""}>All</NavLink>
                </li>
                <li>
                    <NavLink to="fashion" className={({isActive})=> isActive ? "active" : ""} >Fashion</NavLink>
                </li>
                <li>
                    <NavLink to="electronics" className={({isActive})=> isActive ? "active" : ""}>Electronics</NavLink>
                </li>
            </ul>
        </div>
        <Outlet />
    </>
  )
}
