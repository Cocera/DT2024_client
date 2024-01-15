import React from 'react';
import { Divider, Flex, List, Space } from 'antd';
import './ExpensesResume.scss'

const ExpensesResume = () => {
    return (
        <>
            <Space direction="vertical" size="small" style={{ padding: 20, display: 'flex' }}>
                <Flex justify='space-around' align='center'>
                    <div className='color-container-expenses main-color-bg'></div>
                    <h4>Ingresos</h4>
                    <h4>10.000€</h4>
                </Flex>
                <Divider />
                <Flex justify='space-around' align='center'>
                    <div className='color-container-expenses secondary-color-bg'></div>
                    <h4>Gastos</h4>
                    <h4>10.000€</h4>
                </Flex>
                <Divider />
                <Flex justify='space-around' align='center'>
                    <h4>Neto</h4>
                    <h4>10.000€</h4>
                </Flex>
            </Space>
        </>
    )
};

export default ExpensesResume;