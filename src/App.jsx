import "./App.css";
import "./fonts.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import CommunityAccount from "./pages/CommunityAccount/CommunityAccount";
import CommunityAccountHistory from "./pages/CommunityAccountHistory/CommunityAccountHistory";
import Search from "./pages/Search/Search";
import IncidencesList from "./pages/IncidencesList/IncidencesList";
import IncidenceInfo from "./pages/IncidenceInfo/IncidenceInfo";
import Simulator from "./pages/Simulator/Simulator";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route
						path="/comunidad/cuenta"
						element={<CommunityAccount />}></Route>
					<Route path="/perfil" element={<Profile />}></Route>
					<Route
						path="/comunidad/cuenta/gastos"
						element={<CommunityAccountHistory />}></Route>
					<Route
						path="/comunidad/cuenta/ingresos"
						element={<CommunityAccountHistory />}></Route>
					<Route path="/incidencia/busqueda" element={<Search />}></Route>
					<Route path="/comunidad/busqueda" element={<Search />}></Route>
					<Route
						path="/comunidad/incidencias/activas"
						element={<IncidencesList />}></Route>
					<Route
						path="/comunidad/incidencias/pendientes"
						element={<IncidencesList />}></Route>

					{/* <Route path="/buscador/comunidad" element={<Search />}></Route> */}
					<Route
						path="/comunidad/incidencias/info/pendiente"
						element={<IncidenceInfo />}></Route>
						<Route
						path="/comunidad/incidencias/info/aprobada"
						element={<IncidenceInfo />}></Route>
					<Route
						path="/simulador/prevision"
						element={<Simulator />}></Route>
					<Route
						path="/simulador/fondos"
						element={<Simulator />}></Route>
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
