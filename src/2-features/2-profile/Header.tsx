import React from "react";

type HeaderPropsType = {
    header: string
}

export function Header(props: HeaderPropsType) {
    return (
        <div>
            <h1>{props.header}</h1>
        </div>
    )
}