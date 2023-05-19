import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css';
import home from '../img/house.png'
import about from '../img/about.png'
import help from '../img/help.png'
export default function Navbar()
{
    return(
      <nav class="nav">
		<div class="nav__title"></div>
		<ul class="nav__list">
			<li class="nav__item"><Link to="/" id="link"><img src={home} alt=''/>Home</Link></li>
			<li class="nav__item"><Link to="/About Us" id="link"><img src={about} alt=''/>About Us</Link></li>
			<li class="nav__item"><Link to="/help" id="link"><img src={help} alt=''/>Help</Link></li>
			{/* <li class="nav__item"><Link to="/login in" id="link">login in</Link></li> */}
		</ul>
	</nav>
)
}