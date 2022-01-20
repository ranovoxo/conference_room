import React from "react";
import './Footer.css';
import { NavLink as Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Footer = () => (

  <div className="footer">

	<ul className="links">

		<p className="home">
			<Link to="/"> 
			<Button className="home-button"> Home</Button>
			</Link>
		</p>
		<p className="contact">Contact Us</p>
		<p className="about">About Us</p>
	</ul>
  </div>
);

export default Footer; 