import React from "react";
import "./ColumnsChartCustom.scss"
import ColumnsChartMonth from "./ColumnsChartMonth/ColumnsChartMonth";
import { Flex } from "antd";
import { Button, Dropdown } from 'antd';
import { DownOutlined } from "@ant-design/icons";

const items = [
    {
        key: '1',
        label: 'Enero'
    },
    {
        key: '2',
        label: 'Febrero'
    },
    {
        key: '3',
        label: 'Marzo'
    },
    {
        key: '4',
        label: 'Abril'
    },
];

const ColumnsChartCustom = () => {
    return (
        <>
            <Flex align="flex-start" justify="space-evenly" vertical="true" gap={8} style={{ padding: 18 }}>
                {/* <Flex align="center" justify="space-between" gap={8}> */}
                <div className="container-menu-columns-chart">
                    <p className="secondary-color" style={{ margin: 0, marginLeft: 8 }}>1 ene. - 31 ene. 2024</p>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottom"
                    >
                        <Button>
                            Mes
                            <DownOutlined />
                        </Button>
                    </Dropdown>
                    </div>
                {/* </Flex> */}
                <Flex align="flex-end" justify="space-evenly" gap={8} style={{ height: 128 }}>
                    <ColumnsChartMonth month="ene" active="true" />
                    <ColumnsChartMonth month="feb" />
                    <ColumnsChartMonth month="mar" />
                    <ColumnsChartMonth month="abr" />
                    <ColumnsChartMonth month="may" />
                    <ColumnsChartMonth month="jun" />
                </Flex>
            </Flex>
        </>
    )
};

export default ColumnsChartCustom;