import React from 'react';
import '../Css/nav.css';
import Menu from '../img/menu.png';

function Nav() {
	return (
		<header>
			<nav>
				<ul>
					<li>Your Logo</li>
				</ul>
				<ul className='menu-list'>
					<li><a href="#">Home</a></li>
					<li><a href="/menu">Menu</a></li>
					<li><a href="/about">About Us</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
				<ul className='authentication'>
					<li><a href="/login">Log In</a></li>
					<li><a href="/signup">Sign Up</a></li>
				</ul>
				<span className='menu'><img src={Menu} alt="Menu" /></span>
			</nav>
		</header>
	);
}

export default Nav;
