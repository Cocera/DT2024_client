import React, { useState, useEffect } from "react";
import "./Simulator.scss";
import Header from "../../components/Header/Header";
import ButtonExpense from "./ButtonExpense/ButtonExpense";
import OwnerCard from "./OwnerCard/OwnerCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Flex } from "antd";
import Footer from "../../components/Footer/Footer";

const Simulator = () => {
    const [cuotasCalculadas, setCuotasCalculadas] = useState([]);
    const [gastoActivo, setGastoActivo] = useState(null); // Nuevo estado para rastrear el gasto activo

    const ownersData = [
        { cuota_basica: 40, coeficiente: 0.40, numero_piso: "1A" },
        { cuota_basica: 60, coeficiente: 0.60, numero_piso: "1B" },
        { cuota_basica: 60, coeficiente: 0.60, numero_piso: "2A" },
        { cuota_basica: 40, coeficiente: 0.40, numero_piso: "2B" },
        { cuota_basica: 60, coeficiente: 0.60, numero_piso: "3A" },
        { cuota_basica: 60, coeficiente: 0.60, numero_piso: "3B" },
        { cuota_basica: 40, coeficiente: 0.40, numero_piso: "4A" },
        { cuota_basica: 60, coeficiente: 0.60, numero_piso: "4B" },
        { cuota_basica: 60, coeficiente: 0.60, numero_piso: "5A" },
        { cuota_basica: 60, coeficiente: 0.60, numero_piso: "5B" },
        { cuota_basica: 40, coeficiente: 0.40, numero_piso: "6A" },
        { cuota_basica: 40, coeficiente: 0.40, numero_piso: "6B" }
    ];

    useEffect(() => {
        const cuotasIniciales = ownersData.map(owner => ({
            ...owner,
            nuevaCuota: 0
        }));
        setCuotasCalculadas(cuotasIniciales);
    }, []);

    const handleExpenseClick = (monto, meses, tipoGasto) => {
        setGastoActivo(tipoGasto);
        const incrementoPorMes = monto / meses;

        const cuotasActualizadas = cuotasCalculadas.map(cuota => ({
            ...cuota,
            nuevaCuota: Math.round(cuota.cuota_basica + (incrementoPorMes * cuota.coeficiente))
        }));

        setCuotasCalculadas(cuotasActualizadas);
    };

    return (
        <>
            <Header title="Simulador" community="Calle Doctor Moliner, 27" />
            <main>
                <Flex justify="" align="center" vertical="true" style={{ paddingLeft: 18, paddingRight: 18 }}>
                    <div className="container-future-expenses margin-top-28">
                        <h4 className="secondary-color">Gastos previstos</h4>
                        <div className="container-buttons margin-top-28">
                            <ButtonExpense
                                icon="elevator"
                                title="Ascensor"
                                amount={2000}
                                years="6"
                                date="02/2030"
                                onClick={() => handleExpenseClick(2000, 72, 'elevator')}
                                className={gastoActivo === 'elevator' ? 'active-expense' : ''}
                            />
                            <ButtonExpense
                                icon="phone_enabled"
                                title="Telefonillos"
                                amount={3400}
                                years="7"
                                date="01/2031"
                                onClick={() => handleExpenseClick(3400, 84, 'phone')}
                                className={gastoActivo === 'phone' ? 'active-expense' : ''}
                            />
                        </div>
                    </div>
                    <div className="margin-top-28">
                        <SearchBar />
                    </div>
                    <div className="margin-top-28">
                        {cuotasCalculadas.map((cuota, index) => (
                            <OwnerCard
                                key={index}
                                ownerId={cuota.numero_piso}
                                actualAmount={cuota.cuota_basica}
                                newAmount={cuota.nuevaCuota}
                            />
                        ))}
                    </div>
                </Flex>
            </main>
            <Footer />
        </>
    );
};

export default Simulator;
