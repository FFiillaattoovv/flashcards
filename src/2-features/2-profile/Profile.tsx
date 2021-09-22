import React from 'react';
import classes from './Profile.module.css';
import {ProfileCard} from "./1-ProfileCard/ProfileCard";
import {List} from "./List";
import {Pagination} from "./Pagination";
import {Range} from "./Range";
import {Search} from "./Search";
import {Header} from "./Header";

function Profile() {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <Header/>
                <Search/>
                <List/>
                <Pagination/>
            </div>
            <div className={classes.sidebar}>
                <ProfileCard/>
                <Range/>
            </div>
        </div>
    );
}

export default Profile;
