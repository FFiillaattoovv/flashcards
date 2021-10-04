import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CardType, fetchCardsTC} from "../../1-main/2-bll/cardsReducer";
import {AppRootStateType} from "../../1-main/2-bll/store";
import styles from './Cards.module.css'

export function Cards() {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.cards.cards)
    const init = useSelector<AppRootStateType, boolean>(state => state.cards.init)
    const loggedUserId = useSelector<AppRootStateType, string>(state => state.auth.userId)
    const packUserId = useSelector<AppRootStateType, string>(state => state.cards.packUserId)

    useEffect(() => {
        dispatch(fetchCardsTC('60ca179a1ae11c00046ead3e'))
    }, [])

    const formatDate = (date: string) => {
        let day = date.slice(8, 10)
        let month = date.slice(5, 7)
        let year = date.slice(0, 4)
        return `${day}.${month}.${year}`
    }

    if (!init) {
        return <div>Loading</div>
    }

    let cardsElements = cards.map(card => <tr key={card._id}>
        <td>{card.question}</td>
        <td>{card.answer}</td>
        <td>{formatDate(card.updated)}</td>
        <td>{card.grade}</td>
        {loggedUserId === packUserId ? <td>
            <button>Delete</button>
            <button>Edit</button>
        </td> : <td></td>}
    </tr>)

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Updated</th>
                    <th>Grade</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {cardsElements}
                </tbody>
            </table>
        </div>

    )
}