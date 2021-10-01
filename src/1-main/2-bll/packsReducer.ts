import {Dispatch} from 'redux';
import {GetPacksResponseType, packsAPI} from "../3-dal/packsAPI";


const initialState: initialStateType = {
    cardPacks: [],
    cardPacksTotalCount: null,
    maxCardsCount: null,
    minCardsCount: null,
    page: null,
    pageCount: null,
}

export const packsReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-PACKS": {
            return {
                ...state,
                cardPacks: [...action.data.cardPacks],
                cardPacksTotalCount: action.data.cardPacksTotalCount,
                maxCardsCount: action.data.maxCardsCount,
                minCardsCount: action.data.minCardsCount,
                page: action.data.page,
                pageCount: action.data.pageCount,
            }
        }
        default:
            return state
    }
}

// actions
export const setPacksAC = (data: GetPacksResponseType) => ({type: 'SET-PACKS', data} as const)


// thunks
export const getPacksTC = (userId?: string) => (dispatch: Dispatch<ActionsType, null>) => {
    packsAPI.getPacks(userId)
        .then((res) => {
            console.log(res.data)
            dispatch(setPacksAC(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
}

// types
export type CardPacksType = {
    cardsCount: number
    created: string
    more_id: string
    name: string
    private: boolean
    updated: string
    user_id: string
    user_name: string
    _id: string
}
type initialStateType = {
    cardPacks: Array<CardPacksType>
    cardPacksTotalCount: number | null
    maxCardsCount: number | null
    minCardsCount: number | null
    page: number | null
    pageCount: number | null
}

type ActionsType = SetPacksActionType

type SetPacksActionType = ReturnType<typeof setPacksAC>


