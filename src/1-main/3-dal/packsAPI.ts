import axios from 'axios';
import {CardPacksType} from "../2-bll/packsReducer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const packsAPI = {
    getPacks(queryString: string) {
        return instance.get<GetPacksResponseType>(`cards/pack?${queryString}`)
    },
    addPack(name: string) {
        return instance.post<GetPacksResponseType>('cards/pack', {cardsPack: {name: name}})
    },
    deletePack(packId: string) {
        return instance.delete<GetPacksResponseType>(`cards/pack?id=${packId}`)
    },
    updatePack(packId: string) {
        return instance.put<GetPacksResponseType>(`cards/pack`, {
            cardsPack: {
                _id: packId,
                name: 'German pack'
            }
        })
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