import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

