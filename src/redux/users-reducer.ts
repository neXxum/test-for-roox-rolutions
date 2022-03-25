import {UsersType} from "../types/types";
import {BaseThunkType, InferActionsType} from "./store";
import {usersAPI} from "../api/users-api";

let initialState = {
    users: [] as Array<UsersType>,
    userId: 0 as number,
    sortValue: 'name' as 'name' | 'address' | 'company'
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/USERS_REDUCER/SET_USERS':
            return {
                ...state,
                users: action.users.map(el => el).sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 0
                })
            }
        case 'APP/USERS_REDUCER/SET_USER_ID':
            return {
                ...state,
                userId: action.userId
            }
        case 'APP/USERS_REDUCER/SET_SORT_USERS':
            return {
                ...state,
                users: state.users.map(el => el).sort((a, b) => {
                    if (action.sortValue === 'name') {
                        if (a.name > b.name) return 1
                        if (a.name < b.name) return -1
                    }
                    if (action.sortValue === 'address') {
                        if (a.address.city > b.address.city) return 1
                        if (a.address.city < b.address.city) return -1
                    }
                    if (action.sortValue === 'company') {
                        if (a.company.name > b.company.name) return 1
                        if (a.company.name < b.company.name) return -1
                    }


                    return 0
                }),
                sortValue: action.sortValue
            }
        default:
            return state
    }
}

export const actions = {
    setUsers: (users: Array<UsersType>) => ({
        type: 'APP/USERS_REDUCER/SET_USERS',
        users
    } as const),

    setUserId: (userId: number) => ({
        type: 'APP/USERS_REDUCER/SET_USER_ID',
        userId
    } as const),

    setSortUsers: (sortValue: 'name' | 'address' | 'company') => ({
        type: 'APP/USERS_REDUCER/SET_SORT_USERS',
        sortValue
    } as const)
}

export const getUsers = (): ThunkType => async (dispatch) => {
    let data = await usersAPI.getUsers()
    dispatch(actions.setUsers(data))
}

export default usersReducer
