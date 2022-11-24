import BurgerButton from "../burgerButton/BurgerButton";
import "./Header.css";

export default function Header() {
	return (
		<div className="head">
			<span>
				STOCK
				<br />
				CENTER
			</span>
			<h1>Items in stock</h1>
			<BurgerButton />
		</div>
	);
}
