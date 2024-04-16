import React from 'react';
import '../Css/home.css';

function Home() {
	return (
		<section>
			<div id='home'>
				<div className='content'>
					<h1>Eat, drink and Enjoy.</h1>
					<h4>Your Restaurant is Waiting For You.</h4>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Quo ratione molestias totam error temporibus.</p>
					<div className='home-btns'>
						<a className='btn' href='#explore'>Explore</a>
						<a href='#menu'><b>See Menu</b></a>
					</div>
				</div>
			</div>
			<div className='booktable'>
				<h4>Book a Table &rarr;</h4>
				<div className='tabledate'>
				</div>
			</div>
		</section>
	);
}

export default Home;
