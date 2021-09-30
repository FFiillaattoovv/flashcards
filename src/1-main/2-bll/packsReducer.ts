import {authAPI} from '../3-dal/loginAPI';
import {Dispatch} from 'redux';
import {EntityListType, ItemsListType, ProfileDataType} from "../../2-features/2-profile/Profile";


const initialState: initialStateType = {
    pageTitle: 'Packs list Petr’s',
    list: {
        headers: ['Name', 'Cards', 'Last updated', 'Created by', 'Actions'],
        items: [
            {
                'name': 'Pack Name - Name Pack',
                'cards': '4',
                'Last updated': '18.03.2021',
                'Created by': 'Ivan Ivanov',
                'Actions': 'Learn'
            },
            {
                'name': 'Name Pack',
                'cards': '7',
                'Last updated': '15.03.2021',
                'Created by': 'Ivan Pupkin',
                'Actions': 'Learn'
            },
            {
                'name': 'Full pack',
                'cards': '22',
                'Last updated': '20.03.2019',
                'Created by': 'Ignatiy Brynkin',
                'Actions': 'Learn'
            },
            {
                'name': 'Pack Name - Name Pack',
                'cards': '5',
                'Last updated': '01.09.2015',
                'Created by': 'Viktor Ivanov',
                'Actions': 'Learn'
            },
            {
                'name': 'Pack Name',
                'cards': '11',
                'Last updated': '22.12.2010',
                'Created by': 'Andrey See',
                'Actions': 'Learn'
            },
            {
                'name': 'Pack Name - Name Pack',
                'cards': '22',
                'Last updated': '20.03.2019',
                'Created by': 'Ignatiy Brynkin',
                'Actions': 'Learn'
            },
            {
                'name': 'English',
                'cards': '54',
                'Last updated': '01.20.2018',
                'Created by': 'Anton Klevapa',
                'Actions': 'Learn'
            },
            {
                'name': 'JavaScript',
                'cards': '33',
                'Last updated': '12.12.2020',
                'Created by': 'John Smite',
                'Actions': 'Learn'
            },
        ]
    },
    profileData: {
        photo: 'https://us.123rf.com/450wm/axelbueckert/axelbueckert1507/axelbueckert150700010/42097570-happy-young-man-with-big-toothy-smile-isolated-on-white.jpg',
        header: 'Petr Ivanov',
        description: 'Front-end developer'
    },
    countPage: 7
}

export const packsReducer = (state: initialStateType = initialState, action: ActionsType) => {
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
        default:
            return state
    }
}

//Actions
export const isLoggedInChange = (isLoggedIn: boolean) => ({type: 'IS-LOGGED-IN-CHANGE', isLoggedIn}) as const
export const setError = (error: string) => ({type: 'SET-ERROR', error}) as const
export const setIsLoading = (isLoading: boolean) => ({type: 'SET-IS-LOADING', isLoading}) as const
export const setAuthUserData = (userId: string, email: string, isAuth: boolean) => ({
    type: 'SET-AUTH-USER-DATA',
    userId: userId,
    email: email,
    isAuth: isAuth,
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
        let {_id, email} = res.data
        dispatch(setAuthUserData(_id, email, true))
    }
}

// Types
type initialStateType = {
    pageTitle: string
    list: {
        headers: EntityListType
        items: Array<ItemsListType>
    }
    profileData: ProfileDataType
    countPage: number
}

type ActionsType = ReturnType<typeof isLoggedInChange>
    | ReturnType<typeof setError>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setAuthUserData>

type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}


