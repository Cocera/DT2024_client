import React from "react";
import { DollarOutlined } from '@ant-design/icons';
import { Flex, Space, Typography } from "antd";
import { useLocation } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const ExpensesDetail = (params) => {

    const location = useLocation();

    if (location.pathname === '/comunidad/cuenta/gastos') {
        return (
            <Flex align="center" justify="space-around" gap={30}>
                <Space>
                    <DollarOutlined />
                    <Paragraph style={{ margin: 0 }}>{params.category}</Paragraph>
                </Space>
                <Space>
                    <Paragraph style={{ margin: 0 }}>+ {params.amount}€</Paragraph>
                </Space>
            </Flex>
        )
    } else if (location.pathname === '/comunidad/cuenta/ingresos') {
        return (
            <Flex align="center" justify="space-around" gap={30}>
                <Space>
                    <DollarOutlined />
                    <Paragraph style={{ margin: 0 }}>{params.category}</Paragraph>
                </Space>
                <Space>
                    <Paragraph style={{ margin: 0 }}>- {params.amount}€</Paragraph>
                </Space>
            </Flex>
        )
    }

};

export default ExpensesDetail;