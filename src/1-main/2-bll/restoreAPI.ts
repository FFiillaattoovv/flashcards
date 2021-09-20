import axios from "axios";

export type ForgotRequestType = {
    email: string
    from: string
    message: string
}

export type ForgotResponseType = {
    info: string
    success: boolean
    answer: boolean
    html: boolean
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
        return instance.post<ForgotResponseType>(`auth/forgot`, requestData)
    },
    setNewPassword(requestData: SetNewPasswordRequestType) {
        return instance.post(`auth/set-new-password`, requestData)
    }
}