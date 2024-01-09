import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Auth0Provider
		domain="dev-r85is3s0gdynccjy.eu.auth0.com"
		clientId="OTqs67fdnQhgjhJHCNjDXsz15ngesR4D"
		authorizationParams={{
			redirect_uri: window.location.origin + "/profile",
		}}>
		<App />
	</Auth0Provider>
);
