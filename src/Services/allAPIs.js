import { BASE_URL } from './baseURL';
import { commonAPI } from "./commonAPI";

//1. register api call
export const registerAPI = async(body,reqHeader)=>{
    return await commonAPI("post",`${BASE_URL}/Userapp/register/`,body,reqHeader)
}

//2. login api call
export const loginAPI = async(body)=>{
    return await commonAPI("post",`${BASE_URL}/Userapp/token/`,body,"")
}