import React from "react";
import s from './Top.module.css'
import behance from './../../img/social/behance.svg'
import facebook from './../../img/social/facebook.svg'
import twitter from './../../img/social/twitter.svg'
import {NavLink} from "react-router-dom";

const Top = (props)=>{
    return (<div>
            <div className={s.container}>
                <div className={s.top__inner}>
                    <div className={s.infoBlock}>
                        <div className={s.infoText}>
                            Hello, I’m <p className={s.name}>Lewis Nathaniel</p>
                           <p className={s.prof}> UI & UX Designer</p>
                        </div>
                        <div className={s.socialBlock}>
                            <div className={s.socialItem}><a href={"#"}><img src={behance} alt={"behance"}/></a> </div>

                            <div className={s.socialItem}><a href={"#"}><img src={facebook} alt={"facebook"}/></a> </div>

                            <div className={s.socialItem}><a href={"#"}><img src={twitter} alt={"twitter"}/></a> </div>


                        </div>
                        <div className={s.buttons}>
                            <NavLink to={"/hireMe"} className={s.button}>Hire me</NavLink>
                            <NavLink to={"/resume"} className={s.button}>See my resume</NavLink>
                        </div>





                    </div>
                    <div className={s.rightSide}>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Top;