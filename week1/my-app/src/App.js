import React from 'react';
import './App.css';
import HobbiyList from './Extreme-hobbies/HobbiyList';
import Guarantee from './Perfect-customer/PerfectCustomer';
import Icon1 from './Icons/f-delivery.png';
import Icon2 from './Icons/coin.png';
import Icon3 from './Icons/chat.png';
import Counter from './exercise3/Exercise3';

function App() {
	return (
		<div className="App">
			<HobbiyList />
			<div>
				<Guarantee img={Icon1} title="Free Shopping" description="Free Shopping Free Shopping" />
				<Guarantee img={Icon2} title="100% Mony back" description="Free Shopping Free Shopping" />
				<Guarantee img={Icon3} title="Online support 24/7" description="Free Shopping Free Shopping" />
			</div>
			<div>
				<Counter />
			</div>
		</div>
	);
}

export default App;
