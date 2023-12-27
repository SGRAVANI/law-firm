import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import styles from "./HeroContent.module.css";
import {ReactComponent as Email} from "../../assets/email.svg"
 export default function HeroContent() {
  return (
    <div className={styles.parentWrapper}>
    <div className={styles.wrapper}>
        <div style={{width:"100%"}}>
        <h1 className={`${styles.heading} ${styles.heading1}`}>You don't have to</h1>
        <h1 className={`${styles.heading} ${styles.heading2}`}>Fight Them Alone.</h1>
        </div>
      <p style={{width:"100%"}} className={styles.para}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
     
        <form className={styles.inputField} onSubmit={(e)=>{e.preventDefault(); }}>
        <div className={styles['input-wrapper']}>
         <EmailIcon sx={{ color:'#525252'}}/>
         <input type="email" placeholder='enter your email address' className={styles.input}/>
         </div>
         <button type="submit" className={styles['btn-style']}>Let's Talk</button>
        </form>
        </div>
        <div className={styles['hero-right']}>
        <div className={styles['image-container']}>
        <img src={require("../../assets/heroimg.png")} />
        </div>
        


    </div>
    </div>
  )
}
