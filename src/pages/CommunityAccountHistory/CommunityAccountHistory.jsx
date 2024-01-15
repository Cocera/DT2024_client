import React from "react";
import "./CommunityAccountHistory.scss";
import ExpensesList from "../../components/ExpensesList/ExpensesList";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";
import { LeftOutlined } from "@ant-design/icons";
import ColumnsChart from "../../components/ColumnsChart/ColumnsChart";
import ExpensesResume from "../../components/ExpensesResume/ExpensesResume";
import MainMenu from "../../components/MainMenu/MainMenu";
import { useLocation } from 'react-router-dom';

const CommunityAccountHistory = () => {
	
	const location = useLocation();

	const options = [
		{
			label: (
				<div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }}>
					Gastos
				</div>
			),
			value: "gastos",
		},
		{
			label: (
				<div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }}>
					Ingresos
				</div>
			),
			value: "ingresos",
		},
	];

	if (location.pathname === '/comunidad/cuenta/gastos') {
		return (
			<>
				<a>
					{" "}
					<LeftOutlined />
					Historial
				</a>
				<ColumnsChart />
				<ExpensesResume />
				<SegmentedSlider options={options} />
				<ExpensesList />
			</>
		)
	}

	if (location.pathname === '/comunidad/cuenta/ingresos') {
		return (
			<>
				<a>
					{" "}
					<LeftOutlined />
					Historial
				</a>
				<ColumnsChart />
				<ExpensesResume />
				<SegmentedSlider options={options} />
				<ExpensesList />
			</>
		)
	}
};

export default CommunityAccountHistory;
