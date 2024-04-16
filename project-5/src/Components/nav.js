import '../Css/nav.css';
import Menu from '../img/menu.png';

function nav() {
	return (
		<header>
			<nav>
				<ul>
					<li><a href="/">Your Logo</a></li>
				</ul>
				<ul className='menu-list'>
					<li><a href="/" target="">Home</a></li>
					<li><a href="/" target="">Menu</a></li>
					<li><a href="/" target="">About Us</a></li>
					<li><a href="/" target="">Contact</a></li>
				</ul>
				<ul className='authentication'>
					<li><a href="">Log In</a></li>
					<li><a href="">Sign Up</a></li>
				</ul>
				<span className='menu'><img src={Menu} /></span>
			</nav>
		</header>
	);
}

export default nav;