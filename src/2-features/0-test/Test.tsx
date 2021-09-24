import React, {ChangeEvent, useState} from 'react';
import SuperInputText from "../1-auth/2-signUp/sign-up-common/SuperInputText/SuperInputText";
import SuperButton from "../1-auth/2-signUp/sign-up-common/SuperButton/SuperButton";
import SuperCheckbox from "../1-auth/2-signUp/sign-up-common/SuperCheckbox/SuperCheckbox";


const Test = () => {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)

    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    return (
        <div>
            <h1>test</h1>
            <SuperInputText
                value={text}
                onChangeText={setText}
                onEnter={showAlert}
                error={error}
                // spanClassName={s.testSpanError}
            />
            <SuperButton>
                default
            </SuperButton>

            <SuperButton disabled>
                disabled
            </SuperButton>

            <SuperButton
                // red // пропсу с булевым значением не обязательно указывать true
                onClick={showAlert}
            >
                delete {/*// название кнопки попадёт в children*/}
            </SuperButton>

            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            >
                some text
            </SuperCheckbox>


            <SuperCheckbox checked={checked} onChange={testOnChange}/>
        </div>
    );
};

export default Test;