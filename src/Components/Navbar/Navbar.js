import React, { useRef,useState } from 'react'
import Logo from '../Logo/Logo'
import styles from "./Navbar.module.css" 
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar() {
    let [active,setActive]=useState(false);
    

    let ob=useRef();
    function handleToggle()
    {
        console.log(ob.current)
        if(ob.current.style.display==="block")
        {
            ob.current.style.display="none"
        }
        else{
            ob.current.style.display="block"
        }
    }
  return (
    <div>
    <div className={styles.wrapper}>
    <Logo/>
    
        <ul style={{listStyle:"none"}} className="links">
            <li >Home</li>
            <li>Attorneys</li>
            <li>Practice Areas</li>
            <li>About Us</li>
        </ul>
 
    <button className={styles.btn}>Contact Now</button>
    <div className='toggler-btn'><button onClick={handleToggle}><MenuIcon style={{color:"var(--gray-font)"}}/></button></div>
    </div>
    <div>
    <ul style={{listStyle:"none"}} className="toggler-list"  ref={ob}>
            <li>< a href="#" className={styles.linkStyle}>Home</a></li>
            <li><a href="#" className={styles.linkStyle}>Attorneys</a></li>
            <li><a href="#" className={styles.linkStyle}> Practice Areas</a></li>
            <li><a href="#" className={styles.linkStyle}>About Us</a></li>
        </ul>
  
    </div>
    </div>
  )
}
