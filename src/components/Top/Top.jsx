import React from "react";
import s from './Top.module.css'
import background from '../../img/designer_photo.png'
const Top = (props)=>{
    return(<div className={s.top}>
            <div className={s.container}>
                <div className={s.top__inner}>
                <div className={s.infoBlock}>
                    <div className={s.infoText}>
                        Hello, I’m Lewis Nathaniel
                    </div>

                </div>
                <div style={{ backgroundImage:`url(${background})`}}>
                    Some text

                </div>
                </div>
            </div>

        </div>
    )
}
export default Top;