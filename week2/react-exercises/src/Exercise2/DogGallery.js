import React, { useState } from 'react';
import Button from './Button';
import '../App.css';
import DogPhoto from './DogPhoto';

const DogGallery = () => {
	const [ dogPhotos, setDogPhotos ] = useState([]);
	const [ isLoading, setLoading ] = useState(true);
	const [ hasError, setError ] = useState(false);

	function getDogPhoto() {
		fetch(`https://dog.ceo/api/breeds/image/random`)
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setDogPhotos([ ...dogPhotos, data.message ]);
			})
			.catch((err) => {
				console.log('error', err);
				setError(true);
				setLoading(false);
			});
	}

	return (
		<div>
			<Button handelClick={getDogPhoto} text="Get a dog!" />
			{isLoading && (
				<p style={{ fontWeight: '600', paddingLeft: '10px' }}>Get your first dog by clicking the button!</p>
			)}
			{!hasError && dogPhotos.map((dogPhoto) => <DogPhoto image={dogPhoto} />)}
			{hasError && <p>Somthing went wrong</p>}
		</div>
	);
};

export default DogGallery;
