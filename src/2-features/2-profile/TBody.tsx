import classes from "./Profile.module.css";
import React from "react";
import {CardPacksType} from "../../1-main/2-bll/packsReducer";

type ListItemPropsType = {
    items: Array<CardPacksType>
}

export function TBody(props: ListItemPropsType) {

    return (
        <>
            {
                props.items.map((item, index) => {
                    const lastUpdated = item.updated.slice(0, 10)
                    const userName = item.user_name.slice(0, 35)
                    return <tr className={classes.listItem} key={index}>
                        <td>{item.name}</td>
                        <td>{item.cardsCount}</td>
                        <td>{lastUpdated}</td>
                        <td>{userName}</td>
                        <td>
                            <button className={classes.btn}>{'Learn'}</button>
                        </td>
                    </tr>
                })
            }
        </>
    )
}