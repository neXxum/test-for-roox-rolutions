import {instance} from './api'
import {UsersType} from "../types/types";

export const usersAPI = {
    getUsers() {
        return instance.get<Array<UsersType>>('users')
            .then(res => res.data)
    }
}