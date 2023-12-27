import React from 'react'
import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <div>
        <img src={require("../../assets/logo.png")} className={styles.logo}/>
    </div>
  )
}
