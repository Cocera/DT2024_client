import "./SignIn.scss";
import Login from "../../components/Login/Login";
import Logout from "../../components/Logout/Logout";

const SignIn = () => {
	return (
		<main className="login-main">
			<h1>DT2024</h1>
			<Login />
			<Logout />
		</main>
	);
};

export default SignIn;
