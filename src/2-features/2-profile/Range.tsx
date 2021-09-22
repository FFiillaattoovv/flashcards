import classes from "./Profile.module.css";
import React, {useState} from "react";

export function Range() {
    const [value, setValue] = useState(0)
    return (
        <div>
            <span className={classes.numberCards}>Number of cards</span>
            <span>{value}</span>
            <input type="range" name="range" min="0" max="100" value={value} onChange={e => setValue(+e.currentTarget.value)}/>
        </div>
    )
}