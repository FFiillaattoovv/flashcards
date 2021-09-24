import {Dispatch} from "redux";
import {ForgotRequestType, restoreAPI, SetNewPasswordRequestType} from "./restoreAPI";

type InitStateType = typeof initialState

const initialState = {
    email: null as string | null,
    restoreEmailSendSuccess: false,
    newPasswordSuccess: false
}

export const restoreReducer = (state: InitStateType = initialState, action: UnionRestoreAT) => {
    switch (action.type) {
        case "restore/SET-RECEIVER-EMAIL": {
            return {...state, email: action.email}
        }
        case "restore/EMAIL-SEND-SUCCESS": {
            return {...state, restoreEmailSendSuccess: action.success}
        }
        case "restore/CHANGE-PASSWORD-SUCCESS":
            return {...state, newPasswordSuccess: action.success}
        default:
            return state
    }
}

const recoveryMessage = `<div style="padding: 15px">Password recovery link: <a href="http://localhost:3000/flashcards#/newPassword/$token$">click here</a></div>`
const recoveryMessageAddressFrom = `NEKO ADMIN <ai73a@yandex.by>`
//actions
export const setReceiverEmailAC = (email: string) => {
    return {type: 'restore/SET-RECEIVER-EMAIL', email} as const
}
export const emailSendSuccessAC = (success: boolean) => {
    return {type: 'restore/EMAIL-SEND-SUCCESS', success} as const
}
export const changePasswordSuccessAC = (success: boolean) => {
    return {type: 'restore/CHANGE-PASSWORD-SUCCESS', success} as const
}
//thunks
export const forgotPasswordTC = (email: string) => async (dispatch: Dispatch<UnionRestoreAT, any>) => {
    try {
        let requestObj: ForgotRequestType = {
            email: email,
            from: recoveryMessageAddressFrom,
            message: recoveryMessage
        }
        const response = await restoreAPI.forgotPassword(requestObj)
        dispatch(setReceiverEmailAC(email))
        dispatch(emailSendSuccessAC(response.data.success))
        dispatch(changePasswordSuccessAC(false))
    } catch(e) {
        console.log(e)
    }
}

export const setNewPasswordTC = (password: string, token: string) => async (dispatch: Dispatch<UnionRestoreAT, any>) => {
    try {
        let requestObj: SetNewPasswordRequestType = {
            password: password,
            resetPasswordToken: token
        }
        await restoreAPI.setNewPassword(requestObj)
        dispatch(changePasswordSuccessAC(true))
    } catch (e) {
        console.log(e)
    }
}

//action types
export type UnionRestoreAT = SetReceiverEmailAT | EmailSendSuccessACAT | ChangePasswordSuccessAT
type SetReceiverEmailAT = ReturnType<typeof setReceiverEmailAC>
type EmailSendSuccessACAT = ReturnType<typeof emailSendSuccessAC>
type ChangePasswordSuccessAT = ReturnType<typeof changePasswordSuccessAC>