import './Css/section4.css';

function Section4() {
	return (
		<section id='contact' className='section4'>
			<h1>Contact</h1>
			<p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
			<h2>Catering Service, 42nd Living St, 43043 New York, NY</h2>
			<p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
			<form>
			<input type="text" placeholder='Name' required />
			<input type="number" placeholder="How many people" required />
			<input type="datetime-local"/>
			<input type="text" placeholder="Message" required />
			<button>SEND MESSAGE</button>
			</form>
		</section>
	);
}

export default Section4;
