import React from 'react'
import styles from "./Logo.module.css";
export default function Logo({className}) {
  return (
    <div>
        <img src={require("../../assets/logo.png")} className={ className?className:styles.logo}/>
    </div>
  )
}
