import { configureStore } from "@reduxjs/toolkit";
import communities from "../features/communities/communitySlice";
import calculatorReducer from "../features/calculator/calculatorSlice";
import incidences from "../features/incidences/incidenceSlice";

export const store = configureStore({
	reducer: {
		communities,
		incidences,
		calculator: calculatorReducer,
	},
});
