import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../1-main/2-bll/store";
import style from '../Restore.module.css';

function CheckEmail() {

    const emailOfReceiver = useSelector<AppRootStateType, string | null>(state => state.restore.email)

    return (
        <div className={style.restoreContainer}>
            <div className={style.restoreForm}>
                <h3>Check Email</h3>
                <img src="" alt="letter img"/>
                <p>We've sent an Email with instructions to {emailOfReceiver}</p>
            </div>
        </div>
    );
}

export default CheckEmail;
