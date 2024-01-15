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

	const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);

	const colors = [
		"#024B59",
		"#AB172F",
		"#1ABC7B",
		"#FFCC4D",
		"#2BB0C9",
		"#A5BEAC",
	];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = (props) => {
		const { cx, cy, viewBox } = props;
		const radius =
			viewBox.innerRadius + (viewBox.outerRadius - viewBox.innerRadius) * 0.4;
		const midAngle = (viewBox.endAngle + viewBox.startAngle) / 2;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);
		console.log(props);
		let percentageCalculated = (props.value / totalValue) * 100;
		const percentString =
			percentageCalculated.toFixed(2).replace(".", ",").toString() + "%";
		console.log("percent", percentString);
		console.log(typeof percentString);
		return (
			<text
				dy={1}
				dx={5}
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central">
				{percentString}
			</text>
		);
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
							position="inside"
							angle="0"
							stroke="none"
							content={renderCustomizedLabel}
						/>
						<Label value={`Total: €${totalValue}`} position="center" />
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
