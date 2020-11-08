import React from 'react';
import './Codex.css';
import Button from 'react-bootstrap/Button';
import sword from './winged_sword.png'

class Codex extends React.Component {

	render(){
		const {Alignment, changeContent} = this.props;

		return(
			<div className={`codex_container codex_container_${Alignment}`}>
				<Button type='button' className="codex_name" onClick={()=>changeContent("all")}>
					CODEX:</Button>
				<Button type='button' className='codex_button' onClick={()=>changeContent("npc")}>
					<img className="sword_image" src={sword} alt=">"/>NPC</Button>
				<Button type='button' className='codex_button' onClick={()=>changeContent("pc")}>
					<img className="sword_image" src={sword} alt=">"/>PC</Button>
				<Button type='button' className='codex_button' onClick={()=>changeContent("maps")}>
					<img className="sword_image" src={sword} alt=">"/>Maps</Button>
				<Button type='button' className='codex_button' onClick={()=>changeContent("events")}>
					<img className="sword_image" src={sword} alt=">"/>Events</Button>
				<Button type='button' className='codex_button' onClick={()=>changeContent("items")}>
					<img className="sword_image" src={sword} alt=">"/>Items</Button>
				<Button type='button' className='codex_button' onClick={()=>changeContent("general_info")}>
					<img className="sword_image" src={sword} alt=">"/>General Info</Button>
				<Button type='button' className='codex_button' onClick={()=>changeContent("generators")}>
					<img className="sword_image" src={sword} alt=">"/>Generators</Button>
				<Button type='button' className='codex_button' onClick={()=>changeContent("house_rules")}>
					<img className="sword_image" src={sword} alt=">"/>House Rules</Button>
				<div className={`pusher_${Alignment}`}></div>
			</div>
		);
	}
}

export default Codex;