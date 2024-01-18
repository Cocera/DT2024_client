import React from "react";
import { Avatar, Divider, Flex, List, Skeleton, theme } from 'antd';
import ExpensesDetail from "./ExpensesDetail/ExpensesDetail";

const { useToken } = theme;

const data = [
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
        amount: 305
    },
    {
        category: 'Mantenimiento',
        amount: 305
    },
];

const ExpensesList = () => {
    const { token } = useToken();
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
                <List.Item >
                    <List.Item.Meta
                        description={ <ExpensesDetail category={item.category} amount={item.amount} /> }
                    />
                </List.Item>
            )}
        />
    )
};

export default ExpensesList;