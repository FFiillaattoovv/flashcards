import React from 'react';
import classes from './Profile.module.css';
import {ProfileCard} from "./1-ProfileCard/ProfileCard";
import {List} from "./List";
import {Pagination} from "./Pagination";
import {Range} from "./Range";
import {Search} from "./Search";
import {Header} from "./Header";

type stateForTestProfileType = {
    header: string
}

const stateForTestProfile: stateForTestProfileType = {
    header: 'Packs list Petr’s'
}

function Profile() {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <Header header={stateForTestProfile.header}/>
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
