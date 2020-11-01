import React from 'react';
import './MainFeed.css';

class MainFeed extends React.Component {

	render(){
		const {Alignment} = this.props;

		return(
			<div className={`mf_container mf_${Alignment}`}>
				Main Feed
			</div>
		);
	}
}

export default MainFeed;