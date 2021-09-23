import classes from "./Profile.module.css";
import React, {useState} from "react";

export function Range() {
    const [value, setValue] = useState(50)
    return (
        <div className={classes.range}>
            <div>Number of cards</div>
            <div><span>{value}</span></div>
            <input type="range" name="range" min="0" max="100" value={value} onChange={e => setValue(+e.currentTarget.value)}/>
        </div>
    )
}