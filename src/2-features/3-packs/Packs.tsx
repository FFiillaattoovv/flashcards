import React from 'react';
import classes from "../2-profile/Profile.module.css";
import {ProfileCard} from "../2-profile/1-ProfileCard/ProfileCard";
import {Range} from "../2-profile/Range";
import {Header} from "../2-profile/Header";
import {Search} from "../2-profile/Search";
import {Table} from "../2-profile/Table";
import {Pagination} from "../2-profile/Pagination";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../1-main/2-bll/store";
import {EntityListType, ItemsListType, ProfileDataType} from "../2-profile/Profile";


const Packs = () => {
    const title = useSelector<AppRootStateType, string>(state => state.packs.pageTitle);
    const headers = useSelector<AppRootStateType, EntityListType>(state => state.packs.list.headers);
    const items = useSelector<AppRootStateType, Array<ItemsListType>>(state => state.packs.list.items);
    const profileData = useSelector<AppRootStateType, ProfileDataType>(state => state.packs.profileData);
    const countPage = useSelector<AppRootStateType, number>(state => state.packs.countPage);

    return (
        <div className={classes.page}>
            <aside className={classes.sidebar}>
                <ProfileCard profileData={profileData}/>
                <Range/>
            </aside>
            <div className={classes.content}>
                <header className={classes.header}>
                    <Header title={title}/>
                    <Search/>
                </header>
                <main className={classes.main}>
                    <Table headers={headers} items={items}/>
                </main>
                <footer className={classes.footer}>
                    <Pagination countPage={countPage}/>
                </footer>
            </div>
        </div>
    );
};

export default Packs;