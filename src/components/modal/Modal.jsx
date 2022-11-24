import "./Modal.css";

export default function Modal({ active, setActive, children }) {
	return (
		<div
			className={active ? "modal active" : "modal"}
			onClick={() => setActive(false)}
		>
			<div className="modalContent" onClick={(e) => e.stopPropagation()}>
				<div className="headModal">
					<h1>New item</h1>
					<label onClick={() => setActive(false)}>X</label>
				</div>
				{children}
			</div>
		</div>
	);
}
