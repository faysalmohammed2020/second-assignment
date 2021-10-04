import React from 'react';
import { NavLink } from 'react-router-dom';
import'./Header.css';

const Header = () => {
    
    return (
        <div className="Header">
        <div className="logo">
            <h1>WebBee Institute</h1>
        </div>
        <div className="navbar">
        <nav className="navigation-bar">
      <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/Home">Home</NavLink>
      <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
to="/Service">Service</NavLink>
      <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
to="/About">About</NavLink>
      <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
to="/Contact">Contact</NavLink>
            </nav>
        </div>
        </div>
    );
};

export default Header;