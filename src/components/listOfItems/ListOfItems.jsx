import "./ListOfItems.css";

export default function ListOfItems({ data }) {
	return (
		<table>
			<tbody>
				<tr>
					<th className="id">#</th>
					<th className="Title">Title</th>
					<th className="Price">Price, USD</th>
					<th className="Date">Date and Time</th>
				</tr>
				{data.map((item) => (
					<tr className="Items" key={item.id}>
						<td>
							<b>{item.id}</b>
						</td>
						<td>{item.title}</td>
						<td>{item.price}</td>
						<td>{item.date}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
