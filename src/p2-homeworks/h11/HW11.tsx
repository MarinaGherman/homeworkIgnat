import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './hw11.module.css'

function HW11() {
    const [value1, setValue1] = useState(2)
    const [value2, setValue2] = useState<[number, number]>([10, 20])

    const handleReverseChange =(values: any) => {
        setValue2(values)
    }

    return (
        <div>
            <h3 className={s.subTitle}>homeworks 11</h3>
            <hr/>
            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                   onChange={(event) => {
                       // @ts-ignore
                       setValue1( event.target.value)
                   }}
                />
            </div>

            <div>
                <span>{value2[0]}</span>
                <SuperDoubleRange
                    value={value2}
                    onChange={handleReverseChange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
