import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {Button, Input} from "antd";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <Input style={{width: '200px'}} value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.errorSpan}>{error}</span>
            <Button className={s.btn} onClick={addUser}>
                <span className={s.addBtn}>
                    Add
                </span>
            </Button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
