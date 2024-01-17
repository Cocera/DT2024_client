import { configureStore } from "@reduxjs/toolkit";
import communities from "../features/communities/communitySlice";

export const store = configureStore({
	reducer: {
		communities,
		// incidences,
	},
});
