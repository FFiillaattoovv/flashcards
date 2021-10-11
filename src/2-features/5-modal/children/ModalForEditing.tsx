import React, {Dispatch, SetStateAction, useState} from "react";
import s from "../Modal.module.css";

export const ModalForEditing = (props: ModalForEditingPropsType) => {
    const [packValue, setPackValue] = useState<string | null>(null)

    const updatePackName = () => {
        props.action(packValue)
        props.setModalActive(false)
        setPackValue(null)
    }

    return (
        <div className={s.childrenContainer}>
            <h2>Edit pack name</h2>
            <fieldset className={s.fieldset}>
                <legend>Name pack</legend>
                <input type="text"
                       value={packValue === null ? props.packName : packValue}
                       onChange={(e) => setPackValue(e.currentTarget.value)}/>
            </fieldset>
            <div className={s.btnContainer}>
                <button className={s.cancelBtn} onClick={() => props.setModalActive(false)}>Cancel</button>
                <button className={s.saveBtn} onClick={updatePackName}>Save</button>
            </div>
        </div>
    )
}

// types
type ModalForEditingPropsType = {
    action: Function
    setModalActive: Dispatch<SetStateAction<boolean>>
    packId: string | null
    packName: string | number | readonly string[] | undefined
}