import classes from "./Profile.module.css";
import React from "react";

type PaginationPropsType = {
    countPage: number
}

export function Pagination(props: PaginationPropsType) {

    const pages = []

    for (let i = 1; props.countPage >= i; i++) {
        pages.push(i);
    }

    return (
        <>
            {pages.map(el => <span className={classes.pagination}>{el}</span>)}
        </>
    )
}