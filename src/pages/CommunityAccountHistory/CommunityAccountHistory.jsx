import React from "react";
import "./CommunityAccountHistory.scss";
import ExpensesList from "../../components/ExpensesList/ExpensesList";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";
import ExpensesResume from "../../components/ExpensesResume/ExpensesResume";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ColumnsChartCustom from "../../components/ColumnsChartCustom/ColumnsChartCustom";
import { useLocation, useNavigate } from 'react-router-dom';

const CommunityAccountHistory = () => {

	const location = useLocation();
	const navigate = useNavigate();

	// const handleOptionClick = (value) => {
	// 	onChange(value);
	// };

	const handleOptionClick = (value) => {
        if (value === "gastos") {
            navigate('/comunidad/cuenta/gastos');
        } else if (value === "ingresos") {
            navigate('/comunidad/cuenta/ingresos');
        }
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
				<div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }} onClick={handleOptionClick} >
					Ingresos
				</div>
			),
			value: "ingresos",
		},
	];

	if (location.pathname === '/comunidad/cuenta/gastos') {
		return (
			<>
				<Header title="Historial" community="Av. Reino de Valencia, 87" />
				<ColumnsChartCustom/>
				<ExpensesResume />
				<SegmentedSlider options={options} onChange={handleOptionClick} />
				<ExpensesList />
				<Footer />
			</>
		)
	} else if (location.pathname === '/comunidad/cuenta/ingresos') {
		return (
			<>
				<Header title="Historial" community="Calle Doctor Moliner, 27" />
				<ColumnsChartCustom/>
				<ExpensesResume />
				<SegmentedSlider options={options} onChange={handleOptionClick} />
				<ExpensesList />
				<Footer />
			</>
		)
	}
};

export default CommunityAccountHistory;
