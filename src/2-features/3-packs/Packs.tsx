import React, {useEffect} from 'react';
import classes from "../2-profile/Profile.module.css";
import {Range} from "../2-profile/Range";
import {Header} from "../2-profile/Header";
import {Search} from "../2-profile/Search";
import {Table} from "../2-profile/Table";
import {Pagination} from "../2-profile/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../1-main/2-bll/store";
import {CardPacksType, getPacksTC} from "../../1-main/2-bll/packsReducer";


const Packs = () => {
    const page = useSelector<AppRootStateType, number | null>(state => state.packs.page)
    const cardPacks = useSelector<AppRootStateType, Array<CardPacksType>>(state => state.packs.cardPacks)
    const cardPacksTotalCount = useSelector<AppRootStateType, number | null>(state => state.packs.cardPacksTotalCount)
    const maxCardsCount = useSelector<AppRootStateType, number | null>(state => state.packs.maxCardsCount)
    const minCardsCount = useSelector<AppRootStateType, number | null>(state => state.packs.minCardsCount)
    const pageCount = useSelector<AppRootStateType, number | null>(state => state.packs.pageCount)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPacksTC())
    }, [])

    return (
        <div className={classes.page}>
            <aside className={classes.sidebar}>
                <div className={classes.profile}>
                    <button>My</button>
                    <button>All</button>
                </div>
                <Range/>
            </aside>
            <div className={classes.content}>
                <header className={classes.header}>
                    <Header title={'Packs list'}/>
                    <Search/>
                </header>
                <main className={classes.main}>
                    <Table headers={['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']} items={cardPacks}/>
                </main>
                <footer className={classes.footer}>
                    <Pagination pageCount={pageCount}/>
                </footer>
            </div>
        </div>
    );
};

export default Packs;