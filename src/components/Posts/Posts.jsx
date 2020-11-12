import React from "react";
import s from './Posts.module.css'
import {NavLink} from "react-router-dom";
const Posts = ()=>{
    return(<div>
            <div className={s.container}>
                <div className={s.titles}>
            <h2 className={s.title}>Read Me</h2>
                <p> Sometimes I write something smart</p>
                </div>
                <div className={s.postsContainer}>
                <div className={s.projectItem}>
                    <div className={s.projectImage}>
                        <div className={s.date}> 10 June</div>
                        <img/>
                    </div>
                    <div className={s.projectInfo}>
                        <div>Category</div>
                        <div className={s.text}>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Ab, accusantium architecto asperiores assumenda,
                                delectus distinctio ea eligendi harum id iusto nesciunt non officia quaerat
                                voluptatum!
                            </p>
                        </div>
                        <div className={s.btn}>
                            <NavLink to={"/posts/2"} className={s.navItem}>Read more</NavLink>
                        </div>


                    </div>

                </div>
                <div className={s.projectItem}>
                    <div className={s.projectImage}>
                        <div className={s.date}> 10 June</div>
                        <img/>
                    </div>
                    <div className={s.projectInfo}>
                        <div>Category</div>
                        <div className={s.text}>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Ab, accusantium architecto asperiores assumenda,
                                delectus distinctio ea eligendi harum id iusto nesciunt non officia quaerat
                                voluptatum!
                            </p>
                        </div>
                        <div className={s.btn}>
                            <NavLink to={"/posts/2"} className={s.navItem}>Read more</NavLink>
                        </div>


                    </div>

                </div>
                <div className={s.projectItem}>
                    <div className={s.projectImage}>
                        <div className={s.date}> 10 June</div>
                        <img/>
                    </div>
                    <div className={s.projectInfo}>
                        <div>Category</div>
                        <div className={s.text}>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Ab, accusantium architecto asperiores assumenda,
                                delectus distinctio ea eligendi harum id iusto nesciunt non officia quaerat
                                voluptatum!
                            </p>
                        </div>
                        <div className={s.btn}>
                            <NavLink to={"/posts/2"} className={s.navItem}>Read more</NavLink>
                        </div>

                    </div>

                </div>
                </div>


            </div>
        </div>
    )
}
export default Posts