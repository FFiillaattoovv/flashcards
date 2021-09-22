import classes from "./Profile.module.css";
import React from "react";

export function Range() {
    return (
        <div>
            <span className={classes.numberCards}>Number of cards</span>
            <input type="range" name="range" min="0" max="100" value="50"/>
        </div>
    )
}