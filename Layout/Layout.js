import React from 'react';
import Header from '../components/Header/Header';
import classes from './LayoutStyles.module.scss'

export const Layout = ({children}) => {
    console.log(children);
    return(
        <>
        <div className={classes.container}>
            <Header />
            <main>{children}</main>            
        </div>
        
        </>
    )
}