import React from 'react';
import './FeedCard.css';

class FeedCard extends React.Component{

	render(){

		const {CardName, CardCont} = this.props;

		return(
			<div className={`feed_card`}>
				<div className="card_name">{CardName}</div>
				<div className="card_content">
					{CardCont}
				</div>
			</div>
		);
	}

}

export default FeedCard;