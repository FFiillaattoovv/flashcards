import React from "react";

type HeaderPropsType = {
    title: string
}

export function Header(props: HeaderPropsType) {
    return <h1>{props.title}</h1>
}