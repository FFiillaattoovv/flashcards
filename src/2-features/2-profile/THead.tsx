import classes from "./Profile.module.css";
import React from "react";
import {EntityListType} from "./Profile";

type ListHeaderPropsType = {
    headers: EntityListType
}

export function THead(props: ListHeaderPropsType) {
    return (
        <tr className={classes.listItem}>
            {props.headers.map(h => <th>{h}</th>)}
        </tr>
    )
}