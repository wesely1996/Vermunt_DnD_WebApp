import React from 'react';
import "./SideNav.css";

let shown = false;

const changeShow = () => {
	console.log(shown=!shown);
}

export default class SideNav extends React.Component {
	render(){
		shown = (this.props.alignment === "horizontal");

		return(
			<div className={`sideNav ${shown ? 'show' : "dontShow"}`}>
				<button
				className={`${shown ? 'navButtonNotShown' : 'navButton'}`}
				onClick={changeShow}
				>
					>
				</button>
				<div className={`${shown ? 'showNavigation' : 'noNavigation'}`}>
					Side NAV
				</div>
			</div>
		);
	}
}