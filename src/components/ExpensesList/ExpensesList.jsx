import React from "react";
import "./ExpensesList.scss";
import { Avatar, Divider, Flex, List, Skeleton } from 'antd';
import { DollarOutlined } from '@ant-design/icons';

const data = [
    {
        title: 'Gasto número 1',
        description: 'Detalle del gasto número 1'
    },
    {
        title: 'Gasto número 2',
        description: 'Detalle del gasto número 2'
    },
    {
        title: 'Gasto número 3',
        description: 'Detalle del gasto número 3'
    },
    {
        title: 'Gasto número 4',
        description: 'Detalle del gasto número 4'
    },
];

const ExpensesList = () => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
                <List.Item >
                    <List.Item.Meta
                        // title={<a href="https://ant.design">{item.title}</a>}
                        avatar={<DollarOutlined />}
                        title={ item.title }
                        description={ item.description }
                    />
                </List.Item>
            )}
        />
    )
};

export default ExpensesList;