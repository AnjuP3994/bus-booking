import { BASE_URL } from './baseURL';
import { commonAPI } from "./commonAPI";

//1. user register api call
export const registerAPI = async(body,reqHeader)=>{
    return await commonAPI("post",`${BASE_URL}/Userapp/register/`,body,reqHeader)
}

//2. user login api call
export const loginAPI = async(body)=>{
    return await commonAPI("post",`${BASE_URL}/Userapp/token/`,body,"")
}

//3. bus operator register api call
export const boregisterAPI = async(body,reqHeader)=>{
    return await commonAPI("post",`${BASE_URL}/BusOperator/operatorregister/`,body,reqHeader)
}

//4. bus operator login api call
export const bologinAPI = async(body)=>{
    return await commonAPI("post",`${BASE_URL}/BusOperator/token/`,body,"")
}

// 5.bus operator:add category
export const addcategory = async(body,reqHeader)=>{
    return await commonAPI("post",`${BASE_URL}/BusOperator/category/`,body,reqHeader)
}

// 6.bus operator:get category list

export const getCatgory = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/BusOperator/category/`,"",reqHeader)
}

// 7.bus operator:add bus 

export const addbus = async(categoryid,body,reqheader)=>{
    return await commonAPI("post",`${BASE_URL}/BusOperator/category/${categoryid}/add_bus/`,body,reqheader)
}
