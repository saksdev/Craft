import './App.css';
import Nav from './Components/nav.js';
import Home from './Components/home.js';
import Categories from './Components/Categories.js';
import CovidSafety from './Components/CovidSafety.js';
import OurRestaurant from './Components/Ourestaurant.js'

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Categories />
      <CovidSafety />
      <OurRestaurant />
    </>
  );
}

export default App;
