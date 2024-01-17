const domain = "http://localhost:8080";
const getUserMetadata = async (getAccessTokenSilently) => {
	try {
		const accessToken = await getAccessTokenSilently({
			authorizationParams: {
				audience: `${domain}`,
			},
		});
		localStorage.setItem("token", JSON.stringify(accessToken));
	} catch (e) {
		console.error(e.message);
	}
};

export default getUserMetadata;
