import {Dispatch} from "redux";
import {signUpApi} from "../../2-features/1-auth/2-signUp/sign-up-api";

type initialStateType = {
    isLoggedIn: boolean
    error: null | string
}

const initialState = {
    isLoggedIn: false,
    error: '',
}

export const signUpReducer = (state: initialStateType = initialState, action: ActionsType):initialStateType => {
    switch (action.type) {
        case "SET-IS_LOGGED_IN":
            return {...state, isLoggedIn: action.value}
        case "SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

export const setIsLoggedInAC = (value: boolean) => {
    return {type: 'SET-IS_LOGGED_IN', value} as const
}
export const setSignUpErrorAC = (error: string) => {
    return {type: 'SET-ERROR', error} as const
}


export const signUpTC = (email: string, password: string) => (dispatch: Dispatch<ActionsType, ActionsType>) => {
    signUpApi.createNewAccount(email, password)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            // console.log(res.data)
        })
        .catch(rej=>{
            dispatch(setSignUpErrorAC(rej.response.data.error))
            // console.log(req.response.data.error)
            // alert(req.Error)
        })
}

export type SetIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>
export type SetSignUpErrorACActionType = ReturnType<typeof setSignUpErrorAC>

type ActionsType = SetIsLoggedInActionType | SetSignUpErrorACActionType