import { PieChart, Pie, Tooltip, Cell, LabelList, Label } from "recharts";

const DonutChart = () => {
	const data = [
		{ name: "Icon1", value: 400 },
		{ name: "Icon2", value: 700 },
		{ name: "Icon3", value: 200 },
		{ name: "Icon4", value: 1000 },
		{ name: "Icon5", value: 200 },
		{ name: "Icon6", value: 1000 },
	];

	const colors = [
		"#024B59",
		"#AB172F",
		"#1ABC7B",
		"#FFCC4D",
		"#2BB0C9",
		"#A5BEAC",
	];

	const renderCustomizedLabel = (data, total) => {
		console.log("hola");
		const calculateTotal = (data) => {
			return data.reduce((acc, entry) => acc + entry.value, 0);
		};

		total = calculateTotal(data);
		console.log("Total:", total);
		console.log("Data", data);
		console.log(data.value / total);

		let percentageCalculated = (data.payload.value / total) * 100;
		return percentageCalculated.toFixed(2).replace(".", ",").toString() + "%";
	};

	return (
		<>
			<div
				style={{
					textAlign: "center",
					display: "flex",
					justifyContent: "center",
				}}>
				<PieChart width={700} height={700}>
					<Tooltip />
					<Pie
						data={data}
						dataKey="value"
						outerRadius={250}
						innerRadius={150}
						fill="#024B59"
						labelLine={false}
						label={({ name }) => `${name}`}>
						<LabelList
							dy={-3}
							fill="white"
							content={{ renderCustomizedLabel }}
							position="inside"
							angle="0"
							stroke="none"
						/>
						<Label value="Total" position="center" />
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={colors[index % colors.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</div>
		</>
	);
};

export default DonutChart;
