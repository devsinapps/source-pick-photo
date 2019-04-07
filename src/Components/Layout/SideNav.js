import React from 'react'
//tools
import { Link } from 'react-router-dom'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export class SideNav extends React.Component{
	sidenavSlider = (e)  =>{
		const Menu_SideNav = document.getElementsByClassName('Menu_SideNav')[0];
		const Transparent = document.getElementsByClassName('Transparent')[0];
			  Menu_SideNav.classList.toggle('Menu_SideNav_Slider');
			  Transparent.classList.toggle('Transparent_Slider')
	}
	render(){
		return(
			<div className='SideNav'>
				<div className='Transparent' onClick={this.sidenavSlider}>
				</div>
				<div className='Menu_SideNav'>
					<ul>
						<li> <p> About Developer </p> </li>
						<li> 
							<a href='https://www.instagram.com/sierraeska/' target="__blank">
								<FontAwesomeIcon icon={['fab', 'instagram']} />
							</a>
							<a href='https://www.facebook.com/sandy.kurniawan.9028' target="__blank">
								<FontAwesomeIcon icon={['fab', 'facebook']} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
