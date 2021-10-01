import classes from "./Profile.module.css";
import React from "react";

type PaginationPropsType = {
    pageCount: number | null
}

export function Pagination(props: PaginationPropsType) {

    return (
        <>
            {<span className={classes.pagination}>{props.pageCount}</span>}
        </>
    )
}