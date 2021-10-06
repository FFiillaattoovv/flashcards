import {Dispatch} from "redux";
import {AddCardDataType, cardsAPI, RequestAddCardType, RequestUpdateCardType} from "../3-dal/cardsAPI";
import {AppRootStateType} from "./store";

type InitStateType = typeof initState
export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}
type QueryParamsObjType = {
    [key: string]: string
}

type FetchCardsType = ReturnType<typeof fetchCards>
type SetInitType = ReturnType<typeof setInit>
type SetPagesType = ReturnType<typeof setPages>
type SetSortCardsType = ReturnType<typeof setSortCards>
type SetPageCountType = ReturnType<typeof setPageCount>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetMinMaxGradeType = ReturnType<typeof setMinMaxGrade>
type SetQuestionSearchType = ReturnType<typeof setQuestionSearch>
type SetAnswerSearchType = ReturnType<typeof setAnswerSearch>
type ActionsType = FetchCardsType | SetInitType | SetSortCardsType | SetPageCountType | SetPagesType | SetCurrentPageType | SetMinMaxGradeType | SetQuestionSearchType | SetAnswerSearchType

const initState = {
    cards: [] as CardType[],
    queryParamsObject: {
        cardAnswer: '',
        cardQuestion: '',
        min: '',
        max: '',
        sortCards: '',
        page: '',
        pageCount: ''
    } as QueryParamsObjType,
    pages: 0 as number,
    packUserId: null as string | null,
    cardsPack_id: '',
    init: false
}

export const cardsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'cards/FETCH-CARDS': {
            return {
                ...state,
                cards: action.cards,
                packUserId: action.packUserId,
                cardsPack_id: action.cardsPack_id
            }
        }
        case 'cards/SET-INIT': {
            return {...state, init: true}
        }
        case "cards/SET-PAGES": {
            return {
                ...state,
                pages: action.pages
            }
        }
        case "cards/SET-QUERY-SORT-CARDS": {
            return {
                ...state,
                queryParamsObject: {
                    ...state.queryParamsObject,
                    sortCards: action.sortCards
                }
            }
        }
        case "cards/SET-QUERY-PAGE-COUNT": {
            return {
                ...state,
                queryParamsObject: {
                    ...state.queryParamsObject,
                    pageCount: action.pageCount
                }
            }
        }
        case "cards/SET-CURRENT-PAGE": {
            return {
                ...state,
                queryParamsObject: {
                    ...state.queryParamsObject,
                    page: action.page
                }
            }
        }
        case "cards/SET-MIN-MAX-GRADE": {
            return {
                ...state,
                queryParamsObject: {
                    ...state.queryParamsObject,
                    min: action.min,
                    max: action.max
                }
            }
        }
        case "cards/SET-QUESTION-SEARCH": {
            return {
                ...state,
                queryParamsObject: {
                    ...state.queryParamsObject,
                    cardQuestion: action.question
                }
            }
        }
        case "cards/SET-ANSWER-SEARCH": {
            return {
                ...state,
                queryParamsObject: {
                    ...state.queryParamsObject,
                    cardAnswer: action.answer
                }
            }
        }
        default:
            return state
    }
}

export const fetchCards = (cards: Array<CardType>, packUserId: string, cardsPack_id: string) => {
    return {type: 'cards/FETCH-CARDS', cards, packUserId, cardsPack_id} as const
}
export const setInit = () => {
    return {type: 'cards/SET-INIT'} as const
}
export const setPages = (pages: number) => {
    return {type: 'cards/SET-PAGES', pages} as const
}
export const setSortCards = (sortCards: '1grade' | '0grade') => {
    return {type: 'cards/SET-QUERY-SORT-CARDS', sortCards} as const
}
export const setPageCount = (pageCount: string) => {
    return {type: 'cards/SET-QUERY-PAGE-COUNT', pageCount} as const
}
export const setCurrentPage = (page: string) => {
    return {type: 'cards/SET-CURRENT-PAGE', page} as const
}
export const setMinMaxGrade = (min: string, max: string) => {
    return {type: 'cards/SET-MIN-MAX-GRADE', min, max} as const
}
export const setQuestionSearch = (question: string) => {
    return {type: 'cards/SET-QUESTION-SEARCH', question} as const
}
export const setAnswerSearch = (answer: string) => {
    return {type: 'cards/SET-ANSWER-SEARCH', answer} as const
}

//thunks
export const fetchCardsTC = (cardsPack_id: string) => async (dispatch: Dispatch<ActionsType, any>, getState: () => AppRootStateType) => {
    try {
        const optionalsObj = getState().cards.queryParamsObject
        if (cardsPack_id !== getState().cards.cardsPack_id) {
            for (const property in optionalsObj) {
                optionalsObj[property] = ''
            }
        }
        let optionalString = ''
        for (const property in optionalsObj) {
            if (optionalsObj[property] !== '')
                optionalString = optionalString.concat(`&${property}=${optionalsObj[property]}`)
        }
        const response = await cardsAPI.getCards(cardsPack_id, optionalString)
        dispatch(fetchCards(response.data.cards, response.data.packUserId, cardsPack_id))
        dispatch(setPages(response.data.cardsTotalCount % response.data.pageCount === 0
            ? response.data.cardsTotalCount / response.data.pageCount
            : Math.floor(response.data.cardsTotalCount / response.data.pageCount + 1)))
        console.log(response.data.cards)
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setInit())
    }
}

export const addCardTC = (data: RequestAddCardType) => async (dispatch: Dispatch<ActionsType, any>) => {
    try {
        await cardsAPI.addCard(data)
        dispatch(fetchCardsTC(data.card.cardsPack_id))
    } catch (e) {
        console.log(e)
    }
}

export const deleteCardTC = (id: string, cardsPack_id: string) => async (dispatch: Dispatch<ActionsType, any>, getState: () => AppRootStateType) => {
    try {
        await cardsAPI.deleteCard(id)
        dispatch(fetchCardsTC(cardsPack_id))
    } catch (e) {
        console.log(e)
    }
}

export const editCardTC = (data: RequestUpdateCardType, cardsPack_id: string) => async (dispatch: Dispatch<ActionsType, any>) => {
    try {
        await cardsAPI.updateCard(data)
        dispatch(fetchCardsTC(cardsPack_id))
    } catch (e) {
        console.log(e)
    }
}
