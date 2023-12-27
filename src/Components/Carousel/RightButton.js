import React from 'react'
import styles from "./BtnStyle.module.css"
import {ReactComponent as RightIcon  }  from "../../assets/right.svg"
import { useSwiper } from 'swiper/react';
export default function RightButton() {
    const swiper = useSwiper();
  return (
    <div  className={`${styles.btn} nextEl`}> <RightIcon/> </div>
  )
}
