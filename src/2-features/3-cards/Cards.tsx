import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addCardTC,
    CardType,
    deleteCardTC,
    editCardTC,
    fetchCardsTC,
    setAnswerSearch,
    setCurrentPage,
    setMinMaxGrade,
    setPageCount,
    setQuestionSearch,
    setSortCards
} from "../../1-main/2-bll/cardsReducer";
import {AppRootStateType} from "../../1-main/2-bll/store";
import styles from './Cards.module.css'
import {useParams} from "react-router-dom";
import {UpdateCardDataType} from "../../1-main/3-dal/cardsAPI";
import {SearchBar} from "../../1-main/1-ui/common/SearchBar";
import {Pagination} from "../../1-main/1-ui/common/Pagination";
import {formatDate} from "../../1-main/1-ui/utils/formatDate";
import {RangeFilter} from "../../1-main/1-ui/common/RangeFilter";
import Modal from "../5-modal/Modal";
import {ModalWithTwoInput} from "../5-modal/children/ModalWithTwoInput";


export function Cards() {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.cards.cards)
    const init = useSelector<AppRootStateType, boolean>(state => state.cards.init)
    const loggedUserId = useSelector<AppRootStateType, string>(state => state.auth.userId)
    const packUserId = useSelector<AppRootStateType, string | null>(state => state.cards.packUserId)
    const pages = useSelector<AppRootStateType, number>(state => state.cards.pages)
    const currentPage = useSelector<AppRootStateType, number>(state => state.cards.currentPage)
    const pageCount = useSelector<AppRootStateType, number>(state => state.cards.pageCount)
    const cardsTotalCount = useSelector<AppRootStateType, number>(state => state.cards.cardsTotalCount)
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const searchOptions = ['by question', 'by answer']
    const [searchOption, setSearchOption] = useState(searchOptions[0])
    const [searchValue, setSearchValue] = useState('')
    const {cardsPack_id} = useParams<{ cardsPack_id: string }>()

    const [modalActive, setModalActive] = useState(false)


    useEffect(() => {
        dispatch(fetchCardsTC(cardsPack_id))
    }, [dispatch, cardsPack_id])

    if (!init) {
        return <div>Loading</div>
    }

    //CRUD on cards
    const addCard = () => {
        setModalActive(true)
    }

    const deleteCard = (cardId: string, packId: string) => {
        return () => {
            dispatch(deleteCardTC(cardId, packId))
        }
    }

    const editCard = (cardId: string, packId: string) => {
        let card: UpdateCardDataType = {
            _id: cardId,
            question: 'Updated question full of confusion',
            answer: 'Updated Answer but simple as hell'
        }
        return () => {
            dispatch(editCardTC({card}, packId))
        }
    }
    //end CRUD on cards

    //cardsJSXElements
    let cardsElements = cards.map(card => {
        return <tr key={card._id}>
            <td>{card.question}</td>
            <td>{card.answer}</td>
            <td>{formatDate(card.updated)}</td>
            <td>{card.grade}</td>
            {loggedUserId === packUserId ? <td>
                <button onClick={deleteCard(card._id, card.cardsPack_id)}>Delete</button>
                <button onClick={editCard(card._id, card.cardsPack_id)}>Edit</button>
            </td> : <td></td>}
        </tr>
    })
    //end cardsJSXElements

    //sort by grade
    const sortHighGrade = () => {
        dispatch(setSortCards('1grade'))
        dispatch(fetchCardsTC(cardsPack_id))
    }
    const sortLowGrade = () => {
        dispatch(setSortCards('0grade'))
        dispatch(fetchCardsTC(cardsPack_id))
    }
    //end sort by grade

    //pagination
    //pageCount -> how many items on page
    const setPageCountCallback = (pageCount: string) => {
        return () => {
            dispatch(setPageCount(pageCount))
            dispatch(fetchCardsTC(cardsPack_id))
        }
    }
    //end pageCount -> how many items on page
    //pages
    const setPage = (page: number) => {
        return () => {
            dispatch(setCurrentPage(page.toString()))
            dispatch(fetchCardsTC(cardsPack_id))
        }
    }
    //end pages
    //end pagination

    //range
    const onChangeRangeDouble = ([num1, num2]: number[]) => {
        setMinValue(num1)
        setMaxValue(num2)
    }

    const onClickGradeRangeFilter = () => {
        dispatch(setMinMaxGrade(minValue.toString(), maxValue.toString()))
        dispatch(fetchCardsTC(cardsPack_id))
    }
    //end range

    //search
    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }
    const onClickSearch = () => {
        if (searchOption === 'by question') {
            dispatch(setAnswerSearch(''))
            dispatch(setQuestionSearch(searchValue))
            dispatch(fetchCardsTC(cardsPack_id))
        } else {
            dispatch(setQuestionSearch(''))
            dispatch(setAnswerSearch(searchValue))
            dispatch(fetchCardsTC(cardsPack_id))
        }
    }
    const onClickReset = () => {
        setSearchValue('')
        dispatch(setAnswerSearch(''))
        dispatch(setQuestionSearch(''))
        dispatch(fetchCardsTC(cardsPack_id))
    }
    //end search
    return (
        <div className={styles.tableContainer}>
            <SearchBar searchValue={searchValue}
                       onChangeSearchValue={onChangeSearchValue}
                       onClickSearch={onClickSearch}
                       onClickReset={onClickReset}
                       searchOptions={searchOptions}
                       searchOption={searchOption}
                       setSearchOption={setSearchOption}
            />
            <RangeFilter minValue={minValue}
                         maxValue={maxValue}
                         onChangeRangeDouble={onChangeRangeDouble}
                         onClickGradeRangeFilter={onClickGradeRangeFilter}
                         min={0}
                         max={5}
                         step={1}
            />
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Updated</th>
                    <th>Grade <button onClick={sortHighGrade}>high</button>
                        <button onClick={sortLowGrade}>low</button>
                    </th>
                    <th>{loggedUserId === packUserId && <button onClick={addCard}>Add</button>}Actions</th>
                </tr>
                </thead>
                <tbody>
                {cardsElements}
                </tbody>
            </table>
            <Pagination pageCountArray={['1', '5', '10', '20']}
                        setPageCountCallback={setPageCountCallback}
                        pages={pages}
                        setPage={setPage}
                        totalItems={cardsTotalCount}
                        currentPage={currentPage}
                        pageSize={pageCount}
            />
            <Modal active={modalActive} setActive={setModalActive}>
                <ModalWithTwoInput cardsPack_id={cardsPack_id} action={addCardTC} setModalActive={setModalActive}/>
            </Modal>
        </div>

    )
}