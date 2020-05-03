import React, { useState, useEffect } from 'react';
import Joke from './Joke';
import '../App.css';

const RandomJoke = () => {
	const [ joke, setJoke ] = useState({});
	const [ hasError, setError ] = useState(false);
	const [ isLoading, setLoading ] = useState(false);
	useEffect(() => {
		setLoading(true);
		const getData = async () => {
			try {
				const response = await fetch('https://official-joke-api.appspot.com/random_joke');
				const data = await response.json();
				setJoke(data);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
				setError(true);
			}
		};
		getData();
	}, []);

	return (
		<div className="Joke">
			{hasError && <h2>Something went wrong...</h2>}
			{isLoading && <h2>Loading...</h2>}
			{!hasError && <Joke setup={joke.setup} punchline={joke.punchline} />}
		</div>
	);
};

export default RandomJoke;
