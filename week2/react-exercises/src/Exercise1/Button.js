import React from 'react';

const Button = ({ handleButton }) => {
	return (
		<div>
			<button onClick={handleButton}>Get a friend! </button>
		</div>
	);
};

export default Button;
