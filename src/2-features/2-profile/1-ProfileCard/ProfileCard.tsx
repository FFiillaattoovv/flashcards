import classes from "../Profile.module.css";
import React from "react";
import {ProfileDataType} from "../Profile";

type ProfileCardPropsType = {
    profileData: ProfileDataType
}

export function ProfileCard(props: ProfileCardPropsType) {
    return (
        <div className={classes.profile}>
            <div className={classes.image}><img src={props.profileData.photo} alt="User"/></div>
            <div className={classes.name}>{props.profileData.header}</div>
            <div className={classes.description}>{props.profileData.description}</div>
        </div>
    )
}

