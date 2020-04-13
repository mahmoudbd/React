import React from 'react';

const Joke = ({ setup, punchline }) => {
	return (
		<div>
			<p>{setup}</p>
			<p>{punchline}</p>
		</div>
	);
};

export default Joke;
