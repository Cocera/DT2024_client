import React from "react";
import { Avatar, Divider, Flex, List, Skeleton, theme } from 'antd';
import ExpensesDetail from "./ExpensesDetail/ExpensesDetail";
import { useLocation } from 'react-router-dom';


const { useToken } = theme;

const dataGastos = [
    {
        category: 'Mantenimiento',
        amount: 305
    },
    {
        category: 'Derrama',
        amount: 2345
    },
    {
        category: 'Mantenimiento',
        amount: 20
    },
    {
        category: 'Mantenimiento',
        amount: 35
    },
    {
        category: 'Derrama',
        amount: 1005
    },
    {
        category: 'Limpieza',
        amount: 50
    },
    {
        category: 'Mantenimiento',
        amount: 89
    },
    {
        category: 'Derrama',
        amount: 2050
    },
];
const dataIngresos = [
    {
        category: 'Transferencia',
        amount: 1200
    },
    {
        category: 'Cuota 1B',
        amount: 110
    },
    {
        category: 'Transferencia',
        amount: 1200
    },
    {
        category: 'Cuota 4A',
        amount: 150
    },
    {
        category: 'Cuota 5B',
        amount: 110
    },
    {
        category: 'Transferencia',
        amount: 1000
    },
    {
        category: 'Cuota 2B',
        amount: 150
    },
    {
        category: 'Cuota 3A',
        amount: 110
    },
];

const ExpensesList = () => {
    const location = useLocation();
    const { token } = useToken();

    if (location.pathname === '/comunidad/cuenta/historial') {
        return (
            <List
            itemLayout="horizontal"
            dataSource={dataGastos}
            style={{width:370, marginTop:28, marginBottom: 100}}
            renderItem={(item, index) => (
                <List.Item >
                    <List.Item.Meta
                        description={ <ExpensesDetail category={item.category} amount={item.amount} /> }
                    />
                </List.Item>
            )}
        />
        )
    } else if (location.pathname === '/comunidad/cuenta/ingresos') {
        return (
            <List
            itemLayout="horizontal"
            dataSource={dataIngresos}
            style={{width:370, marginTop:28, marginBottom: 100}}
            renderItem={(item, index) => (
                <List.Item >
                    <List.Item.Meta
                        description={ <ExpensesDetail category={item.category} amount={item.amount} /> }
                    />
                </List.Item>
            )}
        />
        )
    }
};

export default ExpensesList;