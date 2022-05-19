import React, { Dispatch} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import {Button} from "antd";

export type DeleteAffairCallbackPropsType = (_id: number) => void

type AffairsPropsType = {
    data: AffairType[]
    setFilter: Dispatch<FilterType>
    deleteAffairCallback: DeleteAffairCallbackPropsType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all');
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');

    return (
        <div>
            {mappedAffairs}
            <Button onClick={setAll}>All</Button>
            <Button onClick={setHigh}>High</Button>
            <Button onClick={setMiddle}>Middle</Button>
            <Button onClick={setLow}>Low</Button>
        </div>
    )
}

export default Affairs

