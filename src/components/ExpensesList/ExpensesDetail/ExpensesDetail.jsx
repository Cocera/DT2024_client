import React from "react";
import "./ExpensesDetail.scss";
import { DollarOutlined } from '@ant-design/icons';
import { Flex, Space, Typography } from "antd";
import { useLocation } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const ExpensesDetail = (params) => {

    const location = useLocation();

    if (location.pathname === '/comunidad/cuenta/historial') {
        return (
            <article className="container-expenses">
                <div className="category-cuentas">
                    <DollarOutlined />
                    <Paragraph style={{ margin: 0 }}>{params.category}</Paragraph>
                </div>
                <div className="category-gasto">
                    <Paragraph style={{ margin: 0 }}>- {params.amount}€</Paragraph>
                </div>
            </article>
        )
    } else if (location.pathname === '/comunidad/cuenta/ingresos') {
        return (
            <article className="container-expenses">
                <div className="category-cuentas">
                    <DollarOutlined />
                    <Paragraph style={{ margin: 0 }}>{params.category}</Paragraph>
                </div>
                <div className="category-gasto">
                    <Paragraph style={{ margin: 0 }}>+ {params.amount}€</Paragraph>
                </div>
            </article>
        )
    }

};

export default ExpensesDetail;