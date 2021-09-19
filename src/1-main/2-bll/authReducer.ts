import {authAPI} from '../3-dal/api';
import {Dispatch} from 'redux';


const initialState = {
    isLoggedIn: false,
    error: '',
}

export const authReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-LOGIN":{
            return {
                ...state
            }
        }
        case "IS-LOGGED-IN-CHANGE": {
            return {
                ...state, isLoggedIn: action.isLoggedIn
            }
        }
        case "SET-ERROR": {
            return {
                ...state, error: action.error
            }
        }
        default:
            return state
    }
}

//AC
export const setLogin = () => ({type: 'SET-LOGIN'}) as const
export const isLoggedInChange = (isLoggedIn: boolean) => ({type: 'IS-LOGGED-IN-CHANGE', isLoggedIn}) as const
export const setError = (error: string) => ({type: 'SET-ERROR', error}) as const

//Thunks
export const loginSuccess = (loginData: LoginDataType) => (dispatch: Dispatch<ThunkDispatch, null>) => {
    authAPI.login(loginData.email, loginData.password, loginData.rememberMe)
        .then(() => {
            dispatch(setLogin())
            dispatch(isLoggedInChange(true))
        })
        .catch((error) => {
            dispatch(isLoggedInChange(false))
            dispatch(setError(error.response.data.error))
        })
}

// types
type ActionsType = ReturnType<typeof setLogin>
| ReturnType<typeof isLoggedInChange>
| ReturnType<typeof setError>
type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}
type ThunkDispatch = ActionsType

