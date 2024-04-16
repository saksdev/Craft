import React from 'react';
import '../Css/home.css';

function home() {
	return (
		<section>
			<div id='home'>
				<div class='content'>
					<h1>Eat, drink and Enjoy.</h1>
					<h4>Your Restaurant is Waiting For You.</h4>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Quo ratione molestias totam error temporibus.</p>
					<div className='home-btns'>
						<a className='btn' href=''>Explore</a>
						<a href=''><b>See Menu</b></a>
					</div>
				</div>
			</div>
			<div className='booktable'>
				<h4>Book a Table &rarr;	</h4>
				<div className='tabledate'>
					{/* <label htmlFor='date'>Date
								<svg viewBox="0 0 24 24">
									<path d="M21.71,8.21l-9,9a1,1,0,0,1-1.42,0l-9-9A1,1,0,1,1,3.71,6.79L12,15.09l8.29-8.3a1,1,0,1,1,1.42,1.42Z" data-name="20 Down Arrow"></path>
								</svg>
							</label>
						<input id='date' type='date' placeholder='2001-12-01' />
						<label>Date
							<svg viewBox="0 0 24 24">
								<path d="M21.71,8.21l-9,9a1,1,0,0,1-1.42,0l-9-9A1,1,0,1,1,3.71,6.79L12,15.09l8.29-8.3a1,1,0,1,1,1.42,1.42Z" data-name="20 Down Arrow"></path>
							</svg>
						</label>
						<input type='time' placeholder='12:00' />
						<label>Date
							<svg viewBox="0 0 24 24">
								<path d="M21.71,8.21l-9,9a1,1,0,0,1-1.42,0l-9-9A1,1,0,1,1,3.71,6.79L12,15.09l8.29-8.3a1,1,0,1,1,1.42,1.42Z" data-name="20 Down Arrow"></path>
							</svg>
						</label>
						<input type='email' required /> */}
				</div>
			</div>
		</section>
	);
}

export default home;