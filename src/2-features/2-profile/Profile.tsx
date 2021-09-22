import React from 'react';
import classes from './Profile.module.css';
import {ProfileCard} from "./1-ProfileCard/ProfileCard";
import {List} from "./List";
import {Pagination} from "./Pagination";
import {Range} from "./Range";
import {Search} from "./Search";
import {Header} from "./Header";

export type EntityListType = Array<string>

type stateForTestProfileType = {
    pageTitle: string
    list: {
        headers: EntityListType
        items: EntityListType
    }
}

const stateForTestProfile: stateForTestProfileType = {
    pageTitle: 'Packs list Petr’s',
    list: {
        headers: ['Name', 'Cards', 'Last updated', 'Created by', 'Actions'],
        items: ['Pack Name - Name Pack', '4', '18.03.2021', 'Ivan Ivanov', 'Learn'],
    }
}



function Profile() {

    const headers = stateForTestProfile.list.headers;
    const items = stateForTestProfile.list.items;

    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <Header title={stateForTestProfile.pageTitle}/>
                <Search/>
                <List headers={headers} items={items}/>
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
