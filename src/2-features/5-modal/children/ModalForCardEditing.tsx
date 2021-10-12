import React, {Dispatch, SetStateAction, useState} from "react";
import s from "../Modal.module.css";

export const ModalForCardEditing = (props: ModalForCardEditingPropsType) => {
    const [questionValue, setQuestionValue] = useState<string | null>(null)
    const [answerValue, setAnswerValue] = useState<string | null>(null)

    const updateCardInput = () => {
        props.action(questionValue, answerValue)
        props.setModalActive(false)
        setQuestionValue(null)
        setAnswerValue(null)
    }

    return (
        <div className={s.childrenContainer}>
            <h2>Card info</h2>
            <fieldset className={s.fieldset}>
                <legend>Question</legend>
                <input type="text" value={questionValue === null ? props.question : questionValue}
                       onChange={(e) => setQuestionValue(e.currentTarget.value)}/>
            </fieldset>
            <fieldset className={s.fieldset}>
                <legend>Answer</legend>
                <input type="text" value={answerValue === null ? props.answer : answerValue}
                       onChange={(e) => setAnswerValue(e.currentTarget.value)}/>
            </fieldset>
            <div className={s.btnContainer}>
                <button className={s.cancelBtn} onClick={() => props.setModalActive(false)}>Cancel</button>
                <button className={s.saveBtn} onClick={updateCardInput}>Save</button>
            </div>

        </div>
    )
}

// types
type ModalForCardEditingPropsType = {
    cardsPack_id: string
    action: Function
    setModalActive: Dispatch<SetStateAction<boolean>>
    question: string | number | readonly string[] | undefined
    answer: string | number | readonly string[] | undefined
}