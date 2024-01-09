import "./App.css";
import "./fonts.scss";
import "./colors.scss";
import SignIn from "./pages/SignIn/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/signin" element={<SignIn />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
