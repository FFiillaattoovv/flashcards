import axios from "axios";

export type ForgotRequestType = {
    email: string
    from: string
    message: string
}

export type SetNewPasswordRequestType = {
    password: string
    resetPasswordToken: string
}

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const restoreAPI = {
    forgotPassword(requestData: ForgotRequestType) {
        return instance.post(`auth/forgot`, requestData)
    },
    setNewPassword(requestData: SetNewPasswordRequestType) {
        return instance.post(`auth/set-new-password`, requestData)
    }
}