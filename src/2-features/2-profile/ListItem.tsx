import classes from "./Profile.module.css";
import React from "react";
import {EntityListType} from "./Profile";

type ListItemPropsType = {
    items: EntityListType
}

export function ListItem(props: ListItemPropsType) {
    return (
        <div className={classes.item}>
            {props.items.map(i => <span>{i}</span>)}
        </div>
    )
}