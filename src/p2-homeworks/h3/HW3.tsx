import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './Greeting.module.css'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState <Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let user = {_id: v1(), name: name}
        setUsers([user, ...users]) // need to fix
    }

    return (
        <div>
            <h3 className={s.subTitle}>homeworks 3</h3>
            <hr/>
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    )
}

export default HW3
