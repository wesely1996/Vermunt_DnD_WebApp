import React from 'react';
import './Codex.css';

class Codex extends React.Component {

	render(){
		const {Alignment} = this.props;

		return(
			<div className={`codex_container codex_container_${Alignment}`}>
				<div>CODEX:</div>
				<div>1. NPC</div>
				<div>2. PC</div>
				<div>3. Maps</div>
				<div>4. Events</div>
				<div>5. Items</div>
				<div>6. General Information</div>
				<div className={`pusher_${Alignment}`}></div>
			</div>
		);
	}
}

export default Codex;