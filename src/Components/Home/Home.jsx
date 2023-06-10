import React from 'react'
import styles from './Home.module.css'
const Home = () => {
  return (
   <>
   <section className={styles.home}>
    <div className={styles.home_content}>
        <h1>Hi, I'am Irfan Aqeel</h1>
        <h3>MERN Stack Developer</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dolorem qui consectetur odio voluptatem dolore distinctio 
            reiciendis esse architecto placeat quo nemo, 
            vel fuga earum blanditiis soluta! 
            Aspernatur mollitia tempora asperiores.</p>

        <div className={styles.btn}>
            <a href="#">Hire Me!</a>
            <a href="#">Chat!</a>
            </div>    
    </div>

   

   </section>
   
   </>

    )
}

export default Home