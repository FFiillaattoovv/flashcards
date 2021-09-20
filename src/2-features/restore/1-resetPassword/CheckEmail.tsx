import React from 'react';

type CheckEmailPropsType = {
    emailAddress: string
}

function CheckEmail(props: CheckEmailPropsType) {
    return (
        <div>
            <h1>It-incubator</h1>
            <img src="" alt="letter img"/>
            <h2>Check Email</h2>
            <p>We've sent an Email with instructions to {props.emailAddress}</p>
        </div>
    );
}

export default CheckEmail;
