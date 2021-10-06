import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addCardTC,
    CardType,
    deleteCardTC,
    editCardTC,
    fetchCardsTC, setAnswerSearch, setCurrentPage, setMinMaxGrade, setPageCount, setQuestionSearch, setSortCards,
} from "../../1-main/2-bll/cardsReducer";
import {AppRootStateType} from "../../1-main/2-bll/store";
import styles from './Cards.module.css'
import {useParams} from "react-router-dom";
import {AddCardDataType, UpdateCardDataType} from "../../1-main/3-dal/cardsAPI";
import {DoubleRange} from "../../1-main/1-ui/common/DoubleRange";
import RadioOptions from "../../1-main/1-ui/common/RadioOptions";

export function Cards() {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.cards.cards)
    const init = useSelector<AppRootStateType, boolean>(state => state.cards.init)
    const loggedUserId = useSelector<AppRootStateType, string>(state => state.auth.userId)
    const packUserId = useSelector<AppRootStateType, string | null>(state => state.cards.packUserId)
    const pages = useSelector<AppRootStateType, number>(state => state.cards.pages)
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const searchOptions = ['by question', 'by answer']
    const [searchOption, setSearchOption] = useState(searchOptions[0])
    const [searchValue, setSearchValue] = useState('')
    const {cardsPack_id} = useParams<{ cardsPack_id: string }>()

    useEffect(() => {
        dispatch(fetchCardsTC(cardsPack_id))
    }, [])

    if (!init) {
        return <div>Loading</div>
    }

    //util format date
    const formatDate = (date: string) => {
        let day = date.slice(8, 10)
        let month = date.slice(5, 7)
        let year = date.slice(0, 4)
        return `${day}.${month}.${year}`
    }
    //end util format date

    //CRUD on cards
    const addCard = () => {
        let card: AddCardDataType = {
            cardsPack_id: cardsPack_id,
            question: 'english',
            answer: 'english',
            grade: Math.abs(Math.random() * 10 - 5)
        }
        dispatch(addCardTC({card}))
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
        const sortString = '1grade'
        dispatch(setSortCards(sortString))
        dispatch(fetchCardsTC(cardsPack_id))
    }
    const sortLowGrade = () => {
        const sortString = '0grade'
        dispatch(setSortCards(sortString))
        dispatch(fetchCardsTC(cardsPack_id))
    }
    //end sort by grade

    //how many items on page or pageCount
    const setPageCount3 = () => {
        const sortString = '3'
        dispatch(setPageCount(sortString))
        dispatch(fetchCardsTC(cardsPack_id))
    }

    const setPageCount5 = () => {
        const sortString = '5'
        dispatch(setPageCount(sortString))
        dispatch(fetchCardsTC(cardsPack_id))
    }
    //end how many items on page or pageCount

    //pages button elements
    const pagesTotalCount = []
    for (let i=1;i<=pages;i++) {
        pagesTotalCount.push(i)
    }
    const setPage = (page: number) => {
        return () => {
            dispatch(setCurrentPage(page.toString()))
            dispatch(fetchCardsTC(cardsPack_id))
        }
    }
    const pagesElements = pagesTotalCount.map(p => <button key={Math.random() + p} onClick={setPage(p)}>{p}</button>)
    //end pages button elements

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
    //end search
    return (
        <div className={styles.tableContainer}>
            <div className={styles.searchInput}>
                <RadioOptions name={'radio'} options={searchOptions} value={searchOption} onChangeOption={setSearchOption}/>
                <input className={styles.letterInput} value={searchValue} onChange={onChangeSearchValue}/>
                <button onClick={onClickSearch}>Search</button>
            </div>
            <div className={styles.rangeContainer}>
                <span>{minValue} </span>
                <DoubleRange value={[minValue, maxValue]} onChangeRange={onChangeRangeDouble}/>
                <span> {maxValue}</span>
                <button onClick={onClickGradeRangeFilter}>Filter</button>
            </div>
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
                <tfoot className={styles.tfoot}>
                <tr>
                    <th>
                        PageCount<button onClick={setPageCount3}>3</button><button onClick={setPageCount5}>5</button>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>
                        Pages{pagesElements}
                    </th>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}