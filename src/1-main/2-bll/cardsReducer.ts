import {Dispatch} from "redux";
import {cardsAPI} from "../3-dal/cardsAPI";

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
type FetchCardsType = ReturnType<typeof fetchCards>
type SetInitType = ReturnType<typeof setInit>
type ActionsType = FetchCardsType | SetInitType

const initState: any = {
    cards: null as CardType[] | null,
    packUserId: null as string | null,
    init: false
}

export const cardsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'cards/FETCH-CARDS': {
            return {...state, cards: action.cards, packUserId: action.packUserId}
        }
        case 'cards/SET-INIT': {
            return {...state, init: true}
        }
        default:
            return state
    }
}

export const fetchCards = (cards: Array<CardType>, packUserId: string) => {
    return {type: 'cards/FETCH-CARDS', cards, packUserId} as const
}
export const setInit = () => {
    return {type: 'cards/SET-INIT'} as const
}

//thunks
export const fetchCardsTC = (id: string) => async (dispatch: Dispatch<any, null>) => {
    try {
        const response = await cardsAPI.getCards(id)
        dispatch(fetchCards(response.data.cards, response.data.packUserId))
        console.log(response.data.cards)
    } catch(e) {
        console.log(e)
    } finally {
        dispatch(setInit())
    }
}

