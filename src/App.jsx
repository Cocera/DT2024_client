import "./App.css";
import "./fonts.scss";
import "./colors.scss";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';



// Extend the theme to include custom colors, fonts, etc CUSTOM THEME CHAKRA
// COMPLETE WITH BRAND COLORS
const colors = {
	brand: {
	  900: '#1a365d',
	  800: '#153e75',
	  700: '#2a69ac',
	},
};

const customTheme = extendTheme({ colors });





function App() {
	return (
		<>
			<ChakraProvider theme={customTheme}>
			<Router>
				<Routes>
					<Route path="/signin" element={<SignIn />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/" element={<Home />}></Route>
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
			</Router>
			</ChakraProvider>
		</>
	);
}

export default App;
