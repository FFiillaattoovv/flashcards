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
export type RequestAddCardType = {
    card: AddCardDataType
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
export type RequestUpdateCardType = {
    card: UpdateCardDataType
}
const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const cardsAPI = {
    getCards(cardsPack_id: string, optionals?: string) {
        let queryString = `cards/card?cardsPack_id=${cardsPack_id}`
        if (optionals) {
            queryString = queryString.concat(optionals)
        }
        return instance.get<CardsResponseType>(queryString)
    },
    addCard(data: RequestAddCardType) {
        return instance.post(`cards/card`, data)
    },
    deleteCard(id: string) {
        return instance.delete(`cards/card/?id=${id}`)
    },
    updateCard(data: RequestUpdateCardType) {
        return instance.put(`cards/card`, data)
    }
}