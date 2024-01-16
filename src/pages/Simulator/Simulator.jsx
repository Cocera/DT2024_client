import React from "react";
import "./Simulator.scss";
import Header from "../../components/Header/Header";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";
import { Slider, Card } from 'antd';
import ButtonExpense from "./ButtonExpense/ButtonExpense";
import OwnerCard from "./OwnerCard/OwnerCard";
import { useLocation, useNavigate } from 'react-router-dom';

// MAIN, SECONDARY
const customColors = ['#AB172F', '#024B59'];

const Simulator = () => {

    const location = useLocation();
    const navigate = useNavigate();

    // const handleOptionClick = (value) => {
    //     onChange(value);
    // };

    const handleOptionClick = (value) => {
        if (value === "prevision") {
            navigate('/simulador/prevision');
        } else if (value === "simulador") {
            navigate('/simulador/fondos');
        }
    };

    const options = [
        {
            label: (
                <div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }} onClick={handleOptionClick} >
                    Previsión
                </div>
            ),
            value: "prevision",
        },
        {
            label: (
                <div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }}>
                    Simulador
                </div>
            ),
            value: "simulador",
        },
    ];



    if (location.pathname === '/simulador/prevision') {
        return (
            <>
                <Header title="Simulador" community="Av. Reino de Valencia, 87" />
                <SegmentedSlider options={options} onChange={handleOptionClick} />
                <div className="container-future-expenses">
                    <h4>Gastos previstos</h4>
                    <div className="container-buttons">
                        <ButtonExpense title="Ascensor" amount="3000" years="5" date="07/2029" />
                        <ButtonExpense title="Telefonillos" amount="5000" years="7" date="07/2029" />
                    </div>
                </div>
                <OwnerCard/>
            </>
        )
    } else if (location.pathname === '/simulador/fondos') {
        return (
            <>
                <Header title="Simulador" community="Av. Reino de Valencia, 87" />
                <SegmentedSlider options={options} onChange={handleOptionClick} />
                <Slider defaultValue={30} tooltip={{ open: false }} />
                <Slider defaultValue={30} min={1} max={20} tooltip={{ open: false }} />
            </>
        )
    }
};

export default Simulator;