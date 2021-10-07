import React, {Dispatch, SetStateAction, useState} from "react";
import {useDispatch} from "react-redux";
import s from "../Modal.module.css";

export const ModalWithOneInput = (props: ModalWithOneInputPropsType) => {
    const [packValue, setPackValue] = useState('')
    const dispatch = useDispatch()

    const sendAddPack = () => {
        dispatch(props.action(packValue))
        props.setModalActive(false)
        setPackValue('')
    }

    return (
        <div className={s.childrenContainer}>
            <h2>Add new pack</h2>
            <fieldset className={s.fieldset}>
                <legend>Name pack</legend>
                <input type="text" value={packValue}
                       onChange={(e) => setPackValue(e.currentTarget.value)}/>
            </fieldset>
            <div className={s.btnContainer}>
                <button className={s.cancelBtn} onClick={() => props.setModalActive(false)}>Cancel</button>
                <button className={s.saveBtn} onClick={sendAddPack}>Save</button>
            </div>
        </div>
    )
}

// types
type ModalWithOneInputPropsType = {
    action: Function
    setModalActive: Dispatch<SetStateAction<boolean>>
}