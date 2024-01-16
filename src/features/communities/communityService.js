import axios from "axios";

const API_URL = "https://localhost:8080/communities";
// const token = JSON.parse(localStorage.getItem("token"));

const getAllCommunities = async () => {
	const response = await axios.get(API_URL);
	return response.data;
};

const getCommunityByAddress = async (address) => {
	const res = await axios.get(`${API_URL}/address/?address=${address}`);
	return res.data;
};

const getCommunityById = async (_id) => {
	const res = await axios.get(API_URL + _id);
	return res.data;
};

const communityService = {
	getAllCommunities,
	getCommunityByAddress,
	getCommunityById,
};

export default communityService;
