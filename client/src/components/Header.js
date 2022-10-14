import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    setTimeout(function () {
        document.body.className = "";
    }, 500);
    return (
    <header className="header">
        <div className="content-container">
            <h1 className="header__title">Banking System</h1>
            <div className={
                    isNavExpanded ? "header__navbar expanded" : "header__navbar"
             }>
                <div><NavLink className={({ isActive }) => isActive ? 'is-active' : 'not-active'} to='/' end>Home</NavLink></div>
                <div><NavLink className={({ isActive }) => isActive ? 'is-active' : 'not-active'} to='/customers'>View All Customers</NavLink></div>
                <div><NavLink className={({ isActive }) => isActive ? 'is-active' : 'not-active'} to='/all-transfers'>Transfers History</NavLink></div>
                <div><NavLink className={({ isActive }) => isActive ? 'is-active' : 'not-active'} to='/about'>About</NavLink></div>
           
            </div>
        </div>
        <button 
         className="hamburger"
         onClick={() => {
             setIsNavExpanded(!isNavExpanded);
            }}
         >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
            >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    </header>
    )
}

export default Header
