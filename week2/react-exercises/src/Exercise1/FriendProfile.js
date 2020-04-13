import React from 'react';

const FriendProfile = ({ props }) => {
	return (
		<ul>
			<li>First name: {props.name.first}</li>
			<li>Last name: {props.name.last}</li>
			<li>Street: {props.location.street.name}</li>
			<li> House num: {props.location.street.number}</li>
			<li>Country: {props.location.country}</li>
			<li>City: {props.location.city}</li>
			<li>Email: {props.email}</li>
			<li>Phone num: {props.phone}</li>
		</ul>
	);
};

export default FriendProfile;
