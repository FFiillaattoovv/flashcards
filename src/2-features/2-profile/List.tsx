import React from "react";
import {ListHeader} from "./ListHeader";
import {ListItem} from "./ListItem";
import {EntityListType} from "./Profile";

type ListPropsType = {
    headers: EntityListType
    items: EntityListType
}

export function List(props: ListPropsType) {
    return (
        <div>
            <ListHeader headers={props.headers}/>
            <ListItem  items={props.items}/>
            <ListItem  items={props.items}/>
        </div>
    )
}