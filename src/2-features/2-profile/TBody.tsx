import classes from "./Profile.module.css";
import React from "react";
import {CardPacksType, deletePackTC, updatePackTC} from "../../1-main/2-bll/packsReducer";
import {useDispatch} from "react-redux";

type ListItemPropsType = {
    items: Array<CardPacksType>
}


export function TBody(props: ListItemPropsType) {
    const dispatch = useDispatch()

    return (
        <>
            {
                props.items.map((item, index) => {
                    const lastUpdated = item.updated.slice(0, 10)
                    const userName = item.user_name.slice(0, 30)
                    const packId = item._id

                    const deletePackHandler = () => {
                        dispatch(deletePackTC(packId))
                    }
                    const editPackHandler = () => {
                        dispatch(updatePackTC(packId))
                    }

                    return <tr className={classes.listItem} key={index}>
                        <td>{item.name}</td>
                        <td>{item.cardsCount}</td>
                        <td>{lastUpdated}</td>
                        <td>{userName}</td>
                        <td>
                            <button className={classes.btn} onClick={deletePackHandler}>{'Delete'}</button>
                            <button style={{marginLeft: "10px"}} className={classes.btn}
                                    onClick={editPackHandler}>{'Edit'}</button>
                        </td>
                    </tr>
                })
            }
        </>
    )
}