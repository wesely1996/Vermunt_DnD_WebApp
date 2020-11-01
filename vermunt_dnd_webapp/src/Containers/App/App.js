import React from 'react';
import './App.css';
import Header from './../../Components/Header/Header';
import TimeLine from './../TimeLine/TimeLine';
import MainFeed from './../MainFeed/MainFeed';
import Codex from './../Codex/Codex';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			alignment: "vertical",
			current_world_date: "1364",
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

	render(){
		const {alignment, current_world_date} = this.state;

		return(
				<div className="App">
					<div id="paperbg"/>
					<Header Alignment={alignment} CWD={current_world_date}/>
					<div className={`fct_container fct_container_${alignment}`}>
						<TimeLine Alignment={alignment} CWD={current_world_date}/>
						<div className={`codex_feed cf_${alignment}`}>
							<Codex Alignment={alignment}/>
							<MainFeed Alignment={alignment}/>
						</div>
					</div>
				</div>
		);
	}
}

export default App;
