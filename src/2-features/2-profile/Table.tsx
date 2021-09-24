import React from "react";
import {THead} from "./THead";
import {TBody} from "./TBody";
import {EntityListType, ItemsListType} from "./Profile";
import classes from "./Profile.module.css";

type ListPropsType = {
    headers: EntityListType
    items: Array<ItemsListType>
}

export function Table(props: ListPropsType) {
    return (
        <table className={classes.table}>
            <THead headers={props.headers}/>
            <TBody items={props.items}/>
        </table>
    )
}