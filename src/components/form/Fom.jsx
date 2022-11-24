import { useForm } from "react-hook-form";
import "./Form.css";

export default function Form({ setActive, addItem, items }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ mode: "onBlur" });

	return (
		<div className="formContent">
			<form
				onSubmit={handleSubmit(async (data) => {
					await addItem((oldItems) => {
						let newArrayOfItems = [
							...oldItems,
							{
								id: oldItems.length + 1,
								title: data.title,
								price: data.price,
								date: data.dateAndTime
									.toLocaleString()
									.replace(/,/, ""),
							},
						];
						window.localStorage.setItem(
							"items",
							JSON.stringify(newArrayOfItems)
						);
						return newArrayOfItems;
					});
					reset();
				})}
			>
				<label>Title</label>
				<input
					className={errors.title ? "error" : ""}
					{...register("title", {
						required: "Поле обязательно к заполнению",
						minLength: {
							value: 4,
							message: "Min length is 4",
						},
					})}
					placeholder={"Title"}
				/>
				<div>
					{errors?.title && (errors?.title?.message || "Error!")}
				</div>
				<label>Price</label>
				<input
					className={errors.price ? "error" : ""}
					{...register("price", {
						required: "Поле обязательно к заполнению",
						pattern: {
							value: /^[0-9]+$/,
							message: "Please enter a number",
						},
					})}
					placeholder={"10.00"}
				/>
				<div>
					{errors?.price && (errors?.price?.message || "Error!")}
				</div>
				<label>Date and time</label>
				<input
					type="datetime-local"
					className={errors.date ? error : ""}
					{...register("dateAndTime", {
						required: "Поле обязательно к заполнению",
						valueAsDate: true,
					})}
					placeholder={"12.01.2021 15:01:00"}
				/>
				<div>{errors?.date && (errors?.date?.message || "Error!")}</div>
				<div className="bottomButtons">
					<input
						id="Close"
						type={"button"}
						onClick={() => setActive(false)}
						value={"Close"}
					/>
					<input
						id="Add"
						onClick={() => setActive(false)}
						type="submit"
						value={"Add"}
					/>
				</div>
			</form>
		</div>
	);
}
