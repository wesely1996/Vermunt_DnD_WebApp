import React from 'react';
import './TimeLine.css';

class TimeLine extends React.Component {

	render(){
		const {Alignment, CWD} = this.props;

		return(
			<div className={`time_line tl_${Alignment}`}>
				{CWD}. Right now
			</div>
		);
	}

}

export default TimeLine;