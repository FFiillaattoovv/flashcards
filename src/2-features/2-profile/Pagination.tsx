import classes from "./Profile.module.css";
import React from "react";

export function Pagination() {
    return (
        <div>
            <div className={classes.pagination}><span>1</span></div>
            <div className={classes.pagination2}><span>2</span></div>
            <div className={classes.pagination3}><span>3</span></div>
            <div className={classes.pagination4}><span>4</span></div>
            <div className={classes.pagination5}><span>5</span></div>
            <div className={classes.pagination6}><span>...</span></div>
            <div className={classes.pagination7}><span>10</span></div>
        </div>
    )
}