import React from "react";
import "./ButtonExpense.scss";

const OwnerCard = (params) => {
    return (
        <>
            <button className="button-future-expenses">
                <p className="text-button-expense">{params.title}</p>
                <p className="text-button-expense">Cada {params.years} años</p>
                <p className="text-button-expense">{params.amount}€</p>
                <p className="text-button-expense">Aprox. {params.date}</p>
            </button>
        </>
    )
};

export default OwnerCard;