'use client'
import Link from 'next/link';
import React, { useRef } from 'react'
import Logo from '../Logo/logo';
import HamburgerBlack from '../HamburgerBlack/hamburgerBlack';
import Hamburger from '../Hamburger/hamburger';
import Close from '../Close/close';
import styles from "./navBarStyles.module.css";

export default function NavBar({color} : any) {

  let logo = useRef<any>(null);
  let hamburger = useRef<any>(null);
  let close = useRef<any>(null);
  let navLinksContainer = useRef<any>(null);
  let headerContainer = useRef<any>(null);
  let logoHidden = useRef<any>(null);

  function toogleNavBar () {
    logoHidden.current.style.display = 'block';
    logo.current.style.display = 'none';
    close.current.style.display = 'block';
    hamburger.current.style.display = 'none';
    navLinksContainer.current.style.display = 'block';
    headerContainer.current.style.height = '100vh';
    headerContainer.current.style.position = 'fixed';
    headerContainer.current.style.backgroundColor = '#0C0C0C';
  }

  function closeNavBar() {
    logoHidden.current.style.display = 'none';
    logo.current.style.display = 'block';
    close.current.style.display = 'none';
    hamburger.current.style.display = 'block';
    navLinksContainer.current.style.display = 'none';
    headerContainer.current.style.height = '10vh';
    headerContainer.current.style.position = 'relative';
    headerContainer.current.style.backgroundColor = 'transparent';
  }


  return (
    
    <header className={styles.headerNavContainer} ref={headerContainer}>
        
    <div className={styles.logoContainer} ref={logo}>
      {
        color === "black" ? <Logo color="black"/> : <Logo color="white"/>
      }
    </div>
    <div className={styles.logoContainerHidden} ref={logoHidden}>
      <Logo color="white"/>
    </div>
    <div className={styles.hamburgerContainer} ref={hamburger} onClick={() => toogleNavBar()}>
      {
        color === "black" ? <HamburgerBlack /> : <Hamburger />
      }
    </div>
    <div className={styles.closeContainer} ref={close} onClick={() => closeNavBar()}>
      <Close />
    </div>
    <nav className={styles.navLinksContainer} ref={navLinksContainer}>
      <ul>
        <li>
          <Link href="/" className={styles.navLinksItem}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navLinksItem}>
            About
          </Link>
        </li>
        <li>
          <Link href="/work" className={styles.navLinksItem}>
            Work
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navLinksItem}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}
