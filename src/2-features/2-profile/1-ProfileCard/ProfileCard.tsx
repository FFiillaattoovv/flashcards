import classes from "../Profile.module.css";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateUserDataTC} from "../../../1-main/2-bll/profileReducer";

type ProfileCardPropsType = {
    name: string
    avatar: string
}

export function ProfileCard(props: ProfileCardPropsType) {
    const [editModeAvatar, setEditModeAvatar] = useState(false)
    const [editModeName, setEditModeName] = useState(false)
    let [avatar, setAvatar] = useState(props.avatar)
    let [name, setName] = useState(props.name)
    const dispatch = useDispatch()

    return (
        <div className={classes.profile}>
            {
                editModeAvatar
                    ? <input type="text"
                             onBlur={() => {
                                 setEditModeAvatar(false)
                                 if (name && avatar) {
                                     dispatch(updateUserDataTC(name, avatar))
                                 }
                             }}
                             value={avatar}
                             onChange={(e) => setAvatar(e.currentTarget.value)}
                             autoFocus={true}/>
                    : <div className={classes.image}
                           onDoubleClick={() => setEditModeAvatar(true)}>&#9998;<img src={avatar} alt="User"/></div>
            }
            {
                editModeName
                    ? <input type="text"
                             onBlur={() => {
                                 setEditModeName(false)
                                 if (name && avatar) {
                                     dispatch(updateUserDataTC(name, avatar))
                                 }
                             }}
                             value={name}
                             onChange={(e) => setName(e.currentTarget.value)}
                             autoFocus={true}/>
                    : <div className={classes.name} onDoubleClick={() => setEditModeName(true)}>&#9998;{name}</div>
            }
            <div className={classes.description}>{'Front-end developer'}</div>
        </div>
    )
}

