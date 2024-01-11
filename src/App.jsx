import "./App.css";
import "./fonts.scss";
import "./colors.scss";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';

function App() {
	return (
		<>
			<ChakraProvider>
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
