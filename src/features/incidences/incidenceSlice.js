import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import incidenceService from "./incidenceService";

const initialState = {
	incidences: [],
	incidence: {},
	isError: false,
	isSuccess: false,
};

export const getAllIncidences = createAsyncThunk(
	"incidences/getIncidences",
	async () => {
		try {
			return await incidenceService.getAllIncidences();
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
);

export const getIncidenceById = createAsyncThunk(
	"incidences/getIncidenceById",
	async (_id) => {
		try {
			return await incidenceService.getIncidenceById(_id);
		} catch (error) {
			console.error(error);
		}
	}
);

export const getIncidenceByKeyword = createAsyncThunk(
	"incidences/getIncidenceByKeyword",
	async (keyword) => {
		try {
			return await incidenceService.getIncidenceByKeyword(keyword);
		} catch (error) {
			console.error(error);
		}
	}
);

export const incidenceSlice = createSlice({
	name: "incidences",
	initialState,
	reducers: {
		reset: (state) => {
			state.incidences = [];
			state.incidence = {};
			state.isError = false;
			state.isSuccess = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllIncidences.fulfilled, (state, action) => {
				state.incidences = [action.payload];
				state.isSuccess = true;
			})
			.addCase(getAllIncidences.rejected, (state, action) => {
				state.isError = true;
			})
			.addCase(getIncidenceById.fulfilled, (state, action) => {
				state.incidence = action.payload;
				state.isSuccess = true;
			})
			.addCase(getIncidenceById.rejected, (state, action) => {
				state.isError = true;
			})
			.addCase(getIncidenceByKeyword.fulfilled, (state, action) => {
				state.incidences = action.payload;
				state.isSuccess = true;
			})
			.addCase(getIncidenceByKeyword.rejected, (state, action) => {
				state.isError = true;
			});
	},
});

export const { reset } = incidenceSlice.actions;
export default incidenceSlice.reducer;
