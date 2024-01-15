import React from "react";
import "./ColumnsChartMonth.scss";

const ColumnsChartMonth = (params) => {
    const mesure = params.height
    return (
        <>
        <div className="container-month">
            <div className="container-month-bars">
                <div className="first-bar secondary-color-bg"></div>
                <div className="second-bar main-color-bg"></div>
            </div>
            <div className="container-month-txt">
                <p>{params.month}</p>
            </div>
        </div>
        </>
    )
};

export default ColumnsChartMonth;