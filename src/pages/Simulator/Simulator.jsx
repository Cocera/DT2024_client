import React from "react";
import "./Simulator.scss";
import Header from "../../components/Header/Header";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";
import { Slider, Card } from 'antd';
import { useLocation } from 'react-router-dom';
import ButtonExpense from "./ButtonExpense/ButtonExpense";
import OwnerCard from "./OwnerCard/OwnerCard";

// MAIN, SECONDARY
const customColors = ['#AB172F', '#024B59'];

const Simulator = () => {

    const location = useLocation();

    const handleOptionClick = (value) => {
        onChange(value);
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
                <SegmentedSlider options={options} />
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
                <SegmentedSlider options={options} />
                <Slider defaultValue={30} tooltip={{ open: false }} />
                <Slider defaultValue={30} min={1} max={20} tooltip={{ open: false }} />
            </>
        )
    }
};

export default Simulator;