import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../../components/Logout/Logout";
import GoogleDrivePicker from "../../components/GoogleDrivePicker/GoogleDrivePicker";

const Profile = () => {
	const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
		useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}
	const accessToken = async () => {
		const token = await getAccessTokenSilently();
		console.log(user, token);
	};
	accessToken();

	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
				<GoogleDrivePicker />
				<Logout />
			</div>
		)
	);
};

export default Profile;
