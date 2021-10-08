import React from "react";
import {THead} from "./THead";
import {TBody} from "./TBody";
import {EntityListType} from "./Profile";
import classes from "./Profile.module.css";
import {CardPacksType} from "../../1-main/2-bll/packsReducer";

type ListPropsType = {
    headers: EntityListType
    items: Array<CardPacksType>
}

export function Table(props: ListPropsType) {
    return (
        <table className={classes.table}>
            <THead headers={props.headers}/>
            <TBody items={props.items}/>
        </table>
    )
}