import classes from "./Profile.module.css";
import React from "react";

type PaginationPropsType = {
    page: number | null
}

export function Pagination(props: PaginationPropsType) {

    return (
        <>
            {<span className={classes.pagination}>{props.page}</span>}
        </>
    )
}