import React from 'react'
import s from './Preloader.module.scss'
import preloader from '../../../assets/img/loader.svg'

const Preloader: React.FC = () => {
    return <div className={s.preloader}>
        <img src={preloader} />
    </div>
}

export default Preloader