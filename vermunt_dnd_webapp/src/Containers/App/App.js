import React from 'react';
import './App.css';
import Header from './../../Components/Header/Header';
//import TimeLine from './../TimeLine/TimeLine';
import MainFeed from './../MainFeed/MainFeed';
import Codex from './../Codex/Codex';

import {CardData} from './CardData';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			alignment: "vertical",
			current_world_date: "1364",
			feed_content_type: "all",
			feed_content: CardData,
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ alignment: window.innerWidth > (1.3 * window.innerHeight) ? "horizontal" : "vertical" });
	}

	changeContent = (newContent) => {
		this.setState({ feed_content_type: newContent});
	}

	render(){
		const {alignment, current_world_date, feed_content_type, feed_content} = this.state;

		return(
				<div className="App">
					<div id="paperbg"/>
					<Header Alignment={alignment} CWD={current_world_date}/>
					<div className={`fct_container fct_container_${alignment}`}>
						<div className={`codex_feed cf_${alignment}`}>
							<Codex Alignment={alignment} changeContent={this.changeContent}/>
							<MainFeed Alignment={alignment} FeedContent={feed_content}/>
						</div>
					</div>
				</div>
		);
	}
}

export default App;
