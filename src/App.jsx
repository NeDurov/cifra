import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form/Fom";
import Header from "./components/Header/Header.jsx";
import ListOfItems from "./components/listOfItems/ListOfItems";
import Modal from "./components/modal/Modal";

function App() {
	const [items, setItems] = useState([
		{
			id: 1,
			title: "Headphones",
			price: "10.00",
			date: "11.01.2021 10:00:00",
		},
		{ id: 2, title: "Mouse", price: "15.20", date: "12.01.2021 15:01:00" },
		{
			id: 3,
			title: "Keyboard",
			price: "9.99",
			date: "12.01.2021 10:00:10",
		},
	]);

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		setItems(JSON.parse(window.localStorage.getItem("items") || "[]"));
	}, []);

	return (
		<div className="App">
			<Header />
			<ListOfItems data={items} />
			<Modal active={showModal} setActive={setShowModal}>
				<Form
					setActive={setShowModal}
					addItem={setItems}
					items={items}
				/>
			</Modal>
			<button
				className="buttonShowModal"
				onClick={() => setShowModal(true)}
			>
				New item
			</button>
		</div>
	);
}

export default App;
