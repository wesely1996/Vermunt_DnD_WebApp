import React from 'react';
import './Header.css';

class Header extends React.Component {



	render(){
		const {Alignment, CWD} = this.props;

		return(
			<div className={`header header_${Alignment}`}>
				<div className="header_container">
					<div className="header_world_name">
						VERMUNT
					</div>
					<div className="header_world_date">
						{CWD} ME
					</div>
				</div>
			</div>);
	}

}

export default Header;