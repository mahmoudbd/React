import React from 'react';

const Button = ({ handelButton }) => {
	return (
		<div className="btn">
			<button type="submit" value="submit" onClick={handelButton}>
				Search
			</button>
		</div>
	);
};

export default Button;
