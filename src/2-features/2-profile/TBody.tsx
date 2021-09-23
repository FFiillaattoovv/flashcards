import classes from "./Profile.module.css";
import React from "react";
import {ItemsListType} from "./Profile";

type ListItemPropsType = {
    items: Array<ItemsListType>
}

export function TBody(props: ListItemPropsType) {

    return (
        <>
            {
                props.items.map((item, index) => <tr className={classes.listItem} key={index}>
                    <td>{item['name']}</td>
                    <td>{item['cards']}</td>
                    <td>{item['Last updated']}</td>
                    <td>{item['Created by']}</td>
                    <td><button className={classes.btn}>{item['Actions']}</button></td>
                </tr>)
            }
        </>
    )
}