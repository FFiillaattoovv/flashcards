import {authAPI} from '../3-dal/loginAPI';
import {Dispatch} from 'redux';
import {setUserDataAC, SetUserDataActionType} from "./profileReducer";


const initialState = {
    userId: '',
    email: '',
    isAuth: false,
    isLoggedIn: false,
    error: '',
    isLoading: false,
    isInitialized: false
}

export const authReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
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
        case "SET-IS-LOADING": {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        case "SET-AUTH-USER-DATA": {
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                isAuth: action.isAuth
            }
        }
        case "SET-IS-INITIALIZED": {
            return {...state, isInitialized: action.isInit}
        }
        default:
            return state
    }
}

//AC
export const isLoggedInChange = (isLoggedIn: boolean) => ({type: 'IS-LOGGED-IN-CHANGE', isLoggedIn}) as const
export const setError = (error: string) => ({type: 'SET-ERROR', error}) as const
export const setIsLoading = (isLoading: boolean) => ({type: 'SET-IS-LOADING', isLoading}) as const
export const setAuthUserData = (userId: string, email: string, isAuth: boolean) => ({
    type: 'SET-AUTH-USER-DATA',
    userId: userId,
    email: email,
    isAuth: isAuth
}) as const
export const setIsInitialized = (isInit: boolean) => ({type: 'SET-IS-INITIALIZED', isInit}) as const

//Thunks
export const loginSuccess = (loginData: LoginDataType) => (dispatch: Dispatch<ActionsType, null>) => {
    dispatch(setIsLoading(true))
    authAPI.login(loginData.email, loginData.password, loginData.rememberMe)
        .then((res) => {
            dispatch(isLoggedInChange(true))
            dispatch(setIsLoading(false))
            // dispatch(getMe())
            dispatch(setAuthUserData(res.data._id, res.data.email, true))
            dispatch(setUserDataAC(res.data.name, res.data.avatar))
            dispatch(setError(''))
        })
        .catch(() => {
            dispatch(isLoggedInChange(false))
            dispatch(setIsLoading(false))
        })
}
export const logoutSuccess = () => (dispatch: Dispatch<ActionsType, null>) => {
    dispatch(setAuthUserData('', '', false))
    dispatch(setUserDataAC('', ''))
    authAPI.logout()
        .then(() => {
        })
        .catch((error) => {
            dispatch(setError(error.response.data.error))
        })
}
export const getMe = () => async (dispatch: any) => {
    try {
        const res = await authAPI.me()
        let {_id, email} = res.data
        dispatch(setAuthUserData(_id, email, true))
        dispatch(setUserDataAC(res.data.name, res.data.avatar))
    } catch(e) {
        console.log(e)
    } finally {
        dispatch(setIsInitialized(true))
    }


}
// types
type ActionsType = ReturnType<typeof isLoggedInChange>
    | ReturnType<typeof setError>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setAuthUserData>
    | SetUserDataActionType
    | ReturnType<typeof setIsInitialized>

type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}


