import axios from "axios";
import {CardType} from "../2-bll/cardsReducer";

type CardsResponseType = {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
export type AddCardDataType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    rating?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    type?: string
}
export type UpdateCardDataType = {
    _id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    rating?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    type?: string
    comments?: string
}
const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const cardsAPI = {
    getCards(id: string) {
        return instance.get<CardsResponseType>(`cards/card?cardsPack_id=${id}`)
    },
    addCard(card: AddCardDataType) {
        return instance.post(`cards/card`, card)
    },
    deleteCard(id: string) {
        return instance.delete(`cards/card/?id=${id}`)
    },
    updateCard(card: UpdateCardDataType) {
        return instance.put(`cards/card`, card)
    }
}