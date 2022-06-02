import React from 'react';

export const Input = ({ todoItems, setTodoItems }) => {
	const handleKeyDown = (event) => {
		if(event.key === "Enter") {
			event.preventDefault();
			const newTodoItems = [...todoItems, event.target.value];
			setTodoItems(newTodoItems);

			event.target.value = '';
		}
	};

	return <input type="text" onKeyDown={handleKeyDown} style={{
		display: "flex",
		flexDirection: "column",
		marginLeft:"auto",
		marginRight:"auto",
		alignItems: "right",
		width: "60%",
		margin: "30px",
		backgroundColor:" rgb(236, 227, 147)",
		opacity: "0.8",
		fontFamily: "Papyrus",
		fontSize:"300%",
	  }}/>
};
