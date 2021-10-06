import React, {Dispatch, SetStateAction, useState} from "react";
import {useDispatch} from "react-redux";
import {AddCardDataType} from "../../../1-main/3-dal/cardsAPI";
import s from "../Modal.module.css";

export const ModalCard = (props: ModalCardPropsType) => {
    const [questionValue, setQuestionValue] = useState('')
    const [answerValue, setAnswerValue] = useState('')
    const dispatch = useDispatch()

    const sendAddCard = () => {
        const card: AddCardDataType = {
            cardsPack_id: props.cardsPack_id,
            question: questionValue,
            answer: answerValue
        }
        dispatch(props.action({card}))
        props.setModalActive(false)
        setQuestionValue('')
        setAnswerValue('')
    }

    return (
        <div className={s.childrenContainer}>
            <h2>Card info</h2>
            <fieldset className={s.fieldset}>
                <legend>Question</legend>
                <input type="text" value={questionValue}
                       onChange={(e) => setQuestionValue(e.currentTarget.value)}/>
            </fieldset>
            <fieldset className={s.fieldset}>
                <legend>Answer</legend>
                <input type="text" value={answerValue}
                       onChange={(e) => setAnswerValue(e.currentTarget.value)}/>
            </fieldset>
            <button className={s.cancelBtn} onClick={() => props.setModalActive(false)}>Cancel</button>
            <button className={s.saveBtn} onClick={sendAddCard}>Save</button>
        </div>
    )
}

// types
type ModalCardPropsType = {
    cardsPack_id: string
    action: Function
    setModalActive: Dispatch<SetStateAction<boolean>>
}