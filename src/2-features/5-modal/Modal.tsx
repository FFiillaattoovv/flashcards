import React, {Dispatch, ReactChild, SetStateAction} from 'react';
import s from "./Modal.module.css";


const Modal = (props: ModalPropsType) => {

    return (
        <div className={props.active ? `${s.modal} ${s.active}` : `${s.modal}`}
             onClick={() => {props.setActive(false)}}>
            <div className={props.active ? `${s.modalContent} ${s.active}` : `${s.modalContent}`}
                 onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;

// types

type ModalPropsType = {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
    children: ReactChild
}