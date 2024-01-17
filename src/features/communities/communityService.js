import axios from "axios";

const API_URL = "http://localhost:8080/communities";

const getAllCommunities = async () => {
	const token = JSON.parse(localStorage.getItem("token"));
	const response = await axios.get(API_URL, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};

const getCommunityByAddress = async (address) => {
	const token = JSON.parse(localStorage.getItem("token"));

	const res = await axios.get(`${API_URL}/address/?address=${address}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return res.data;
};

const getCommunityById = async (_id) => {
	const token = JSON.parse(localStorage.getItem("token"));

	const res = await axios.get(API_URL + _id, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return res.data;
};

const communityService = {
	getAllCommunities,
	getCommunityByAddress,
	getCommunityById,
};

export default communityService;
