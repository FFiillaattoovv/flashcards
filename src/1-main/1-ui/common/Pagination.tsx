import React from "react";
import styles from "./Pagination.module.css";
import {paginate} from "../utils/paginationAlgorithm";

type PaginationPropsType = {
    pageCountArray: string[]
    setPageCountCallback: (pageCount: string) => () => void
    pages: number
    setPage: (page: number) => () => void
    totalItems?: number
    currentPage?: number
    pageSize?: number
}

export const Pagination = ({pageCountArray, setPageCountCallback, pages, setPage, totalItems, currentPage, pageSize}: PaginationPropsType) => {
    //pageCount
    const pageCountButtons = pageCountArray.map(pc => <button key={Math.random() + pc} onClick={setPageCountCallback(pc)}>{pc}</button>)

    //pages
    let pagesTotalCount = []
    if (pages < 7) {
        for (let i = 1; i <= pages; i++) {
            pagesTotalCount.push(i)
        }
    } else {
        let {pages, totalPages} = paginate(totalItems!, currentPage, pageSize, 7)
        pagesTotalCount = [...pages]
        if (pagesTotalCount[0] !== 1) {
            pagesTotalCount[0] = 1
        }
        if (pagesTotalCount[pagesTotalCount.length - 1] !== totalPages) {
            pagesTotalCount[pagesTotalCount.length - 1] = totalPages
        }
    }

    const pagesElements = pagesTotalCount.map(p => <button key={Math.random() + p} onClick={setPage(p)}>{p}</button>)

    return (
        <div className={styles.pagesFooter}>
            <div>
                Items on page:{pageCountButtons}
            </div>
            <div>
                <h4>Current page {currentPage}</h4>
            </div>
            <div>
                Pages:{pagesElements}
            </div>
        </div>
    )
}