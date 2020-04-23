import React, { useState } from 'react';
import Infoweather from './Infoweather';
import Button from './Button';
import Search from './Search';

const APIKEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const Hackyourweather = () => {
	const [ cities, setCities ] = useState();
	const [ message, setMessage ] = useState(' No cities searched for yet... ');
	const [ isLoading, setLoading ] = useState(false);
	const [ error, setError ] = useState('');
	const [ inputValue, setInputValue ] = useState('');

	const getCity = async (city) => {
		setLoading(true);
		setMessage('');
		try {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
			if (response.ok) {
				const data = await response.json();
				setCities(data);
				setLoading(false);
				setError('');
			} else {
				setError('City name not found...');
				setLoading(false);
			}
		} catch (err) {
			console.log(err);
			setError('Something went wrong...');
		}
	};

	const handelSearch = (e) => {
		setInputValue(e.target.value);
	};
	const handelButton = (e) => {
		e.preventDefault();
		getCity(inputValue);
	};

	return (
		<div>
			<h1>Weather</h1>
			<h3>{message}</h3>
			<form className="btn2">
				<Search handelSearch={handelSearch} />
				<Button handelButton={handelButton} />
			</form>

			{error && <h2>{error}</h2>}
			{isLoading && <h1> Loading...</h1>}
			{cities && <Infoweather props={cities} />}
		</div>
	);
};

export default Hackyourweather;
