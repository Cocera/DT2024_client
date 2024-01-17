import { configureStore } from "@reduxjs/toolkit";
import communities from "../features/communities/communitySlice";
import calculatorReducer from "../features/calculator/calculatorSlice";


export const store = configureStore({
	reducer: {
		communities,
		calculator: calculatorReducer,
	},
});
