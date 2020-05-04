import React from 'react';
import '../App.css';

const Guarantee = ({ img, title, description }) => {
	return (
		<div className="guarantee">
			<img src={img} alt="" />
			<h4>{title}</h4>
			<p>{description}</p>
		</div>
	);
};

export default Guarantee;
