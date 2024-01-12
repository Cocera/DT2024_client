import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { ConfigProvider } from 'antd';
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ConfigProvider
		theme={{
			token: {
				borderRadius: 16,
				// colorPrimary: '#00ad4a',
				// colorBgContainer: '#f6ffed',
			},
		}}
	>
		<Auth0Provider
			domain="dev-r85is3s0gdynccjy.eu.auth0.com"
			clientId="OTqs67fdnQhgjhJHCNjDXsz15ngesR4D"
			authorizationParams={{
				audience: "http://localhost:8080",
			redirect_uri: window.location.origin + "/profile",
			}}>
			<App />
		</Auth0Provider>
	</ConfigProvider>
);
