import React from "react";
import styles from "../../../2-features/3-cards/Cards.module.css";
import {DoubleRange} from "./DoubleRange";

type RangeFilterPropsType = {
    minValue: number
    maxValue: number
    onChangeRangeDouble: ([num1, num2]: number[]) => void
    onClickGradeRangeFilter: () => void
    min?: number
    max?: number
    step?: number
}

export const RangeFilter = (props: RangeFilterPropsType) => {
    return  (
        <div className={styles.rangeContainer}>
            <span>{props.minValue}</span>
            <DoubleRange value={[props.minValue, props.maxValue]} onChangeRange={props.onChangeRangeDouble} min={props.min} max={props.max} step={props.step}/>
            <span>{props.maxValue}</span>
            <button onClick={props.onClickGradeRangeFilter}>Filter</button>
        </div>
    )
}