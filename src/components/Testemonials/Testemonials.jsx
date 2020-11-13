import React from "react";
import s from './Testemonials.module.css'
const Testemonials = () =>{
    return(<div>
        <div className={s.testemon}>
        <div className={s.container}>
            <div className={s.text}>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Ab aliquid amet architecto cum fuga incidunt ipsam
                itaque libero, magnam maiores nisi numquam perferendis quisquam similique suscipit.
                Accusantium corporis deserunt est harum iure libero perferendis, quam reiciendis saepe
                sint veniam voluptatibus.
            </div>
            <div className={s.person}>
                <div className={s.image}> </div>
                <div>
                    <p>Edward M. Brooks</p>
                    <p>Marketing House</p>
                </div>

            </div>

        </div>

        </div>

    </div>)
}
export default Testemonials;