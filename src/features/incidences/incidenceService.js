import axios from "axios";

const API_URL = "http://localhost:8080/incidences";

const getAllIncidences = async () => {
	const token = JSON.parse(localStorage.getItem("token"));
	const response = await axios.get(API_URL, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};

const getIncidencesByKeyword = async (keyword) => {
	const token = JSON.parse(localStorage.getItem("token"));

	const res = await axios.get(`${API_URL}/keyword/?keyword=${keyword}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return res.data;
};

const getIncidenceById = async (_id) => {
	const token = JSON.parse(localStorage.getItem("token"));

	const res = await axios.get(`${API_URL}/${_id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return res.data;
};

const incidenceService = {
	getAllIncidences,
	getIncidenceById,
	getIncidencesByKeyword,
};

export default incidenceService;
