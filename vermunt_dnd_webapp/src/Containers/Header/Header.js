import React from 'react';
import {
  withStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./Header.css";

const CssTextField = withStyles({
  root: {
  	'& label': {
  		color: 'white',
  	},
  	'&:hover label': {
  		color: 'goldenrod',
  	},
    '& label.Mui-focused': {
      color: 'goldenrod',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'goldenrod',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'goldenrod',
      },
      '& input': {
      	color: 'white',
      },
    },
  },
})(TextField);

export default class Header extends React.Component {

	render(){
		return (
			<div className={`header`}>
				<div className="freeSpace"></div>
				<div className="title">VERMUNT</div>
				<form className="buttons" noValidate autoComplete="off">
					<CssTextField
		        	label="Search"
		        	variant="outlined"
		        	id="custom-css-outlined-input"
			     	/>
					<Button id="homeButton">HOME</Button>
				</form>
			</div>
		);
	}
}