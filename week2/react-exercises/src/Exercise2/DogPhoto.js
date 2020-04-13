import React from 'react';
import '../App.css';
const DogPhoto = ({ image }) => {
	return (
		<div className="dogImg">
			<img src={image} alt="dog" />
		</div>
	);
};

export default DogPhoto;
