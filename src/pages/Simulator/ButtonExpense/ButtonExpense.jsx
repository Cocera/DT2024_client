import React from "react";
import "./ButtonExpense.scss";

const OwnerCard = (params) => {
    return (
        <>

            <button className="button-future-expenses">
                <div className="secondary-color-bg container-future-expenses-one">
                    <span class="material-symbols-rounded">{params.icon}</span>
                </div>
                <div className="container-future-expenses-two">
                    <h3 className="text-button-expense secondary-color">{params.title}</h3>
                    <p className="text-button-expense grey-color">Cada {params.years} años</p>
                    <h3 className="text-button-expense secondary-color">{params.amount}€</h3>
                    <p className="text-button-expense grey-color">Aprox. {params.date}</p>
                </div>
            </button>
        </>
    )
};

export default OwnerCard;