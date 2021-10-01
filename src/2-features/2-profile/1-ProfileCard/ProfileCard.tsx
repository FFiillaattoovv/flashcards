import classes from "../Profile.module.css";
import React from "react";

type ProfileCardPropsType = {
    name: string | undefined
    avatar: string | undefined
}

export function ProfileCard(props: ProfileCardPropsType) {
    const avatar = props.avatar ? props.avatar : 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg'
    return (
        <div className={classes.profile}>
            <div className={classes.image}><img src={avatar} alt="User"/></div>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.description}>{'Front-end developer'}</div>
        </div>
    )
}

