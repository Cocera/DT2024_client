import { Pie } from "@ant-design/plots";

const PieChart = () => {
	const data = [
		{
			type: "A",
			value: 27,
		},
		{
			type: "B",
			value: 25,
		},
		{
			type: "C",
			value: 18,
		},
		{
			type: "D",
			value: 15,
		},
		{
			type: "E",
			value: 10,
		},
		{
			type: "F",
			value: 5,
		},
	];
	const config = {
		appendPadding: 10,
		data,
		angleField: "value",
		colorField: "type",
		radius: 1,
		innerRadius: 0.7,
		label: {
			type: "inner",
			offset: "-50%",
			content: "{value}",
			style: {
				textAlign: "center",
				fontSize: 14,
			},
		},
		interactions: [
			{
				type: "element-selected",
			},
			{
				type: "element-active",
			},
		],
		statistic: {
			title: false,
			content: {
				style: {
					whiteSpace: "pre-wrap",
					overflow: "hidden",
					textOverflow: "ellipsis",
				},
				content: "AntV\nG2Plot",
			},
		},
	};
	return <Pie {...config} />;
};

export default PieChart;
