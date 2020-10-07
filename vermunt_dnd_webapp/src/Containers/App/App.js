import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';
import MainFeed from '../MainFeed/MainFeed';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			alignment: "vertical",
			page:"home",
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

	changePage(nextPage){
		this.setState({page: nextPage});
	}

	render(){
		const {alignment, page} = this.state;

		return(
				<div className="App">
					<div id="paperbg"/>
					{
						page==="home" ? 
						<div>
							<Header alignment={alignment}/>
							<div className="navAndFeed">
								<SideNav alignment={alignment}/>
								<MainFeed alignment={alignment}/>
							</div>
						</div>
						:
						page==="login" ? 
						<div>
							LOGIN
						</div>
						:
						<div>
							ERROR
						</div>
					}
				</div>
		);
	}
}

export default App;
