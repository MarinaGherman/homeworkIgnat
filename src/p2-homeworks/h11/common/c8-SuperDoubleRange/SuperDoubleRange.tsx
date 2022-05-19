import React from 'react'
import 'antd/dist/antd.css';
import { Slider } from 'antd';



type SuperDoubleRangePropsType = {
    onChange?: (value: [number, number]) => void
    onAfterChange?: (value: [number, number]) => void
    value?: [number, number]
      // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        //onChangeRange, value,
        // min, max, step, disable, ...
        onAfterChange,
        onChange,
        value,
    }
) => {

    return (
        <>
            <Slider
                range
                step={1}
                defaultValue={value}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />
        </>
    )
}

export default SuperDoubleRange
