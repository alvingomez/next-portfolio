import Link from "next/link";
import React from "react";
import { div } from "prelude-ls";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import classes from "./Header.module.scss";

const Header = () => (
  <div className={classes.container}>
    <div className={classes.grid1}>
      <Link href="/">
        <a className={classes.navigation}>
          <DiCssdeck size="3rem" /> <span>Alvin</span>
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
    <div className={classes.grid3}>
        <a href="https://github.com/alvingomez" className={classes.social_icons} >
        <AiFillGithub size="3rem" color="blue"/>
        </a>
    </div>
    <div className={classes.grid3}>
        <a href="https://github.com/alvingomez" className={classes.social_icons} >
        <AiFillLinkedin size="3rem" color='blue'/>
        </a>
    </div>
  </div>
  //End of container
);

export default Header;
