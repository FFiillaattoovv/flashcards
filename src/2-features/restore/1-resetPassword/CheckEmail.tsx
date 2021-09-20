import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../1-main/2-bll/store";

function CheckEmail() {

    const emailOfReceiver = useSelector<AppRootStateType, string | null>(state => state.restore.email)

    return (
        <div>
            <h1>It-incubator</h1>
            <img src="" alt="letter img"/>
            <h2>Check Email</h2>
            <p>We've sent an Email with instructions to {emailOfReceiver}</p>
        </div>
    );
}

export default CheckEmail;
