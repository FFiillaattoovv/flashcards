import React from 'react';
import classes from './Profile.module.css';
import {ProfileCard} from "./1-ProfileCard/ProfileCard";
import {List} from "./List";
import {Pagination} from "./Pagination";
import {Range} from "./Range";
import {Search} from "./Search";
import {Header} from "./Header";

export type EntityListType = Array<string>
export type ProfileDataType = {
    photo: string
    alt: string
    header: string
    description: string
}

type stateForTestProfileType = {
    pageTitle: string
    list: {
        headers: EntityListType
        items: EntityListType
    }
    profileData: ProfileDataType
}

const stateForTestProfile: stateForTestProfileType = {
    pageTitle: 'Packs list Petr’s',
    list: {
        headers: ['Name', 'Cards', 'Last updated', 'Created by', 'Actions'],
        items: ['Pack Name - Name Pack', '4', '18.03.2021', 'Ivan Ivanov', 'Learn'],
    },
    profileData: {
        photo: 'https://us.123rf.com/450wm/axelbueckert/axelbueckert1507/axelbueckert150700010/42097570-happy-young-man-with-big-toothy-smile-isolated-on-white.jpg?ver=6',
        alt: 'User',
        header: 'Petr Ivanov',
        description: 'Front-end developer'
    }
}



function Profile() {

    const headers = stateForTestProfile.list.headers;
    const items = stateForTestProfile.list.items;
    const profileData = stateForTestProfile.profileData;

    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <Header title={stateForTestProfile.pageTitle}/>
                <Search/>
                <List headers={headers} items={items}/>
                <Pagination/>
            </div>
            <div className={classes.sidebar}>
                <ProfileCard profileData={profileData}/>
                <Range/>
            </div>
        </div>
    );
}

export default Profile;
