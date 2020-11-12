import React from "react";
import s from './Footer.module.css'
import {NavLink} from "react-router-dom";

const Footer = ()=>{

    return(<div className={s.Footer}>
        <div className={s.container}>

            <div>

                <div className={s.footer_inner}>
                    <div>
                        <p>2020 Igor Selin</p>
                    </div>
                    <div className={s.navigation}>
                        <div>
                    <NavLink to={"/work"} className={s.navItem}>Work</NavLink>
                    <NavLink to={"/aboutMe"} className={s.navItem}>About me</NavLink>
                    <NavLink to={"/blog"} className={s.navItem}>Blog</NavLink>
                    <NavLink to={"/contact"} className={s.navItem}>Contact</NavLink>
                    <NavLink to={"/hireMe"} className={s.navItem}>Hire me</NavLink>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>)
}
export default Footer;