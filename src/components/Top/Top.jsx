import React from "react";
import s from './Top.module.css'
const Top = (props)=>{
    return (<div className={s.top}>
            <div className={s.container}>
                <div className={s.top__inner}>
                    <div className={s.infoBlock}>
                        <div className={s.infoText}>
                            Hello, I’m <p className={s.name}>Lewis Nathaniel</p>
                           <p className={s.prof}> UI & UX Designer</p>
                        </div>
                        <div className={s.socialBlock}>
                            <div className={s.socialItem}><img src={"../../img/social/behance.svg"} alt={"behance"}/> </div>


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