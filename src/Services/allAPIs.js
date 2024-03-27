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

// 8.user:get bus operator list

export const getOperator = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/Userapp/busoperators/`,"",reqHeader)
}

// 9.bus operator:booking details

export const getBookings = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/BusOperator/ReservationView/`,"",reqHeader)
}

// 10.user:booking history

export const getUserReservations = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/Userapp/UserBuses/`,"",reqHeader)
}


// 11.user:add feedback

export const addFeedback = async(busid,body,reqheader)=>{
    return await commonAPI("post",`${BASE_URL}/Userapp/bus/${busid}/add_review/`,body,reqheader)
}

// 12.admin:login

export const adminloginAPI = async(body)=>{
    return await commonAPI("post",`${BASE_URL}/Manager/token/`,body,"")
}

// 13.admin:get user 
export const getUser = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/Manager/users/`,"",reqHeader)
}

// 14.admin:delete user

export const deleteUser = async(userId,reqHeader)=>{
    return await commonAPI("delete",`${BASE_URL}/Manager/users/${userId}`,{},reqHeader)
}

// 13.admin:get bus

export const getbus = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/Manager/buses/`,"",reqHeader)
}

// 14.admin:delete bus

export const admindeletebus = async(busId,reqHeader)=>{
    return await commonAPI("delete",`${BASE_URL}/Manager/buses/${busId}`,{},reqHeader)
}

// 15:admin:get operators

export const admingetgetoperators = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/Manager/busoperators/`,"",reqHeader)
}

// 15:admin:delete operators

export const admindeleteoperator = async(operatorId,reqHeader)=>{
    return await commonAPI("delete",`${BASE_URL}/Manager/busoperators/${operatorId}`,{},reqHeader)
}

// 16:user:get bus

export const usergetbus = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/Userapp/bus/`,"",reqHeader)
}

// 17:user:reserve bus

export const BookbusAPI = async(busid,body,reqHeader)=>{
    return await commonAPI("post",`${BASE_URL}/Userapp/bus/${busid}/reserve_bus/`,body,reqHeader)
}

// 17:user:payment

export const PaymentAPI = async(resId,reqHeader)=>{
    return await commonAPI("post",`${BASE_URL}/Userapp/UserBuses/${resId}/payment/`,"",reqHeader)
}

// admin:get admin profile

export const getadminprofile = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/Manager/profile/`,"",reqHeader)
}

// admin:update admin profile

export const updateadminprofile = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${BASE_URL}/Manager/profile/`,reqBody,reqHeader)
}




// admin:get feedback

export const admingetfeedback = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/BusOperator/reviews/`,"",reqHeader)
}

// busoperator:get operator profile

export const getoperatorprofile = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/BusOperator/profile/`,"",reqHeader)
}

// busoperator:update profile

export const updateaoperatorprofile = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${BASE_URL}/BusOperator/profile/`,reqBody,reqHeader)
}

// busoperator:get bus

export const getallbus = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/BusOperator/bus/`,"",reqHeader)
}

// operator:update bus

export const updateBus = async(id,reqBody,reqHeader)=>{
    return await commonAPI("put",`${BASE_URL}/BusOperator/bus/${id}/`,reqBody,reqHeader)
}

// user:search bus

export const searchBus = async(reqBody)=>{
    return await commonAPI("post",`${BASE_URL}/Userapp/buses/search/`,reqBody,"")
}

// user:get user profile

export const getUserprofile = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/Userapp/profile/`,"",reqHeader)
}


// user:update profile

export const updateuserprofile = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${BASE_URL}/Userapp/profile/`,reqBody,reqHeader)
}

// 15:operator:delete bus

export const deleteBusapi = async(busId,reqHeader)=>{
    return await commonAPI("delete",`${BASE_URL}/BusOperator/bus/${busId}/`,{},reqHeader)
}


































