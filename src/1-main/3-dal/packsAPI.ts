import axios from 'axios';
import {CardPacksType} from "../2-bll/packsReducer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const packsAPI = {
    getPacks(userId?: string) {
        const id = userId ? `&user_id=${userId}` : ''
        return instance.get<GetPacksResponseType>(`cards/pack?pageCount=8${id}`)
    },
    addPack() {
        return instance.post<GetPacksResponseType>('cards/pack', {cardsPack: {name: 'English pack'}})
    },
    deletePack(packId: string) {
        return instance.delete<GetPacksResponseType>(`cards/pack?id=${packId}`)
    },
}

// types
export type GetPacksResponseType = {
    cardPacks: Array<CardPacksType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}