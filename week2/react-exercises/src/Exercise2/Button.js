import React from 'react';
import '../App.css';

const Button = ({ handelClick, text }) => {
	return (
		<div className="Friend-btn">
			<button onClick={handelClick}>{text}</button>
		</div>
	);
};

export default Button;
