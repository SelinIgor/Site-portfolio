import React from 'react';
import s from './About.module.css'
import {NavLink} from "react-router-dom";
const About = ()=>{
    return(<div>
        <div>
        <div className={s.container}>
            <div className={s.description}>
            <div className={s.imageBlock}> </div>
            <div>
                <div className={s.header}>
                    <p>About me</p>
                    <p>Who I am</p>
                </div>
                <div>
                <div className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aut delectus dolore ducimus eligendi ex, itaque iusto nesciunt nisi optio perspiciatis, provident, quasi qui quidem repellat temporibus velit veniam. Animi aperiam atque, consectetur corporis, cum dicta doloremque, dolorum eum explicabo hic impedit in inventore itaque iure labore laboriosam nam nemo quam soluta ullam unde ut veniam voluptas voluptates?</div>
                    <div className={s.buttons}>
                        <NavLink to={"/hireMe"} className={s.button}>Hire me</NavLink>
                        <NavLink to={"/resume"} className={s.button}>See my resume</NavLink>
                    </div>
                    </div>
            </div>
            </div>
        </div>
        </div>

    </div>)
}
export default About