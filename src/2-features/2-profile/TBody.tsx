import classes from "./Profile.module.css";
import React, {useState} from "react";
import {CardPacksType, deletePackTC, updatePackTC} from "../../1-main/2-bll/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../1-main/2-bll/store";
import {NavLink} from "react-router-dom";
import Modal from "../5-modal/Modal";
import {ModalForRemove} from "../5-modal/children/ModalForRemove";
import {ModalForEditing} from "../5-modal/children/ModalForEditing";

type ListItemPropsType = {
    items: Array<CardPacksType>
}


export function TBody(props: ListItemPropsType) {
    const dispatch = useDispatch()
    const loggedUserId = useSelector<AppRootStateType, string>(state => state.auth.userId)
    const [deleteModalActive, setDeleteModalActive] = useState(false)
    const [editModalActive, setEditModalActive] = useState(false)
    const [packId, setPackId] = useState<string | null>(null)
    const [packName, setPackName] = useState<string | number | readonly string[] | undefined>('')

    return (
        <>
            {
                props.items.map((item, index) => {
                    const lastUpdated = item.updated.slice(0, 10)
                    const userName = item.user_name.slice(0, 30)

                    const deletePackRequestHandler = () => {
                        packId && dispatch(deletePackTC(packId))
                    }
                    const deletePackModalHandler = (id?: string) => {
                        id && setPackId(id)
                        setDeleteModalActive(true)
                    }

                    const editPackRequestHandler = (name: string) => {
                        packId && dispatch(updatePackTC(packId, name))
                    }
                    const editPackModalHandler = (id?: string, packName?: string) => {
                        id && setPackId(id)
                        packName && setPackName(packName)
                        setEditModalActive(true)
                    }

                    return <tr className={classes.listItem} key={index}>
                        <td><NavLink to={`/cards/${item._id}`}>{item.name}</NavLink></td>
                        <td>{item.cardsCount}</td>
                        <td>{lastUpdated}</td>
                        <td>{userName}</td>
                        <td>
                            {
                                loggedUserId === item.user_id &&
                                <button
                                    className={classes.btn}
                                    onClick={() => deletePackModalHandler(item._id)}>{'Delete'}
                                </button>
                            }
                            {
                                loggedUserId === item.user_id &&
                                <button
                                    style={{marginLeft: "10px"}}
                                    className={classes.btn}
                                    onClick={() => editPackModalHandler(item._id, item.name)}>{'Edit'}
                                </button>
                            }
                            <button style={{marginLeft: "10px"}} className={classes.btn}>{'Learn'}</button>
                            <Modal active={deleteModalActive} setActive={setDeleteModalActive}>
                                <ModalForRemove action={deletePackRequestHandler}
                                                packId={packId}
                                                setModalActive={setDeleteModalActive}/>
                            </Modal>
                            <Modal active={editModalActive} setActive={setEditModalActive}>
                                <ModalForEditing action={editPackRequestHandler}
                                                 packId={packId}
                                                 packName={packName}
                                                 setModalActive={setEditModalActive}/>
                            </Modal>
                        </td>
                    </tr>
                })
            }
        </>
    )
}