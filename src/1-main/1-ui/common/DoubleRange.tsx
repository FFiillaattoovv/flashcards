import React from 'react'
import Slider from "antd/lib/slider";
import 'antd/dist/antd.css';

type DoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

export const DoubleRange: React.FC<DoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const onChangeCallback = (value: [number, number]) => {
        onChangeRange && onChangeRange(value)
    }
    // сделать самому, можно подключать библиотеки
    return (
        <Slider style={{width: "500px"}} range={true} value={value} onChange={onChangeCallback} max={5} step={1}/>
    )
};
