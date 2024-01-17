import React from "react";
import "./ButtonExpense.scss";

const ButtonExpense = ({ icon, title, amount, years, date, onClick, className }) => {
    return (
        <button className={`button-future-expenses ${className}`} onClick={onClick}>
            <div className="secondary-color-bg container-future-expenses-one">
                <span className="material-symbols-rounded">{icon}</span>
            </div>
            <div className="container-future-expenses-two">
                <h3 className="text-button-expense secondary-color">{title}</h3>
                <p className="text-button-expense grey-color">Cada {years} años</p>
                <h3 className="text-button-expense secondary-color">{amount}€</h3>
                <p className="text-button-expense grey-color">Aprox. {date}</p>
            </div>
        </button>
    );
};

export default ButtonExpense;
