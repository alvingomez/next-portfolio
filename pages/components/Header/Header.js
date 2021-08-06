import Link from 'next/link';
import React from 'react';
import { div } from 'prelude-ls';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import classes from './Header.module.scss'; 

const Header = () => (
    <div className={classes.container}>
        <div className={classes.grid1}>
            <a className={classes.navigation}>
            <DiCssdeck size="3rem" /> <span>Alvin</span>
            </a>
        </div>
    </div>   
)

export default Header;