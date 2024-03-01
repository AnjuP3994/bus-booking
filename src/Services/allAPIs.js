import baseURL from './baseURL';
import { commonAPI } from "./commonAPI";

//1. register api call
export const registerAPI = async(user)=>{
    return await commonAPI("post",`${baseURL}/Userapp/register/`,user,"")
}

//2. login api call
export const loginAPI = async(user)=>{
    return await commonAPI("post",`${baseURL}/Userapp/token/`,user,"")
}