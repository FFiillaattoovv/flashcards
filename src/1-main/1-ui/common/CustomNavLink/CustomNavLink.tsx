import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './CustomNavLink.module.css'

type CustomNavLinkPropsType = {
    title: string,
    to: string
}

const CustomNavLink = (props: CustomNavLinkPropsType) => {
    return (
        <div className={style.navLink}>
            <NavLink to={props.to}>{props.title}</NavLink>
        </div>
    );
};


export default CustomNavLink;