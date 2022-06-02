import React from 'react';

export const List = ({ todoItems, setTodoItems }) => {
	const handleDeleteItem = (event) => {
		event.preventDefault();
		const orderOfItemToBeDeleted = parseInt(event.target.getAttribute("order"));
		console.log(`The order of item to be delted in state is: ${orderOfItemToBeDeleted}`);
		console.log("please delete me!");
		const filteredItems = todoItems.filter((x, i) => i !== orderOfItemToBeDeleted);
		// console.log(filteredItems);
		setTodoItems(filteredItems);
	};

	const list = todoItems.map((element, index) => 
		<li key={index}>
			{element}
			<button order={index} onClick={handleDeleteItem} 
			style={{
		display: "flex",
		flexDirection: "rows",
		marginLeft:"auto",
		alignItems: "center",
		width: "100%",
		margin: "0px",
		backgroundColor:" rgb(255,255,255)",
		opacity: "0.8",
		fontFamily: "Papyrus",
		fontSize:"50%",
	  }}>delete</button>
		</li>);

	return <ul style={{
		display: "flex",
		flexDirection: "column",
		marginLeft:"auto",
		marginRight:"auto",
		alignItems: "center",
		width: "80%",
		margin: "30px",
		backgroundColor:" rgb(255,255,255)",
		opacity: "0.8",
		fontFamily: "Papyrus",
		fontSize:"300%",
	  }}>{list}</ul>;
};
