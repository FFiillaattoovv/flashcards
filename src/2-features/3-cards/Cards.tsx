import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCardTC, CardType, deleteCardTC, editCardTC, fetchCardsTC} from "../../1-main/2-bll/cardsReducer";
import {AppRootStateType} from "../../1-main/2-bll/store";
import styles from './Cards.module.css'
import {useParams} from "react-router-dom";
import {UpdateCardDataType} from "../../1-main/3-dal/cardsAPI";
import Modal from "../5-modal/Modal";
import {ModalCard} from "../5-modal/children/ModalCard";


export function Cards() {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.cards.cards)
    const init = useSelector<AppRootStateType, boolean>(state => state.cards.init)
    const loggedUserId = useSelector<AppRootStateType, string>(state => state.auth.userId)
    const packUserId = useSelector<AppRootStateType, string>(state => state.cards.packUserId)
    const {cardsPack_id} = useParams<{ cardsPack_id: string }>()

    const [modalActive, setModalActive] = useState(false)


    useEffect(() => {
        dispatch(fetchCardsTC(cardsPack_id))
    }, [dispatch, cardsPack_id])

    const formatDate = (date: string) => {
        let day = date.slice(8, 10)
        let month = date.slice(5, 7)
        let year = date.slice(0, 4)
        return `${day}.${month}.${year}`
    }

    if (!init) {
        return <div>Loading</div>
    }

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

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Updated</th>
                    <th>Grade</th>
                    <th>{loggedUserId === packUserId &&
                    <button className={styles.openBtn} onClick={addCard}>Add</button>}Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                {cardsElements}
                </tbody>
            </table>
            <Modal active={modalActive} setActive={setModalActive}>
                <ModalCard cardsPack_id={cardsPack_id} action={addCardTC} setModalActive={setModalActive}/>
            </Modal>
        </div>
    )
}

