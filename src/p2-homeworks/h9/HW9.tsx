import React from 'react'
import Clock from './Clock'
import s from './hw9.module.css'

function HW9() {
    return (
        <div>
            <h3 className={s.subTitle}>homeworks 9</h3>
            <hr/>
            {/*should work (должно работать)*/}
            <Clock/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}

        </div>
    )
}

export default HW9
