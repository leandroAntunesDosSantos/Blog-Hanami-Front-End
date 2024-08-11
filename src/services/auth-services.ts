import {CLIENT_ID, CLIENT_SECRET} from "../utils/system.ts";
import { CredentialsDTO } from "./auth.ts";
import { requestBackend } from "../utils/requests.ts";
import {AxiosRequestConfig} from "axios";


export function loginRequest(loginData: CredentialsDTO) {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    };
    const requestBody = JSON.stringify({ ...loginData, grant_type: "password" });

    const config:AxiosRequestConfig = {
        method: "POST",
        url: "/login",
        data: requestBody,
        headers: headers,
    };
    console.log(config);
    return requestBackend(config);

}



// export function getAccessToken() {
//     return localStorage.getItem("access_token");
// }
//
// export function saveAccessToken(token: string) {
//     localStorage.setItem("access_token", token);
// }
//
// export function removeAccessToken() {
//     localStorage.removeItem("access_token");
// }
//
// export function isAuthenticated() {
//     const token = getAccessToken();
//     return token !== null;
// }

