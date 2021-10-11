import React, {Dispatch, SetStateAction} from "react";
import s from "../Modal.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../1-main/2-bll/store";
import {CardPacksType} from "../../../1-main/2-bll/packsReducer";

export const ModalForRemove = (props: ModalForRemovePropsType) => {
    const cardPacks = useSelector<AppRootStateType, Array<CardPacksType>>(state => state.packs.cardPacks)
    const card = cardPacks.find(card => card._id === props.packId)

    const deletePack = () => {
        props.setModalActive(false)
        props.action()
    }

    return (
        <div className={s.childrenContainer}>
            <h2>Delete pack</h2>
            <p style={{fontSize: "16px"}}>{`Do you really want to remove ${card && card.name}?`}</p>
            <p style={{fontSize: "16px"}}> All cards will be excluded from this course.</p>
            <div className={s.btnContainer}>
                <button className={s.cancelBtn} onClick={() => props.setModalActive(false)}>Cancel</button>
                <button className={s.saveBtn} onClick={deletePack}>Delete</button>
            </div>
        </div>
    )
}

// types
type ModalForRemovePropsType = {
    action: Function
    setModalActive: Dispatch<SetStateAction<boolean>>
    packId: string | null
}