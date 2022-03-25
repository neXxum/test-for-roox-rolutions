import React, {useEffect} from 'react'
import style from './Users.module.scss'
import {connect} from "react-redux";
import {actions, getUsers} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/store";
import {UsersType} from "../../types/types";
import Users from "./Users";
import Sort from "./Sort/Sort";
import {Route, Routes} from "react-router-dom";
import UserInfo from "./UserInfo/UserInfo";
import Preloader from "./Preloader/Preloader";

type PropsType = MapPropsType & DispatchPropsType

const UsersContainer: React.FC<PropsType> = ({users, getUsers, setSortUsers, userId, setUserId, sortValue}) => {
    useEffect(() => {
        getUsers()
        setSortUsers('name')
    }, [])

    return (
        <div className={style.main}>
            <div className={style.container}>
                <Sort setSortUsers={setSortUsers} sortValue={sortValue}/>
                <>
                    {users.length < 1 && <div className={style.users}><Preloader/></div>}
                    <Routes>
                        <Route path='/test-for-roox-rolutions' element={<Users users={users} setUserId={setUserId}/>}/>
                        <Route path='/test-for-roox-rolutions/userInfo'
                               element={<UserInfo users={users} userId={userId}/>}/>
                        <Route path='/' element={<Users users={users} setUserId={setUserId}/>}/>
                        <Route path='/userInfo' element={<UserInfo users={users} userId={userId}/>}/>
                    </Routes>
                </>
            </div>
        </div>
    )
}

type MapPropsType = {
    users: Array<UsersType>
    userId: number
    sortValue: 'name' | 'address' | 'company'
}

type DispatchPropsType = {
    getUsers: () => void
    setUserId: (userId: number) => void
    setSortUsers: (sortValue: 'name' | 'address' | 'company') => void
}


let mapStateToProps = (state: AppStateType) => ({
    users: state.usersReducer.users,
    userId: state.usersReducer.userId,
    sortValue: state.usersReducer.sortValue,
})

export default connect(mapStateToProps, {
    getUsers,
    setUserId: actions.setUserId,
    setSortUsers: actions.setSortUsers
})(UsersContainer)