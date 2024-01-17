import axios from 'axios';

const BASE_URL = 'https://prueba-dev-qsea.1.ie-1.fl0.io/calculadora_previ';

const calcularCuotas = async (gastosAdicionales) => {
    try {
        const response = await axios.post(`${BASE_URL}`, gastosAdicionales);
        return response.data;
    } catch (error) {
        console.error(error)        
        throw error;
    }
};

export const calculatorService = {
    calcularCuotas,
};