import React from 'react';
import '../Css/categories.css';
import Meat from '../img/meat.png';
import Fish from '../img/fish.png';
import Drink from '../img/drink.png';

function Categories() {
	return (
		<section id='categories'>
			<div className='section-title'>
				<h2>Delicious</h2>
				<h1>Food Categories</h1>
			</div>
			<div className='items'>
				<div className='items-box'>
					<span className='item-circle'><img className='image-circle' src={Meat} alt='Meat' title='Eat Meat' /></span>
					<h1>Meat</h1>
					<h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Quo ratione molestias totam error temporibus.</h5>
					<a className='btn' href='/meat'>Read More</a>
				</div>
				<div className='items-box'>
					<span className='item-circle'><img className='image-circle' src={Fish} alt='Fish' title='Eat Fish' /></span>
					<h1>Fish</h1>
					<h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Quo ratione molestias totam error temporibus.</h5>
					<a className='btn' href='/fish'>Read More</a>
				</div>

				<div className='items-box'>
					<span className='image-drink'><img src={Drink} alt='Drink' title='Drink' /></span>
					<h1>Drink</h1>
					<h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Quo ratione molestias totam error temporibus.</h5>
					<a className='btn' href='/drink'>Read More</a>
				</div>
			</div>
		</section>
	)
}

export default Categories;
