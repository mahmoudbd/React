import React from 'react';
import './App.css';

function UsersList() {
	const myInfo = {
		name: 'Mahmoud Badran',
		age: 25,
		jop: 'nothing',
		active: true
	};
	const title = 'My Information';
	return (
		<div>
			<h1>{title}</h1>
			<p>Name : {myInfo.name}</p>
			<p>Age : {myInfo.age}</p>
			<p>Jop : {myInfo.jop}</p>
			<p>Active : {myInfo.active.toString()}</p>
		</div>
	);
}

export default UsersList;
