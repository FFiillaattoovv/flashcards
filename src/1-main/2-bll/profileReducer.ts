import {Dispatch} from "redux";
import {profileAPI} from "../3-dal/profileAPI";

const initialState: initialStateType = {
    name: '',
    avatar: ''
}

export const profileReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                name: action.name,
                avatar: action.avatar,
            }
        }
        case "SET-UPDATED-USER-DATA": {
            return {
                ...state,
                name: action.name,
                avatar: action.avatar,
            }
        }
        default:
            return state
    }
}

// actions
export const setUserDataAC = (name: string, avatar: string) => ({type: 'SET-USER-DATA', name, avatar} as const)
export const updateUserDataAC = (name: string, avatar: string) => ({type: 'SET-UPDATED-USER-DATA', name, avatar} as const)

// thunks
export const updateUserDataTC = (name: string, avatar: string) => (dispatch: Dispatch<ActionsType, null>) => {
    profileAPI.updateProfile(name, avatar)
        .then((res) => {
            dispatch(updateUserDataAC(res.data.updatedUser.name, res.data.updatedUser.avatar))
        })
        .catch((error) => {
            console.log(error)
        })
}


// types
type initialStateType = {
    name: string
    avatar: string
}

type ActionsType = SetUserDataActionType | UpdateUserDataActionType

export type SetUserDataActionType = ReturnType<typeof setUserDataAC>
type UpdateUserDataActionType = ReturnType<typeof updateUserDataAC>
