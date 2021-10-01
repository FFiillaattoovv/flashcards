import React from 'react';
import classes from './Profile.module.css';
import {ProfileCard} from "./1-ProfileCard/ProfileCard";
import {Table} from "./Table";
import {Search} from "./Search";
import {Header} from "./Header";
import {Range} from "./Range";
import {Pagination} from "./Pagination";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../1-main/2-bll/store";


function Profile() {

    // const title = useSelector<AppRootStateType, string>(state => state.packs.pageTitle);
    // const headers = useSelector<AppRootStateType, EntityListType>(state => state.packs.list.headers);
    // const items = useSelector<AppRootStateType, Array<ItemsListType>>(state => state.packs.list.items);
    // const profileData = useSelector<AppRootStateType, ProfileDataType>(state => state.packs.profileData);
    // const countPage = useSelector<AppRootStateType, number>(state => state.packs.countPage);

    return (
        <div className={classes.page}>
            {/*<aside className={classes.sidebar}>*/}
            {/*    <ProfileCard profileData={profileData}/>*/}
            {/*    <Range/>*/}
            {/*</aside>*/}
            {/*<div className={classes.content}>*/}
            {/*    <header className={classes.header}>*/}
            {/*        <Header title={title}/>*/}
            {/*        <Search/>*/}
            {/*    </header>*/}
            {/*    <main className={classes.main}>*/}
            {/*        <Table headers={headers} items={items}/>*/}
            {/*    </main>*/}
            {/*    <footer className={classes.footer}>*/}
            {/*        <Pagination countPage={countPage}/>*/}
            {/*    </footer>*/}
            {/*</div>*/}
        </div>
    );
}

// Types
export type EntityListType = Array<string>
export type ProfileDataType = {
    photo: string
    header: string
    description: string
}
export type ItemsListType = {
    [key: string]: string
}


export default Profile;
