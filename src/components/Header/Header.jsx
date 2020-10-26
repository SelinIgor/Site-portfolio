import React from "react";
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';
const Header = (props)=>{
    return( <div className="App">
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.header__inner}>

            <div className={s.logoArea}>
                <div className={s.avatar}>
                </div>
                <div>
                    <p className={s.textName}>Lewis<br/> Nathaniel</p>
                    <p className={s.proff}>UI & UX Designer</p>
                </div>
            </div>
                <nav className={s.navigation}>
                    <ul>
                   <NavLink to={"/work"} className={s.navItem}>Work</NavLink>
                    <NavLink to={"/aboutMe"} className={s.navItem}>About me</NavLink>
                    <NavLink to={"/blog"} className={s.navItem}>Blog</NavLink>
                    <NavLink to={"/contact"} className={s.navItem}>Contact</NavLink>
                    <NavLink to={"/hireMe"} className={s.navItem}>Hire me</NavLink>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    </div>)
}
export default Header;