import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";

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

	const radian = Math.PI / 180;
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
	}) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * radian);
		const y = cy + radius * Math.sin(-midAngle * radian);

		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central">
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	return (
		<>
			<h1>Address</h1>
			<div
				style={{
					textAlign: "center",
					margin: "auto 10%",
				}}>
				<PieChart width={700} height={700}>
					<Tooltip />
					<Pie
						data={data}
						dataKey="value"
						outerRadius={250}
						innerRadius={150}
						fill="green"
						labelLine={false}
						label={({ name, value }) => `${name}: ${value}`}
						// label={renderCustomizedLabel}
					>
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
