import React from 'react';
import '../App.css';

const Guarantee = ({ img, title, description }) => {
	return (
		<div style={{ display: 'inline-block', padding: '15px', width: '28%' }}>
			<img src={img} alt={'title'} />
			<h4>{title}</h4>
			<p>{description}</p>
		</div>
	);
};

export default Guarantee;
