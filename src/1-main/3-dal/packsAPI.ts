import axios from 'axios';
import {CardPacksType} from "../2-bll/packsReducer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const packsAPI = {
    getPacks() {
        return instance.get<GetPacksResponseType>('cards/pack')
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.get<LoginResponseType>('auth/login')
    },
    logout() {
        return instance.delete<InfoResponseType>('auth/me')
    },
    me() {
        return instance.post<ResponseType>('auth/me', {})
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


export type LoginResponseType = {
    avatar: string,
    created: string,
    deviceTokens: DeviceTokenType [],
    email: string,
    isAdmin: boolean,
    name: string,
    publicCardPacksCount: number,
    rememberMe: boolean,
    token: string,
    tokenDeathTime: number,
    updated: string,
    verified: boolean,
    __v: number,
    _id: string,
}
type DeviceTokenType = {
    _id: string,
    device: string,
}
export type InfoResponseType = {
    info: string,
    error?: string
}
export type ResponseType = UserType & {
    created: string,
    deviceTokens?: DeviceTokenType [],
    isAdmin: boolean,
    rememberMe: boolean,
    token: string,
    tokenDeathTime: number,
    updated: string,
    verified: boolean,
    error?: string,
}
export type UserType = {
    _id: string,
    email: string,
    name: string,
    avatar: string,
    publicCardPacksCount: number,
}