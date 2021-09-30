import React from 'react';
import classes from './Profile.module.css';
import {ProfileCard} from "./1-ProfileCard/ProfileCard";
import {Table} from "./Table";
import {Search} from "./Search";
import {Header} from "./Header";
import {Range} from "./Range";
import {Pagination} from "./Pagination";

// Initial commit

export type EntityListType = Array<string>
export type ProfileDataType = {
    photo: string
    header: string
    description: string
}
export type ItemsListType = {
    [key: string]: string
}

type stateForTestProfileType = {
    pageTitle: string
    list: {
        headers: EntityListType
        items: Array<ItemsListType>
    }
    profileData: ProfileDataType
    countPage: number
}

const stateForTestProfile: stateForTestProfileType = {
    pageTitle: 'Packs list Petr’s',
    list: {
        headers: ['Name', 'Cards', 'Last updated', 'Created by', 'Actions'],
        items: [
            {
                'name': 'Pack Name - Name Pack',
                'cards': '4',
                'Last updated': '18.03.2021',
                'Created by': 'Ivan Ivanov',
                'Actions': 'Learn'
            },
            {
                'name': 'Name Pack',
                'cards': '7',
                'Last updated': '15.03.2021',
                'Created by': 'Ivan Pupkin',
                'Actions': 'Learn'
            },
            {
                'name': 'Full pack',
                'cards': '22',
                'Last updated': '20.03.2019',
                'Created by': 'Ignatiy Brynkin',
                'Actions': 'Learn'
            },
            {
                'name': 'Pack Name - Name Pack',
                'cards': '5',
                'Last updated': '01.09.2015',
                'Created by': 'Viktor Ivanov',
                'Actions': 'Learn'
            },
            {
                'name': 'Pack Name',
                'cards': '11',
                'Last updated': '22.12.2010',
                'Created by': 'Andrey See',
                'Actions': 'Learn'
            },
            {
                'name': 'Pack Name - Name Pack',
                'cards': '22',
                'Last updated': '20.03.2019',
                'Created by': 'Ignatiy Brynkin',
                'Actions': 'Learn'
            },
            {
                'name': 'English',
                'cards': '54',
                'Last updated': '01.20.2018',
                'Created by': 'Anton Klevapa',
                'Actions': 'Learn'
            },
            {
                'name': 'JavaScript',
                'cards': '33',
                'Last updated': '12.12.2020',
                'Created by': 'John Smite',
                'Actions': 'Learn'
            },
        ]
    },
    profileData: {
        photo: 'https://us.123rf.com/450wm/axelbueckert/axelbueckert1507/axelbueckert150700010/42097570-happy-young-man-with-big-toothy-smile-isolated-on-white.jpg',
        header: 'Petr Ivanov',
        description: 'Front-end developer'
    },
    countPage: 7
}


function Profile() {

    const title = stateForTestProfile.pageTitle;
    const headers = stateForTestProfile.list.headers;
    const items = stateForTestProfile.list.items;
    const profileData = stateForTestProfile.profileData;
    const countPage = stateForTestProfile.countPage;

    return (
        <div className={classes.page}>
            <aside className={classes.sidebar}>
                <ProfileCard profileData={profileData}/>
                <Range/>
            </aside>
            <div className={classes.content}>
                <header className={classes.header}>
                    <Header title={title}/>
                    <Search/>
                </header>
                <main className={classes.main}>
                    <Table headers={headers} items={items}/>
                </main>
                <footer className={classes.footer}>
                    <Pagination countPage={countPage}/>
                </footer>
            </div>
        </div>
    );
}


export default Profile;
