import classes from "./Profile.module.css";
import React from "react";
import {EntityListType} from "./Profile";

type ListHeaderPropsType = {
    headers: EntityListType
}

export function ListHeader(props: ListHeaderPropsType) {
    return (
        <div className={classes.list}>
            {props.headers.map(h => <span>{h}</span>)}
        </div>
    )
}