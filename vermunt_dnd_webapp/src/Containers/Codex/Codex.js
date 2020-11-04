import React from 'react';
import './Codex.css';
import Button from 'react-bootstrap/Button';
import sword from './winged_sword.png'

class Codex extends React.Component {

	render(){
		const {Alignment} = this.props;

		return(
			<div className={`codex_container codex_container_${Alignment}`}>
				<div className="codex_name">CODEX:</div>
				<Button type='button' className='codex_button'>
					<img className="sword_image" src={sword} alt=">"/>NPC</Button>
				<Button type='button' className='codex_button'>
					<img className="sword_image" src={sword} alt=">"/>PC</Button>
				<Button type='button' className='codex_button'>
					<img className="sword_image" src={sword} alt=">"/>Maps</Button>
				<Button type='button' className='codex_button'>
					<img className="sword_image" src={sword} alt=">"/>Events</Button>
				<Button type='button' className='codex_button'>
					<img className="sword_image" src={sword} alt=">"/>Items</Button>
				<Button type='button' className='codex_button'>
					<img className="sword_image" src={sword} alt=">"/>General Information</Button>
				<Button type='button' className='codex_button'>
					<img className="sword_image" src={sword} alt=">"/>Generators</Button>
				<Button type='button' className='codex_button'>
					<img className="sword_image" src={sword} alt=">"/>Homebrew Rules</Button>
				<div className={`pusher_${Alignment}`}></div>
			</div>
		);
	}
}

export default Codex;