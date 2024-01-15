import "./App.css";
import "./fonts.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import CommunityAccount from "./pages/CommunityAccount/CommunityAccount";
import CommunityAccountHistory from "./pages/CommunityAccountHistory/CommunityAccountHistory";
import Search from "./pages/Search/Search";
import IncidencesList from "./pages/IncidencesList/IncidencesList";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/community/account"
						element={<CommunityAccount />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/" element={<Home />}></Route>
					<Route
						path="/community/account/history"
						element={<CommunityAccountHistory />}></Route>
					<Route
						path="/incidencia/busqueda"
						element={<Search />}></Route>
					<Route
						path="/comunidad/busqueda"
						element={<Search />}></Route>
					<Route
						path="/comunidad/incidencias/activas"
						element={<IncidencesList />}></Route>
					<Route
						path="/comunidad/incidencias/pendientes"
						element={<IncidencesList />}></Route>
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
