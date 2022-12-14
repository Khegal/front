import { axiosClient } from "../apiClient";
import { AxiosRequestConfig } from "axios";

type Prop = {
    config?: AxiosRequestConfig;
    body?: any;
    params?:any;
}

export function SignUp({config, body}: Prop) {
    return axiosClient.post("localhost:5000/create", body, config)
}

export function SignIn({config, body}: Prop) {
    return axiosClient.post("/signIn", body, config)
}

export function Verify({config, body}: Prop) {
    return axiosClient.post("/approve", body, config)
}

export function ForgotPasswordOtp({config, body}: Prop) {
    return axiosClient.post("/", body, config)
}

export function ForgotPasswordChange({config, body}: Prop) {
    return axiosClient.post("/", body, config)
}


