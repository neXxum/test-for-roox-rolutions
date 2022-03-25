import React from 'react'
import style from './Sort.module.scss'

type PropsType = {
    setSortUsers: (sortValue: 'name' | 'address' | 'company') => void
    sortValue: 'name' | 'address' | 'company'
}

const Sort: React.FC<PropsType> = ({setSortUsers, sortValue}) => {
    return (
        <div className={style.sortContainer}>
            <div className={style.sort}>
                <p>Сортировка:</p>
                {sortValue === 'name' ? <button onClick={ () => setSortUsers('address')}>по городу</button> : <button onClick={() => setSortUsers('name')}>по имени</button>}
                <button onClick={() => setSortUsers('company')}>по компании</button>
            </div>
        </div>
    )
}

export default Sort