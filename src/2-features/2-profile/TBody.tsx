import classes from "./Profile.module.css";
import React from "react";
import {CardPacksType, deletePackTC, updatePackTC} from "../../1-main/2-bll/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../1-main/2-bll/store";
import {NavLink} from "react-router-dom";

type ListItemPropsType = {
    items: Array<CardPacksType>
}


export function TBody(props: ListItemPropsType) {
    const dispatch = useDispatch()
    const loggedUserId = useSelector<AppRootStateType, string>(state => state.auth.userId)

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
                            {loggedUserId === item.user_id && <button className={classes.btn} onClick={deletePackHandler}>{'Delete'}</button>}
                            {loggedUserId === item.user_id && <button style={{marginLeft: "10px"}} className={classes.btn} onClick={editPackHandler}>{'Edit'}</button>}
                            <NavLink to={`/cards/${item._id}`}><button style={{marginLeft: "10px"}}
                                    className={classes.btn}>{'Cards'}</button></NavLink>
                        </td>
                    </tr>
                })
            }
        </>
    )
}