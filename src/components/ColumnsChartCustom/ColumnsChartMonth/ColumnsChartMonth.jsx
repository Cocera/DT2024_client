import React from "react";
import "./ColumnsChartMonth.scss";

const ColumnsChartMonth = (params) => {
    const mesure = params.height
    return (
        <>
        <div className="container-month">
            <div className="container-month-bars">
                <div className={`${params.active? "first-bar-active" : "first-bar"} secondary-color-bg`}></div>
                <div className={`${params.active? "second-bar-active" : "second-bar"} main-color-bg`}></div>
            </div>
            <div className="container-month-txt">
                <p>{params.month}</p>
            </div>
        </div>
        </>
    )
};

export default ColumnsChartMonth;