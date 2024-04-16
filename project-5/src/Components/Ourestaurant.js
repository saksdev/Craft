import React from 'react'
import '../Css/Ourestaurant.css'
import Shop from '../img/about.png';
function Ourestaurant() {
	return (
		<section>
			<div className='section4'>
				<div className='about'>
					<div className='title'>
						<h2>Story</h2>
						<h1>Our Restaurant</h1>
						<h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ut aliquam exercitationem, pariatur, eos, enim a
							laudantium quisquam minus maiores harum iusto suscipit nostrum beatae aspernatur nesciunt illo repudiandae ullam.
						</h5>
						<a className='btn' href=''>Read More</a>
					</div>
				</div>
				<div className='image'>
					<img src={Shop} alt='Shop' />
				</div>
			</div>
		</section>
	)
}

export default Ourestaurant