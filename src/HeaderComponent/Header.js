import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import tinder from "../Assets/tinder.png";
import "./Header.css";

function Header() {
	return (
		<div className='header'>
			<IconButton>
				<AccountCircleIcon />
			</IconButton>
			<img className='header_logo' src={tinder} alt='icon'></img>
			<IconButton>
				<ForumIcon fontSize='large' className='header_icon' />
			</IconButton>
		</div>
	);
}

export default Header;
