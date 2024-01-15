import "./App.css";
import "./fonts.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import CommunityAccount from "./pages/CommunityAccount/CommunityAccount";
import CommunityAccountHistory from "./pages/CommunityAccountHistory/CommunityAccountHistory";
import CommunitySearch from "./pages/CommunitySearch/COmmunitySearch";
import IncidenceInfo from "./pages/IncidenceInfo/IncidenceInfo";


function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route
						path="/comunidad/cuenta"
						element={<CommunityAccount />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route
						path="/comunidad/cuenta/historial"
						element={<CommunityAccountHistory />}></Route>

					<Route path="/buscador/comunidad" element={<CommunitySearch />}></Route>
					<Route path="/comunidad/incidencias/info" element={<IncidenceInfo />}></Route>
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
