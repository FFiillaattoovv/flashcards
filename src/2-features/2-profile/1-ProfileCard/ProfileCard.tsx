import classes from "../Profile.module.css";
import React from "react";
import {ProfileDataType} from "../Profile";

type ProfileCardPropsType = {
    profileData: ProfileDataType
}

export function ProfileCard(props: ProfileCardPropsType) {
    return (
        <div className={classes.profile}>
            <img src={props.profileData.photo} alt={props.profileData.alt}/>
            <span className={classes.header}>{props.profileData.header}</span>
            <span className={classes.description}>{props.profileData.description}</span>
        </div>
    )
}

