import {Dispatch} from 'redux';
import {GetPacksResponseType, packsAPI} from "../3-dal/packsAPI";
import {AppRootStateType} from "./store";


const initialState: initialStateType = {
    cardPacks: [],
    cardPacksTotalCount: null,
    maxCardsCount: null,
    minCardsCount: null,
    page: null,
    pageCount: null,
    pages: 0,
    queryParams: {
        user_id: null,
        packName: null,
        min: null,
        max: null,
        sortPacks: null,
        page: null,
        pageCount: null
    }
}

export const packsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
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
        case "SET-PAGES": {
            return {
                ...state,
                pages: action.pages
            }
        }
        case "SET-PACKS-USER-ID": {
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    user_id: action.id
                }
            }
        }
        case "SET-PACKS-NAME-SEARCH": {
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    packName: action.packName
                }
            }
        }
        case "SET-PACKS-SORT": {
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    sortPacks: action.sortOption
                }
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    page: action.page
                }
            }
        }
        case "SET-PAGE-COUNT": {
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    pageCount: action.pageCount
                }
            }
        }
        case "SET-MIN-MAX-CARDS-IN-PACK": {
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    min: action.min,
                    max: action.max
                }
            }
        }
        default:
            return state
    }
}

// actions
export const setPacksAC = (data: GetPacksResponseType) => ({type: 'SET-PACKS', data} as const)
export const setPacksPages = (pages: number) => ({type: 'SET-PAGES', pages} as const)
export const setPacksUserId = (id: string | null) => ({type: 'SET-PACKS-USER-ID', id} as const)
export const setPacksNameSearch = (packName: string | null) => ({type: 'SET-PACKS-NAME-SEARCH', packName} as const)
export const setSortPacksByDate = (sortOption: string | null) => ({type: 'SET-PACKS-SORT', sortOption} as const)
export const setPacksPageCount = (pageCount: string) => {
    return {type: 'SET-PAGE-COUNT', pageCount} as const
}
export const setPacksCurrentPage = (page: string) => {
    return {type: 'SET-CURRENT-PAGE', page} as const
}
export const setMinMaxCardsInPack = (min: string, max: string) => {
    return {type: 'SET-MIN-MAX-CARDS-IN-PACK', min, max} as const
}


// thunks
export const getPacksTC = () => (dispatch: Dispatch<ActionsType, any>, getState: () => AppRootStateType) => {
    //getting obj with optional query params from state which is empty by default
    const optionalsObj = getState().packs.queryParams

    //creating optional querystring with optional params
    let optionalString = ''
    for (const property in optionalsObj) {
        if (optionalsObj[property] !== null)
            optionalString = optionalString.concat(`&${property}=${optionalsObj[property]}`)
    }
    const finalQueryString = optionalString.slice(1)
    packsAPI.getPacks(finalQueryString)
        .then((res) => {
            dispatch(setPacksAC(res.data))
            dispatch(setPacksPages(res.data.cardPacksTotalCount % res.data.pageCount !== 0 || res.data.cardPacksTotalCount === 0
                ? Math.floor(res.data.cardPacksTotalCount / res.data.pageCount + 1)
                : res.data.cardPacksTotalCount / res.data.pageCount))
        })
        .catch((error) => {
            console.log(error)
        })
}

export const addPackTC = (name: string) => (dispatch: Dispatch<ActionsType, any>) => {
    packsAPI.addPack(name)
        .then(() => {
            dispatch(getPacksTC())
        })
        .catch((error) => {
            console.log(error)
        })
}
export const deletePackTC = (packId: string) => (dispatch: Dispatch<ActionsType, any>) => {
    packsAPI.deletePack(packId)
        .then(() => {
            dispatch(getPacksTC())
        })
        .catch((error) => {
            console.log(error)
        })
}
export const updatePackTC = (packId: string, name: string) => (dispatch: Dispatch<ActionsType, any>) => {
    packsAPI.updatePack(packId, name)
        .then(() => {
            dispatch(getPacksTC())
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
    pages: number
    queryParams: {
        [key: string]: string | null
    }
}

type ActionsType = SetPacksActionType
    | SetPacksUserIdType
    | SetPacksNameSearchType
    | SetSortPacksByDateType
    | SetPacksPagesType
    | SetPacksPageCountType
    | SetPacksCurrentPageType
    | SetMinMaxCardsInPackType

type SetPacksActionType = ReturnType<typeof setPacksAC>
type SetPacksUserIdType = ReturnType<typeof setPacksUserId>
type SetPacksNameSearchType = ReturnType<typeof setPacksNameSearch>
type SetSortPacksByDateType = ReturnType<typeof setSortPacksByDate>
type SetPacksPagesType = ReturnType<typeof setPacksPages>
type SetPacksPageCountType = ReturnType<typeof setPacksPageCount>
type SetPacksCurrentPageType = ReturnType<typeof setPacksCurrentPage>
type SetMinMaxCardsInPackType = ReturnType<typeof setMinMaxCardsInPack>


