import classes from "./Profile.module.css";
import React from "react";

export function List() {
    return (
        <div>
            <div className={classes.list}>
                <span>Name</span>
                <span>Cards</span>
                <span>Last updated</span>
                <span>Created by</span>
                <span>Actions</span>
            </div>
            <div className={classes.item}>
                <span>Pack Name - Name Pack</span>
                <span>4</span>
                <span>18.03.2021</span>
                <span>Ivan Ivanov</span>
                <button>Learn</button>
            </div>
            <div className={classes.item2}>
                <span>Pack Name - Name Pack</span>
                <span>4</span>
                <span>18.03.2021</span>
                <span>Ivan Ivanov</span>
                <button>Learn</button>
            </div>
            <div className={classes.item3}>
                <span>Pack Name - Name Pack</span>
                <span>4</span>
                <span>18.03.2021</span>
                <span>Ivan Ivanov</span>
                <button>Learn</button>
            </div>
            <div className={classes.item4}>
                <span>Pack Name - Name Pack</span>
                <span>4</span>
                <span>18.03.2021</span>
                <span>Ivan Ivanov</span>
                <button>Learn</button>
            </div>
            <div className={classes.item5}>
                <span>Pack Name - Name Pack</span>
                <span>4</span>
                <span>18.03.2021</span>
                <span>Ivan Ivanov</span>
                <button>Learn</button>
            </div>
            <div className={classes.item6}>
                <span>Pack Name - Name Pack</span>
                <span>4</span>
                <span>18.03.2021</span>
                <span>Ivan Ivanov</span>
                <button>Learn</button>
            </div>
            <div className={classes.item7}>
                <span>Pack Name - Name Pack</span>
                <span>4</span>
                <span>18.03.2021</span>
                <span>Ivan Ivanov</span>
                <button>Learn</button>
            </div>
            <div className={classes.item8}>
                <span>Pack Name - Name Pack</span>
                <span>4</span>
                <span>18.03.2021</span>
                <span>Ivan Ivanov</span>
                <button>Learn</button>
            </div>
        </div>
    )
}