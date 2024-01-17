import React from "react";
import "./Simulator.scss";
import Header from "../../components/Header/Header";
import ButtonExpense from "./ButtonExpense/ButtonExpense";
import OwnerCard from "./OwnerCard/OwnerCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const Simulator = () => {
    return (
        <>
            <Header title="Simulador" community="Av. Reino de Valencia, 87" />
            <main>
                <div className="container-future-expenses">
                    <h4>Gastos previstos</h4>
                    <div className="container-buttons">
                        <ButtonExpense icon="elevator" title="Ascensor" amount="3000" years="5" date="07/2029" />
                        <ButtonExpense icon="phone_enabled" title="Telefonillos" amount="5000" years="7" date="07/2029" />
                    </div>
                </div>
                <SearchBar />
                <div>
                    <OwnerCard ownerId="A1" actualAmount="40" newAmount="70" />
                    <OwnerCard ownerId="A2" actualAmount="40" newAmount="70" />
                    <OwnerCard ownerId="B1" actualAmount="40" newAmount="70" />
                    <OwnerCard ownerId="B2" actualAmount="40" newAmount="70" />
                    <OwnerCard ownerId="A4" actualAmount="40" newAmount="70" />
                    <OwnerCard ownerId="A5" actualAmount="40" newAmount="70" />
                </div>
            </main>
        </>
    )
};

export default Simulator;