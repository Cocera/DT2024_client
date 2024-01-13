import React from 'react';
import "./SegmentedSlider.scss";
import { Avatar, Flex, Segmented, Button, theme } from 'antd';

const { useToken } = theme;

const SegmentedSlider = () => {
    const { token } = useToken();
    console.log('main color: ', token.colorPrimary)
    console.log('secondary color: ', token.colorSecondary)
    return (
        <Segmented
            style={{
                padding: 0.5,
                itemActiveBg: token.colorSecondary,
                itemSelectedColor: '#FFFFFF',
                itemSelectedBg: token.colorSecondary,
                colorBgLayout: token.colorSecondary
            }}
            options={[
                {
                    label: (
                        <div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }}>
                            Gastos
                        </div>
                    ),
                    value: 'gastos',
                },
                {
                    label: (
                        <div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }}>
                            Ingresos
                        </div>
                    ),
                    value: 'ingresos',
                }
            ]}
        />
    )
};

export default SegmentedSlider;