import React, { useState } from 'react';
import '../App.css';
import FriendProfile from './FriendProfile';
import Button from './Button';

const Friend = () => {
	const [ friend, setFriend ] = useState();
	const [ isLoadin, setLoading ] = useState(true);
	const [ hasError, setError ] = useState(false);
	const getFriend = () => {
		fetch('https://www.randomuser.me/api?results=1')
			.then((res) => res.json())
			.then((data) => {
				setFriend(data.results[0]);
				setLoading(false);
			})
			.catch((err) => {
				console.log('error', err);
				setError(true);
				setLoading(false);
			});
	};
	return (
		<div className="Friend">
			<Button handleButton={getFriend} />
			{isLoadin && <p>New friend on demand by clicking the button!</p>}
			{!hasError && friend && <FriendProfile props={friend} />}
			{hasError && <p>Somthing went wrong</p>}
		</div>
	);
};

export default Friend;
