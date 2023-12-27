import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import AboutUs from '../AboutUs/AboutUs'
import WhyUs from '../AboutUs/WhyUs'
import styles from "./HomePage.module.css"
import PracticeArea from '../PracticeArea/PracticeArea'
import Team from '../Team/Team'
import ClientReview from '../Carousel/ClientReview'
export default function HomePage() {
  return (
     <>
      <HeroSection/>
       
    <div className='container'>
    < div className={styles.wrapper}>
       
        <AboutUs/>
        <WhyUs/>
        <PracticeArea/>
        <ClientReview/>
        <Team/> 
    </div>
    </div>
    </>  
  )
}
