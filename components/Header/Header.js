import Link from "next/link";
import React from "react";
import { div } from "prelude-ls";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import classes from "./Header.module.scss";
import { DiCssdeck } from 'react-icons/di';

const Header = () => (
  <div className={classes.container}>
    <div className={classes.grid1}>
      <Link href="/">
        <a style={{display:'flex', alignItems:'center', color:'white'}}>
          <DiCssdeck size="4rem" /> <span>Alvin</span>
        </a>
      </Link>
    </div>
    {/*End of grid1  */}
    {/* Navigational Links */}
    <div className={classes.grid2}>
        <li>
            <Link href="#projects">
                <a className={classes.navlink}>Projects</a>
            </Link>
        </li>
        <li>
            <Link href="#tech">
                <a className={classes.navlink}>Technologies</a>
            </Link>
        </li>
        <li>
            <Link href="#current">
                <a className={classes.navlink}>Currently Working</a>
            </Link>
        </li>
        <li>
            <Link href="#Resume">
                <a className={classes.navlink}>Resume</a>
            </Link>
        </li>
        <li>
            <Link href="#About">
                <a className={classes.navlink}>About</a>
            </Link>
        </li>
    </div>
    {/* End of grid2 */}
    {/* Social icons */}
    <div className={classes.grid3}>
        <a href="https://github.com/alvingomez" className={classes.social_icons} >
        <AiFillGithub size="3rem" />
        </a>    
        <a href="https://github.com/alvingomez" className={classes.social_icons} >
        <AiFillLinkedin size="3rem" />
        </a>
    </div>
    {/* end of grid3 */}
  </div>
  //End of container
);

export default Header;
