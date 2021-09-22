import classes from "../Profile.module.css";
import React from "react";

export function ProfileCard() {
    return (
        <div className={classes.profile}>
            <img
                src="https://us.123rf.com/450wm/axelbueckert/axelbueckert1507/axelbueckert150700010/42097570-happy-young-man-with-big-toothy-smile-isolated-on-white.jpg?ver=6"
                alt="User"/>
            <span className={classes.header}>Petr Ivanov</span>
            <span className={classes.description}>Front-end developer</span>
        </div>
    )
}

