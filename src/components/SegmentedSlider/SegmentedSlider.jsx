import React from 'react';
import "./SegmentedSlider.scss";
import { Avatar, Flex, Segmented, Button } from 'antd';

const SegmentedSlider = () => {
    return (
        <Segmented style={{ padding: 1 }}
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
                        <div style={{ padding: 3, paddingLeft: 9, paddingRight: 9 }}>
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