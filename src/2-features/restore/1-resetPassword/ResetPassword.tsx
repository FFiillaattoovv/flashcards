import React from 'react';

function ResetPassword() {
    return (
        <div>
            <h1>It-incubator</h1>
            <h2>Forgot your password?</h2>
            <input type="email"/>
            <p>Enter your email address and we will send you further instructions</p>
            <button>Send Instructions</button>
            <p>Did you remember your password?</p>
            <a href={'/login'}>Try logging in</a>
        </div>
    );
}

export default ResetPassword;
