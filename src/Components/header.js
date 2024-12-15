import './Css/header.css';

function Header() {
	return(
	<nav>
		<a href="/">Website Name</a>
		<span>
			<li><a href='#about'>About</a></li>
			<li><a href='#menu'>Menu</a></li>
			<li><a href='#contact'>Contact</a></li>
		</span>
	</nav>
	);
}

export default Header;
