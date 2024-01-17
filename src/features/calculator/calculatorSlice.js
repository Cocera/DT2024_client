import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { calculatorService } from './calculatorService';

const initialState = {
    cuotas: [], // Almacenará las cuotas calculadas
    loading: false, // Indicará si la solicitud está en proceso
    error: null, // Guardará información de cualquier error que ocurra
    gastosAdicionales: { elevator: 0, phone: 0 }, // Podría incluir los gastos adicionales si necesitas manejarlo en este slice
};

export const calcularCuotasAsync = createAsyncThunk(
    'calculator/calcularCuotas',
    async (gastosAdicionales, { rejectWithValue }) => {
        try {
            const response = await calculatorService.calcularCuotas(gastosAdicionales);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// const initialState = {
//     cuotas: [],
//     loading: false,
//     error: null,
// };

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        // Aquí puedes agregar reducers sincrónicos si los necesitas
    },
    extraReducers: (builder) => {
        builder
            .addCase(calcularCuotasAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(calcularCuotasAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.cuotas = action.payload;
            })
            .addCase(calcularCuotasAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default calculatorSlice.reducer;