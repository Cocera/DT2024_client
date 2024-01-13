import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const ColumnsChart = () => {
    const data = [
        // Datos de ejemplo
        {
            name: 'London',
            month: 'Jan.',
            points: 10,
        },
        {
            name: 'Valencia',
            month: 'Jan.',
            points: 7.5,
        },
        {
            name: 'London',
            month: 'Feb.',
            points: 8.9,
        },
        {
            name: 'Valencia',
            month: 'Feb.',
            points: 6.3,
        },
        {
            name: 'London',
            month: 'Mar.',
            points: 6.8,
        },
        {
            name: 'Valencia',
            month: 'Mar.',
            points: 3.5,
        },
    ];
    const config = {
        data,
        // Configuraciones basicas y opcionales
        isGroup: true, // Agrupación activada
        xField: 'month', // Campo del eje X
        yField: 'points', // Campo del eje Y
        seriesField: 'name', // Campo de la serie
        color: ['#AB172F', '#024B59'],

        label: {
            // Configuraciones de etiquetas
            position: null, // top', 'middle', 'bottom'
            layout: [
                // Ajustes de diseño de etiquetas
                {
                    type: 'interval-adjust-position', // Ajuste de posición de intervalo
                },
                {
                    type: 'interval-hide-overlap', // Ocultar superposición de intervalo
                },
                {
                    type: 'adjust-color', // Ajustar color
                },
            ],
        },
    };
    return <Column {...config} />;
};

export default ColumnsChart;
