import React from 'react'
import style from './Users.module.scss'
import {UsersType} from "../../types/types";
import {NavLink} from "react-router-dom";

const Users: React.FC<OwnPropsType> = ({users, setUserId}) => {
    return <>
        <div className={style.usersWrapper}>


            {users.length < 1 && <div className={style.users}>Загрузка пользователей</div>}
            <div className={style.users}>
                <h5>Список пользователей</h5>
                <div className={style.userList}>
                    {users.map(user => <div key={user.id} className={style.userContainer}>
                            <div className={style.user}>

                                <div>ФИО: <span>{user.name}</span></div>
                                <div>город: <span>{user.address.city}</span></div>
                                <div>компания: <span>{user.company.name}</span></div>
                            </div>
                            <div className={style.navLink}>
                                <NavLink to={'/userInfo'} onClick={() => setUserId(user.id - 1)}>Подробнее</NavLink>
                            </div>
                        </div>
                    )}
                    <p className={style.usersNumber}>Найдено {users.length} пользователей</p>
                </div>
            </div>
        </div>
    </>
}

type OwnPropsType = {
    users: Array<UsersType>
    setUserId: (userId: number) => void
}

export default Users