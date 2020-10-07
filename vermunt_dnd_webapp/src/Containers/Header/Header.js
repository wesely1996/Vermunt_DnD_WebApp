import React from 'react';
import "./Header.css";


export default class Header extends React.Component {

	render(){
    const {alignment} = this.props;

		return (
			<div className="header" id="top_header">
				<div className="freeSpace"></div>
				<div className="title">VERMUNT</div>
        {
          alignment==="horizontal" ?
            <div className="buttons">
            </div>
          :
            <div className="buttons">
            </div>
        }
			</div>
		);
	}
}