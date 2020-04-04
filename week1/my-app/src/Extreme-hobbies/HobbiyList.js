import React from 'react';
import Hobbies from './Hobbies';
import uuid from 'uuid';
import '../App.css';

const HobbiyList = () => {
	const hobbies = [ 'Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing' ];

	return (
		<ul>
			{hobbies.map((hobby) => (
				<li className="hobbies" key={uuid()}>
					<Hobbies Props={hobby} />
				</li>
			))}
		</ul>
	);
};

export default HobbiyList;
