import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { calculatorService } from './calculatorService';

const initialState = {
    cuotas: [], 
    loading: false, 
    error: null, 
    gastosAdicionales: { elevator: 0, phone: 0 }, 
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



const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        
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