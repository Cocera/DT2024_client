import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import communityService from "./communityService";

const initialState = {
	communities: [],
	community: {},
	isError: false,
	isSuccess: false,
};

export const getAll = createAsyncThunk(
	"communities/getCommunities",
	async () => {
		try {
			return await communityService.getAllCommunities();
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
);

export const getById = createAsyncThunk(
	"communities/getCommunityById",
	async (_id) => {
		try {
			return await communityService.getCommunityById(_id);
		} catch (error) {
			console.error(error);
		}
	}
);

export const getByAddress = createAsyncThunk(
	"communities/getCommunityByAddress",
	async (address) => {
		try {
			return await communityService.getCommunityByAddress(address);
		} catch (error) {
			console.error(error);
		}
	}
);

export const communitySlice = createSlice({
	name: "communities",
	initialState,
	reducers: {
		reset: (state) => {
			state.communities = [];
			state.community = {};
			state.isError = false;
			state.isSuccess = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAll.fulfilled, (state, action) => {
				state.communities = [...state.communities, ...action.payload];
				state.isSuccess = true;
			})
			.addCase(getAll.rejected, (state, action) => {
				state.isError = true;
			})
			.addCase(getById.fulfilled, (state, action) => {
				state.community = action.payload;
				state.isSuccess = true;
			})
			.addCase(getById.rejected, (state, action) => {
				state.isError = true;
			})
			.addCase(getByAddress.fulfilled, (state, action) => {
				state.communities = action.payload;
				state.isSuccess = true;
			})
			.addCase(getByAddress.rejected, (state, action) => {
				state.isError = true;
			});
	},
});

export const { reset } = communitySlice.actions;
export default communitySlice.reducer;
