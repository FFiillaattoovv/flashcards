import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const profileAPI = {
    updateProfile(name: string, avatar: string) {
        return instance.put<UpdateProfileResponseType>(`auth/me`, {name: name, avatar: avatar})
    },
}

// types
export type UpdateProfileResponseType = {
    updatedUser: {
        name: string
        avatar: string
    }
}