import React from 'react';
import './MainFeed.css';
import FeedCard from './../../Components/FeedCard/FeedCard';

class MainFeed extends React.Component {

	render(){
		const {Alignment, FeedContent} = this.props;

		return(
			<div className={`mf_container mf_${Alignment}`}>
				{
					FeedContent.map((card, key)=>(<FeedCard key={key} CardName={card.name} CardCont={card.cont}/>))
				}
			</div>
		);
	}
}

export default MainFeed;