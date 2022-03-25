import React, {useState} from 'react'
import style from './UserInfo.module.scss'
import {UsersType} from "../../../types/types";
import UserInfoChange from "./UserInfoChangeForm/UserInfoChangeForm";

type OwnPropsType = {
    users: Array<UsersType>
    userId: number
}

const UserInfo: React.FC<OwnPropsType> = ({users, userId}) => {
    const [editMode, setEditMode] = useState(true)

    const disabled = () => {
        setEditMode(!editMode)
    }

    return (
        <div className={style.infoContainer}>
            <div className={style.title}>
                <h5>Профиль пользователя</h5>
                <button onClick={disabled}>Редактировать</button>
            </div>
            <UserInfoChange users={users} userId={userId} editMode={editMode}/>
            <div className={style.button}></div>
        </div>
    )
}

export default UserInfo