import {authAPI} from '../3-dal/loginAPI';
import {Dispatch} from 'redux';


const initialState = {
    userId: '',
    email: '',
    isAuth: false,
    isLoggedIn: false,
    error: '',
    isLoading: false,
    name: '' as string | undefined,
    avatar: '' as string | undefined,
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
                isAuth: action.isAuth,
                name: action.name,
                avatar: action.avatar,
            }
        }
        default:
            return state
    }
}

//AC
export const isLoggedInChange = (isLoggedIn: boolean) => ({type: 'IS-LOGGED-IN-CHANGE', isLoggedIn}) as const
export const setError = (error: string) => ({type: 'SET-ERROR', error}) as const
export const setIsLoading = (isLoading: boolean) => ({type: 'SET-IS-LOADING', isLoading}) as const
export const setAuthUserData = (userId: string, email: string, isAuth: boolean, name?: string, avatar?: string) => ({
    type: 'SET-AUTH-USER-DATA',
    userId: userId,
    email: email,
    isAuth: isAuth,
    name: name,
    avatar: avatar,
}) as const

//Thunks
export const loginSuccess = (loginData: LoginDataType) => (dispatch: Dispatch<ActionsType, null>) => {
    dispatch(setIsLoading(true))
    authAPI.login(loginData.email, loginData.password, loginData.rememberMe)
        .then(() => {
            dispatch(isLoggedInChange(true))
            dispatch(setIsLoading(false))
            dispatch(getMe())
            dispatch(setError(''))
        })
        .catch(() => {
            dispatch(isLoggedInChange(false))
            dispatch(setIsLoading(false))
        })
}
export const logoutSuccess = () => (dispatch: Dispatch<ActionsType, null>) => {
    authAPI.logout()
        .then(() => {
            dispatch(setAuthUserData('', '', false))
        })
        .catch((error) => {
            dispatch(setError(error.response.data.error))
        })
}
export const getMe = () => {
    return async (dispatch: any) => {
        const res = await authAPI.me()
        let {_id, email, name, avatar} = res.data
        dispatch(setAuthUserData(_id, email, true, name, avatar))
    }
}
// types
type ActionsType = ReturnType<typeof isLoggedInChange>
    | ReturnType<typeof setError>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setAuthUserData>

type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}


