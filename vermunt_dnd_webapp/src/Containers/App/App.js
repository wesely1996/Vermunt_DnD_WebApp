import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';
import MainFeed from '../MainFeed/MainFeed';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			window_width: 0, 
			window_height: 0 
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
		this.setState({ window_width: window.innerWidth, window_height: window.innerHeight });
	}

	render(){
		const {window_height, window_width} = this.state;
		return(
				<div className={`App ${window_width < window_height ? "App-vertical" : "App-horisontal"}`}>
					<div id="paperbg"/>
					<Header/>
					<div className="navAndFeed">
						<SideNav/>
						<MainFeed/>
					</div>
				</div>
		);
	}
}

export default App;
