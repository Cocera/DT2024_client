import React from 'react';
import "./SegmentedTwoSlider.scss";
import { Avatar, Flex, Segmented, Button } from 'antd';

const SegmentedTwoSlider = () => (
    <Flex gap="small" align="flex-start" vertical >
        <Segmented style={{ padding: 4 }}
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
    </Flex>
);

export default SegmentedTwoSlider;