import React, {ChangeEvent, useState} from 'react';
import classes from "../2-profile/Profile.module.css";
import {Range} from "../2-profile/Range";
import {Header} from "../2-profile/Header";
import {Table} from "../2-profile/Table";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../1-main/2-bll/store";
import {
    addPackTC,
    CardPacksType,
    getPacksTC, setMinMaxCardsInPack, setPacksCurrentPage,
    setPacksNameSearch, setPacksPageCount,
    setPacksUserId, setSortPacksByDate
} from "../../1-main/2-bll/packsReducer";
import {SearchBar} from "../../1-main/1-ui/common/SearchBar";
import {Redirect} from "react-router-dom";
import {PATH} from "../../1-main/1-ui/routes/Routes";
import {Pagination} from "../../1-main/1-ui/common/Pagination";
import {RangeFilter} from "../../1-main/1-ui/common/RangeFilter";
import {fetchCardsTC, setMinMaxGrade} from "../../1-main/2-bll/cardsReducer";

const Packs = () => {
    const cardPacks = useSelector<AppRootStateType, Array<CardPacksType>>(state => state.packs.cardPacks)
    const userId = useSelector<AppRootStateType, string>(state => state.auth.userId)
    const pages = useSelector<AppRootStateType, number>(state => state.packs.pages)
    const page = useSelector<AppRootStateType, number | null>(state => state.packs.page)
    const pageCount = useSelector<AppRootStateType, number | null>(state => state.packs.pageCount)
    const totalPacks = useSelector<AppRootStateType, number | null>(state => state.packs.cardPacksTotalCount)
    const minCardsCount = useSelector<AppRootStateType, number>(state => state.packs.minCardsCount)
    const maxCardsCount = useSelector<AppRootStateType, number>(state => state.packs.maxCardsCount)
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [minCardValue, setMinCardValue] = useState(minCardsCount)
    const [maxCardValue, setMaxCardValue] = useState(maxCardsCount)

    if (cardPacks.length === 0) {
        return <Redirect to={PATH.PROFILE}/>
    }

    //add new pack
    const addNewPackHandler = () => {
        dispatch(addPackTC())
    }
    //end add new pack

    //get packs personal or all of them
    const getMyPacksHandler = () => {
        dispatch(setPacksUserId(userId))
        dispatch(getPacksTC())
    }
    const getAllPacksHandler = () => {
        dispatch(setPacksUserId(null))
        dispatch(getPacksTC())
    }
    //end get packs personal or all of them

    //search packs by name
    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }
    const onClickSearch = () => {
        dispatch(setPacksNameSearch(searchValue))
        dispatch(getPacksTC())
    }
    const onClickReset = () => {
        setSearchValue('')
        dispatch(setPacksNameSearch(null))
        dispatch(getPacksTC())
    }
    //end search packs by name

    //sort packs by updated date
    const onClickEarliestPacksFirst = () => {
        dispatch(setSortPacksByDate('1updated'))
        dispatch(getPacksTC())
    }
    const onClickLatestPacksFirst = () => {
        dispatch(setSortPacksByDate('0updated'))
        dispatch(getPacksTC())
    }
    //end sort packs by updated date

    //pagination
    //pageCount
    const setPageCountCallback = (pageCount: string) => {
        return () => {
            dispatch(setPacksPageCount(pageCount))
            dispatch(getPacksTC())
        }
    }
    //end page count
    //pages
    const setPage = (page: number) => {
        return () => {
            dispatch(setPacksCurrentPage(page.toString()))
            dispatch(getPacksTC())
        }
    }
    //end pages
    //end pagination

    //range filter by cards number
    const onChangeCardsRangeDouble = ([num1, num2]: number[]) => {
        setMinCardValue(num1)
        setMaxCardValue(num2)
    }

    const onClickTotalCardsRangeFilter = () => {
        dispatch(setMinMaxCardsInPack(minCardValue.toString(), maxCardValue.toString()))
        dispatch(getPacksTC())
    }
    //end range filter by cards number

    return (
        <div className={classes.page}>
            <aside className={classes.sidebar}>
                <div className={classes.profile}>
                    <div style={{padding: "80px"}}>
                        <button onClick={getMyPacksHandler}>My</button>
                        <button onClick={getAllPacksHandler}>All</button>
                    </div>
                </div>
                <RangeFilter minValue={minCardValue}
                             maxValue={maxCardValue}
                             onChangeRangeDouble={onChangeCardsRangeDouble}
                             onClickGradeRangeFilter={onClickTotalCardsRangeFilter}
                             min={minCardsCount}
                             max={maxCardsCount}
                             step={1}
                />
            </aside>
            <div className={classes.content}>
                <header className={classes.header}>
                    <Header title={'Packs list'}/>
                    <div className={classes.headerFeatures}>
                        <SearchBar searchValue={searchValue}
                                   onChangeSearchValue={onChangeSearchValue}
                                   onClickSearch={onClickSearch}
                                   onClickReset={onClickReset}
                        />
                        <button style={{marginLeft: "50px"}} onClick={addNewPackHandler}>Add new pack</button>
                    </div>
                </header>
                <main className={classes.main}>
                    <div className={classes.sortButtons}>
                        <span>Sort by date:</span>
                        <button onClick={onClickEarliestPacksFirst}>Earliest</button>
                        <button onClick={onClickLatestPacksFirst}>Latest</button>
                    </div>
                    <Table headers={['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']} items={cardPacks}/>
                </main>
                <footer className={classes.footer}>
                    <Pagination pageCountArray={['3', '7', '15', '30']}
                                setPageCountCallback={setPageCountCallback}
                                pages={pages}
                                setPage={setPage}
                                totalItems={totalPacks!}
                                currentPage={page!}
                                pageSize={pageCount!}
                    />
                </footer>
            </div>
        </div>
    );
};

export default Packs;