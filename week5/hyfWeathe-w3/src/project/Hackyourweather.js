import React, { useState } from 'react';
import Infoweather from './Infoweather';
import Button from './Button';
import Search from './Search';
import Recharts from './Recharts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const APIKEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const Hackyourweather = () => {
	const [ cities, setCities ] = useState([]);
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
				const listItems = cities.filter((item) => item.id !== data.id);
				setCities([ data, ...listItems ]);
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
	const deleteItem = (id) => {
		const filterd = cities.filter((city) => city.id !== id);
		setCities(filterd);
	};

	return (
		<Router>
			<div className="main-div">
				<h1>Weather</h1>
				<Switch>
					<Route exact path="/">
						<h3 className="message">{message}</h3>
						<form className="btn2">
							<Search handelSearch={handelSearch} />
							<Button handelButton={handelButton} />
						</form>

						{error && <h2 className="message">{error}</h2>}
						{isLoading && <h1> Loading...</h1>}
						<ul>
							{cities.map((city) => <Infoweather props={city} key={city.id} deleteItem={deleteItem} />)}
						</ul>
					</Route>
					<Route path="/:id">
						<Recharts />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Hackyourweather;
