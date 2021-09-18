import React, {useState} from 'react';
import SuperButton from "../../../1-main/1-ui/common/SuperButton/SuperButton";
import SuperInputText from "../../../1-main/1-ui/common/SuperInputText/SuperInputText";
import style from './SignUp.module.css'

function SignUp() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const error = email ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(email + ' ' + password)
        }
    }

    // const [checked, setChecked] = useState<boolean>(false)
    return (
        <div className={style.signUpContainer}>

            <form className={style.signUpForm}>
                <h3>Sign Up</h3>
                <SuperInputText
                    value={email}
                    onChangeText={setEmail}
                    onEnter={showAlert}
                    error={error}
                />
                <SuperInputText
                    value={password}
                    onChangeText={setPassword}
                    onEnter={showAlert}
                    error={error}
                />
                <div>
                    <SuperButton>Register</SuperButton>
                    <SuperButton>Cancel</SuperButton>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
