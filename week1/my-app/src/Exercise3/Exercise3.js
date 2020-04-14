import React, { useState } from './node_modules/react';

const Counter = () => {
	const [ count, setCount ] = useState(0);

	return (
		<div style={{ fontSize: '25px', border: '2px solid #000', fontWeight: '700' }}>
			<Button clickHandler={() => setCount(count + 1)} />
			<Count count={count} />
		</div>
	);
};

const Button = ({ clickHandler }) => {
	return (
		<button onClick={clickHandler} style={{ fontSize: '20px', fontWeight: '600' }}>
			Add 1 !
		</button>
	);
};

const Count = ({ count }) => {
	return count <= 10 ? (
		<p> Keep counting.... {count} </p>
	) : (
		<p style={{ color: 'red' }}> It's higher than 10! {count} </p>
	);
};

export default Counter;
