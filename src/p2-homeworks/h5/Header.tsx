import React from 'react'
import {Link} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <>
            <ul className={s.navBar}>
                <li className={s.navList}>
                    <Link className={`${s.link} ${s.red}`} to="/pre-junior">Pre-Junior</Link>
                </li>
                <li className={s.navList}>
                    <Link className={`${s.link} ${s.blue}`} to="/junior">Junior</Link>
                </li>
                <li className={s.navList}>
                    <Link className={`${s.link} ${s.green}`} to="/junior-plus">Junior+</Link>
                </li>
            </ul>


        </>
    )
}

export default Header
