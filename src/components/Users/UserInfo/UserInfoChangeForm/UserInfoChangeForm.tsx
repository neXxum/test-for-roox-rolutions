import React from 'react'
import style from './UserInfoChangeForm.module.scss'
import {UsersType} from "../../../../types/types";
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {createField, Input} from "../../../common/FormControl/FormControl";
import {required} from "../../../../utils/utils";

type UserInfoChangeValuesType = {
    name: string
    username: string
    email: string
    street: string
    city: string
    zipcode: string
    phone: string
    website: string
}

type UserInfoChangeValuesTypeKeys = Extract<keyof UserInfoChangeValuesType, string>

type OwnPropsType = {
    users: Array<UsersType>
    userId: number
    editMode: boolean
}

const UserInfoChangeForm: React.FC<InjectedFormProps<UserInfoChangeValuesType, OwnPropsType> & OwnPropsType> = ({
                                                                                                                    handleSubmit,
                                                                                                                    error,
                                                                                                                    users,
                                                                                                                    userId,
                                                                                                                    editMode
                                                                                                                }) => {
    return <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.fieldsContainer}>
            <div className={style.first}>
                <p>Name</p> {createField<UserInfoChangeValuesTypeKeys>(users[userId].name, 'name', [required], Input, editMode)}
            </div>
            <div>
                <p>User
                    name</p>{createField<UserInfoChangeValuesTypeKeys>(users[userId].username, 'username', [required], Input, editMode)}
            </div>
            <div>
                <p>E-mail</p> {createField<UserInfoChangeValuesTypeKeys>(users[userId].email, 'email', [required], Input, editMode)}
            </div>
            <div>
                <p>Street</p> {createField<UserInfoChangeValuesTypeKeys>(users[userId].address.street, 'street', [required], Input, editMode)}
            </div>
            <div>
                <p>City</p> {createField<UserInfoChangeValuesTypeKeys>(users[userId].address.city, 'city', [required], Input, editMode)}
            </div>
            <div>
                <p>Zip
                    code</p> {createField<UserInfoChangeValuesTypeKeys>(users[userId].address.zipcode, 'zipcode', [required], Input, editMode)}
            </div>
            <div>
                <p>Phone</p> {createField<UserInfoChangeValuesTypeKeys>(users[userId].phone, 'phone', [required], Input, editMode)}
            </div>
            <div>
                <p>Website</p> {createField<UserInfoChangeValuesTypeKeys>(users[userId].website, 'website', [required], Input, editMode)}
            </div>
            <div>
                <p>Comment</p> <Field className={style.comment} name='comment' type='text' component='input'
                                      placeholder='' disabled={editMode}/>
            </div>
        </div>
        <div className={style.buttonContainer}>
            <button disabled={editMode} className={editMode ? style.buttonDisabled : style.buttonEnabled}>Отправить
            </button>
        </div>
    </form>
}

const UserInfoChangeReduxForm = reduxForm<UserInfoChangeValuesType, OwnPropsType>({
    form: 'userInfoChange'
})(UserInfoChangeForm)

const UserInfoChange: React.FC<OwnPropsType> = ({users, userId, editMode}) => {
    const onSubmit = (formData: UserInfoChangeValuesType) => {
        console.log(JSON.stringify(formData))
    }

    if (users.length < 1) return <div></div>

    return (
        <div className={style.container}>
            <UserInfoChangeReduxForm onSubmit={onSubmit} users={users} userId={userId}
                                     editMode={editMode}/>
        </div>
    )
}

export default UserInfoChange