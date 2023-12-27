
import React from 'react'
import styles from "./BtnStyle.module.css"
import { useSwiper } from 'swiper/react';
export default function LeftButton() {
    const swiper = useSwiper();

  return (
    <div className={`${styles.btn} prevEl`}><img src={require("../../assets/left.png")} /></div>
  )
}
