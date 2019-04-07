import React from 'react'
//reactstrap
import { Button } from 'reactstrap'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export class TopNav extends React.Component{
	sidenavSlider = (e)  =>{
		const Menu_SideNav = document.getElementsByClassName('Menu_SideNav')[0];
		const Transparent = document.getElementsByClassName('Transparent')[0];
			  Menu_SideNav.classList.toggle('Menu_SideNav_Slider');
			  Transparent.classList.toggle('Transparent_Slider')
	}
	render(){
		return(
			<div className="TopNav">
				<div className='Menu'>
					<ul>
						<li> <a> <span> Pick </span> Photo </a> </li>
					</ul>
					<div className='btnNav'>
						<Button onClick={this.sidenavSlider}nCl> 
							<FontAwesomeIcon icon='bars' />
						</Button>
					</div>
				</div>
			</div>
		)
	}
}
