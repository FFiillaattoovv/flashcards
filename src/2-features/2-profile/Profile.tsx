import React from 'react';
import classes from './Profile.module.css';

function Profile() {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <h1>Packs list Petr’s</h1>
                <input type="search" placeholder="Search..."/>
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
                <div className={classes.pagination}><span>1</span></div>
                <div className={classes.pagination2}><span>2</span></div>
                <div className={classes.pagination3}><span>3</span></div>
                <div className={classes.pagination4}><span>4</span></div>
                <div className={classes.pagination5}><span>5</span></div>
                <div className={classes.pagination6}><span>...</span></div>
                <div className={classes.pagination7}><span>10</span></div>
            </div>
            <div className={classes.sidebar}>
                <div className={classes.profile}>
                    <img
                        src="https://us.123rf.com/450wm/axelbueckert/axelbueckert1507/axelbueckert150700010/42097570-happy-young-man-with-big-toothy-smile-isolated-on-white.jpg?ver=6"
                        alt="User"/>
                    <span className={classes.header}>Petr Ivanov</span>
                    <span className={classes.description}>Front-end developer</span>
                    <span className={classes.numberCards}>Number of cards</span>
                    <input type="range" name="range" min="0" max="100" value="50"/>
                </div>
            </div>
        </div>
    );
}

export default Profile;
