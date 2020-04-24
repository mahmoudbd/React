import React from 'react';

const Button = ({ handelButton }) => {
	return (
		<button className="btn" type="submit" value="submit" onClick={handelButton}>
			Search
		</button>
	);
};

export default Button;
