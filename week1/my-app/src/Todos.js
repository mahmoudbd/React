import React from 'react';
import './App.css';

function Todos() {
	const todos = [
		{
			id: 1,
			title: ' Take out the trash',
			completed: true
		},
		{
			id: 2,
			title: '  the trash',
			completed: false
		},
		{
			id: 3,
			title: '  out the trash',
			completed: true
		}
	];

	return (
		<div>
			{todos.map((todo) => (
				<p>
					<p>{todo.id}</p>
					<p>{todo.title}</p>
					<p>{todo.completed.toString()}</p>
				</p>
			))}
		</div>
	);
}

export default Todos;
