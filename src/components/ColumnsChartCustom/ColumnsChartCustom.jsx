import React from "react";
import ColumnsChartMonth from "./ColumnsChartMonth/ColumnsChartMonth";
import { Flex } from "antd";
// import "./ColumnsChartMonth.scss";

const ColumnsChartCustom = () => {
    return (
        <>
            <Flex align="flex-end" justify="space-evenly" gap={8} style={{height: 128, padding:18}}>
                <ColumnsChartMonth month="ene" />
                <ColumnsChartMonth month="feb" />
                <ColumnsChartMonth month="mar" />
                <ColumnsChartMonth month="abr" />
                <ColumnsChartMonth month="may" />
                <ColumnsChartMonth month="jun" />
            </Flex>
        </>
    )
};

export default ColumnsChartCustom;