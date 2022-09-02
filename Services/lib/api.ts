import { axiosClient } from "../apiClient";
import { AxiosRequestConfig } from "axios";

type Prop = {
	config?: AxiosRequestConfig;
	body?: any;
	param?: string;
};

export function GetNFTs({ config }: Prop) {
	return axiosClient.post("/nftcollections", config);
}
