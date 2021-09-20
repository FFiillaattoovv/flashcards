import {Dispatch} from "redux";
import {ForgotRequestType, restoreAPI, SetNewPasswordRequestType} from "./restoreAPI";

type InitStateType = typeof initialState

const initialState = {
    email: null as string | null
}

export const restoreReducer = (state: InitStateType = initialState, action: UnionRestoreAT) => {
    switch (action.type) {
        case "restore/SET-RECEIVER-EMAIL": {
            return {...state, email: action.email}
        }
        case "restore/CLEAR-RECEIVER-EMAIL": {
            return {...state, email: null}
        }
        default:
            return state
    }
}

const recoveryMessage = `<div style="background-color: black; padding: 15px">Password recovery link: <a href="http://localhost:3000/flashcards#/newPassword/$token$">click here</a></div>`
const recoveryMessageAddressFrom = `test-front-admin <ai73a@yandex.by>`
//actions
export const setReceiverEmailAC = (email: string) => {
    return {type: 'restore/SET-RECEIVER-EMAIL', email} as const
}
export const clearReceiverEmailAC = () => {
    return {type: 'restore/CLEAR-RECEIVER-EMAIL'} as const
}
//thunks
export const forgotPasswordTC = (email: string) => async (dispatch: Dispatch<UnionRestoreAT>) => {
    try {
        let requestObj: ForgotRequestType = {
            email: email,
            from: recoveryMessageAddressFrom,
            message: recoveryMessage
        }
        await restoreAPI.forgotPassword(requestObj)
        dispatch(setReceiverEmailAC(email))
    } catch(e) {
        console.log(e)
    }
}

export const setNewPasswordTC = (password: string, token: string) => async (dispatch: Dispatch<UnionRestoreAT>) => {
    try {
        let requestObj: SetNewPasswordRequestType = {
            password: password,
            resetPasswordToken: token
        }
        await restoreAPI.setNewPassword(requestObj)
        dispatch(clearReceiverEmailAC())
    } catch (e) {
        console.log(e)
    }
}

//action types
export type UnionRestoreAT = SetReceiverEmailAT | ClearReceiverEmailAT
type SetReceiverEmailAT = ReturnType<typeof setReceiverEmailAC>
type ClearReceiverEmailAT = ReturnType<typeof clearReceiverEmailAC>