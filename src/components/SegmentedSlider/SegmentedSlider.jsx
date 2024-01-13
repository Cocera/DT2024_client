import React from 'react';
import "./SegmentedSlider.scss";
import { Avatar, Flex, Segmented, Button } from 'antd';

const SegmentedSlider = () => (
        <Segmented style={{ padding: 1 }}
            options={[
                {
                    label: (
                        <div className='divSegmentedTwo'>
                            Gastos
                        </div>
                    ),
                    value: 'gastos',
                },
                {
                    label: (
                        <div>
                            Ingresos
                        </div>
                    ),
                    value: 'ingresos',
                }
            ]}
        />
);

export default SegmentedSlider;