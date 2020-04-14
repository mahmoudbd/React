import React, { useState, useEffect } from 'react';
import Infoweather from './Infoweather';
import Button from './Button';
import Search from './Search';

const APIKEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const Hackyourweather = () => {
	const [ state, setState ] = useState('');
	const [ city, setCity ] = useState('Damascus');
	const [ isLoading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);
	const [ Value, setValue ] = useState('');

	useEffect(
		() => {
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
				.then((res) => res.json())
				.then((data) => {
					setState(data);
					setLoading(false);
				})
				.catch((err) => {
					console.log('error', err);
					setError(true);
					setLoading(false);
				});
		},
		[ city ]
	);
	const handelSearch = (e) => {
		setValue(e.target.value);
	};
	const handleButton = () => {
		setCity(Value);
	};

	return (
		<div>
			{error && <h1>Something went wrong</h1>}
			{isLoading && <h1>{isLoading && 'Loading...'}</h1>}
			<h1>Weather</h1>
			<div className="btn2">
				<Search handelSearch={handelSearch} />
				<Button handelButton={handleButton} />
			</div>
			{state && (
				<Infoweather
					name={state ? state.name : ''}
					country={state.sys ? state.sys.country : <h3> No cities searched for yet</h3>}
					main={state.weather ? state.weather[0].main : ''}
					description={state.weather ? state.weather[0].description : ''}
					minTemp={state.main ? state.main.temp_min : ''}
					maxTemp={state.main ? state.main.temp_max : ''}
					lat={state.coord ? state.coord.lat : ''}
					lon={state.coord ? state.coord.lon : ''}
				/>
			)}
		</div>
	);
};

export default Hackyourweather;
