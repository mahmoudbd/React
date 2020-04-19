import React from 'react';
import './App.css';
import HobbiyList from './Extreme-hobbies/HobbiyList';
import Guarantee from './Perfect-customer/PerfectCustomer';
import Delivery from './Icons/Delivery.png';
import Coin from './Icons/Coin.png';
import Chat from './Icons/Chat.png';
import Counter from './Exercise3/Exercise3';

function App() {
	return (
		<div className="App">
			<HobbiyList />
			<div className="guarant">
				<Guarantee img={Delivery} title="Free Shopping" description="Free Shopping Free Shopping" />
				<Guarantee img={Coin} title="100% Mony back" description="Free Shopping Free Shopping" />
				<Guarantee img={Chat} title="Online support 24/7" description="Free Shopping Free Shopping" />
			</div>
			<div>
				<Counter />
			</div>
		</div>
	);
}

export default App;
