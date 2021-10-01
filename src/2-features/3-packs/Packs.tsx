import React, {useEffect} from 'react';
import classes from "../2-profile/Profile.module.css";
import {Range} from "../2-profile/Range";
import {Header} from "../2-profile/Header";
import {Search} from "../2-profile/Search";
import {Table} from "../2-profile/Table";
import {Pagination} from "../2-profile/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../1-main/2-bll/store";
import {addPackTC, CardPacksType, getPacksTC} from "../../1-main/2-bll/packsReducer";


const Packs = () => {
    const page = useSelector<AppRootStateType, number | null>(state => state.packs.page)
    const cardPacks = useSelector<AppRootStateType, Array<CardPacksType>>(state => state.packs.cardPacks)
    const userId = useSelector<AppRootStateType, string>(state => state.auth.userId)
    const dispatch = useDispatch()

    const addNewPackHandler = () => {
        dispatch(addPackTC())
    }
    const getMyPacksHandler = () => {
        dispatch(getPacksTC(userId))
    }
    const getAllPacksHandler = () => {
        dispatch(getPacksTC())
    }

    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch])

    return (
        <div className={classes.page}>
            <aside className={classes.sidebar}>
                <div className={classes.profile}>
                    <div style={{padding: "80px"}}>
                        <button onClick={getMyPacksHandler}>My</button>
                        <button onClick={getAllPacksHandler}>All</button>
                    </div>
                </div>
                <Range/>
            </aside>
            <div className={classes.content}>
                <header className={classes.header}>
                    <Header title={'Packs list'}/>
                    <Search/>
                    <button style={{marginLeft: "50px"}} onClick={addNewPackHandler}>Add new pack</button>
                </header>
                <main className={classes.main}>
                    <Table headers={['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']} items={cardPacks}/>
                </main>
                <footer className={classes.footer}>
                    <Pagination pageCount={page}/>
                </footer>
            </div>
        </div>
    );
};

export default Packs;