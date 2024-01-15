import React from "react";
import "./CommunityAccountHistory.scss";
import ExpensesList from "../../components/ExpensesList/ExpensesList";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";
import ColumnsChart from "../../components/ColumnsChart/ColumnsChart";
import ExpensesResume from "../../components/ExpensesResume/ExpensesResume";
import { useLocation } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ColumnsChartMine from "../../components/ColumnsChartMine/ColumnsChartMine";

const CommunityAccountHistory = () => {

	const location = useLocation();

	const handleOptionClick = (value) => {
		onChange(value);
	};

	const options = [
		{
			label: (
				<div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }} onClick={handleOptionClick} >
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
				<Header title="Historial" />
				<ColumnsChartMine/>
				{/* <ColumnsChart /> */}
				<ExpensesResume />
				<SegmentedSlider options={options} />
				<ExpensesList />
				<Footer />
			</>
		)
	} else if (location.pathname === '/comunidad/cuenta/ingresos') {
		return (
			<>
				<Header title="Historial" />
				<ColumnsChartMine/>
				{/* <ColumnsChart /> */}
				<ExpensesResume />
				<SegmentedSlider options={options} />
				<ExpensesList />
				<Footer />
			</>
		)
	}
};

export default CommunityAccountHistory;
