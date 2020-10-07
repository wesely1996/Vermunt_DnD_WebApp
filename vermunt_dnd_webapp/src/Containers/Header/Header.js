import React from 'react';
import {DropdownButton} from 'react-bootstrap';

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
              <input type="text" name="Search" placeholder="Search"/>
              <button>Home</button>
            </div>
          :
            <div className="buttons">
              <DropdownButton id="DropdownMenu" title="MENU">
                <button>Home</button>
                <input type="text" name="Search" placeholder="Search"/>
              </DropdownButton>
            </div>
        }
			</div>
		);
	}
}