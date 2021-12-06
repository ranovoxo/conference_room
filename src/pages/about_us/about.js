import React from 'react';
import './about.css'
import logo from '../images/conf-call.jpg'; 

const About = () => {
return (
	<>
	<div>
	<h1 className='about-title'>About Us</h1>
	</div>
	<div className='square'>
		<div>
			<img className='Logo' src={logo} alt="Logo" />
		</div>
		<p className='about-p'>The Confrence Room was created in 2021. The idea was to give a 
		conference room like feel to buisness with employees working from home. Conference room allows for up to six video calls</p>
	</div>
	</>
);
};

export default About;

