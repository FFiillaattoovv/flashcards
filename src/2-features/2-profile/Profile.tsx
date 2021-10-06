import React, {useEffect} from 'react';
import classes from './Profile.module.css';
import {ProfileCard} from "./1-ProfileCard/ProfileCard";
import {Table} from "./Table";
import {Search} from "./Search";
import {Header} from "./Header";
import {Range} from "./Range";
import {PaginationTest} from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../1-main/2-bll/store";
import {CardPacksType, getPacksTC} from "../../1-main/2-bll/packsReducer";
import Preloader from "../../1-main/1-ui/common/Preloader";


function Profile() {
    const name = useSelector<AppRootStateType, string>(state => state.profile.name)
    const avatar = useSelector<AppRootStateType, string>(state => state.profile.avatar)
    const cardPacks = useSelector<AppRootStateType, Array<CardPacksType>>(state => state.packs.cardPacks)
    const page = useSelector<AppRootStateType, number | null>(state => state.packs.page)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch])

    if (!(name || avatar)) {
        return <Preloader/>
    }

    return (
        <div className={classes.page}>
            <aside className={classes.sidebar}>
                <ProfileCard name={name} avatar={avatar}/>
                <Range/>
            </aside>
            <div className={classes.content}>
                <header className={classes.header}>
                    <Header title={`Packs list ${name}`}/>
                    <Search/>
                </header>
                <main className={classes.main}>
                    <Table headers={['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']} items={cardPacks}/>
                </main>
                <footer className={classes.footer}>
                    <PaginationTest page={page}/>
                </footer>
            </div>
        </div>
    );
}

// Types
export type EntityListType = Array<string>
export type ItemsListType = {
    [key: string]: string
}


export default Profile;
