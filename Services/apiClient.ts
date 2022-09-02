import axios from "axios";

const axiosClient = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/v1`,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

axiosClient.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export { axiosClient };
