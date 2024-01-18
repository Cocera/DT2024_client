import React from 'react';
import { Divider, Flex, List, Space } from 'antd';
import './ExpensesResume.scss'

const ExpensesResume = () => {
    return (
        <>
            <Space className='secondary-color' direction="vertical" size="small" style={{ padding: 20, display: 'flex', marginBottom:28 }}>
                <Flex justify='space-between' align='center' style={{ width: 250 }}>
                    <Flex justify='space-around' align='center' gap={8}>
                        <div className='color-container-expenses secondary-color-bg'></div>
                        <h4>Ingresos</h4>
                    </Flex>
                    <h4>750 €</h4>
                </Flex>
                <Divider />
                <Flex justify='space-between' align='center' style={{ width: 250 }}>
                    <Flex justify='space-around' align='center' gap={8}>
                        <div className='color-container-expenses main-color-bg'></div>
                        <h4>Gastos</h4>
                    </Flex>
                    <h4 className='main-color'>278 €</h4>
                </Flex>
                <Divider />
                <Flex justify='space-between' align='center' style={{ width: 250 }}>
                    <Flex justify='space-around' align='center' gap={8}>
                        <div className='color-container-expenses'></div>
                        <h4>Neto</h4>
                    </Flex>
                    <h4>1500 €</h4>
                </Flex>
            </Space>
        </>
    )
};

export default ExpensesResume;