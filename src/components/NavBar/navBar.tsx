'use client';
import Link from 'next/link';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Logo from '../Logo/logo';
import HamburgerBlack from '../HamburgerBlack/hamburgerBlack';
import Hamburger from '../Hamburger/hamburger';
import Close from '../Close/close';
import styles from "./navBarStyles.module.css";
import { motion } from "framer-motion";
import gsap from 'gsap';

const variants = {
  open: { opacity: 1, duration: 1, },
  closed: { opacity: 0, duration: 1 },
}

interface navBarProps {
  color?: string;
}

export default function NavBar({color} : navBarProps) {

  let logo = useRef<HTMLDivElement>(null);
  let hamburger = useRef<HTMLDivElement>(null);
  let navLinksContainer = useRef<HTMLDivElement>(null);
  let headerContainer = useRef<HTMLDivElement>(null);
  let logoHidden = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: false });
      setTimeline(tl);
    });
    return () => ctx.revert();
  },[]);

  const animateHamburger = (tl: gsap.core.Timeline) => {

    if (timeline && !timeline.isActive()) {

      timeline?.to("#hamburger-1", {
        rotate: "45deg",
        x: "30px", 
        y: "20px",
        duration: .5,
        scale: 1.1,
      }).to("#hamburger-2", {
        opacity: 0,
        duration: .5,
      }, "-=1").to("#hamburger-3", {
        rotate: "315deg",
        x: "10px", 
        y: "60px",
        duration: .4,
      }, "-=1");

    }

    let secondTimeline = gsap.timeline();

    secondTimeline?.to(["#homeNavLink", "#homeNavLink a"], {
      opacity: 1,
      duration: .3,
    }).to(["#aboutLink", "#aboutLink a"], {
      opacity: 1,
      duration: .3,
    }).to(["#workLink", "#workLink a"], {
      opacity: 1,
      duration: .3,
    }).to(["#contactLink", "#contactLink a"], {
      opacity: 1,
      duration: .3,
    })
  }

  function toogleNavBar () {

    logoHidden.current && (logoHidden.current.style.display = 'block' );
    logo.current && (logo.current.style.display = 'none');
    navLinksContainer.current && (navLinksContainer.current.style.display = 'block');
    headerContainer.current && (headerContainer.current.style.height = '100vh');
    headerContainer.current && (headerContainer.current.style.position = 'fixed');
    headerContainer.current && (headerContainer.current.style.backgroundColor = '#0C0C0C');
    timeline && animateHamburger(timeline);
    setIsOpen(true);
  }

  function closeNavBar() {
    logoHidden.current && (logoHidden.current.style.display = 'none');
    logo.current && (logo.current.style.display = 'block');
    navLinksContainer.current && (navLinksContainer.current.style.display = 'none');
    headerContainer.current && (headerContainer.current.style.height = '10vh');
    headerContainer.current && (headerContainer.current.style.position = 'relative');
    headerContainer.current && (headerContainer.current.style.backgroundColor = 'transparent');
    if (timeline && !timeline.isActive()) {
      timeline?.to("#hamburger-1", {
        rotate: "0deg",
        x: "0px", 
        y: "0px",
        duration: .5,
        scale: 1,
      }).to("#hamburger-2", {
        opacity: 1,
        duration: .5,
      }, "-=1").to("#hamburger-3", {
        rotate: "0deg",
        x: "0px", 
        y: "0px",
        duration: .4,
      }, "-=1")
    }
    setIsOpen(false);
  }


  return (
    <header 
      className={styles.headerNavContainer} 
      ref={headerContainer}
    >     
      <div className={styles.logoContainer} ref={logo}>
        {
          color === "black" ? <Logo color="black"/> : <Logo color="white"/>
        }
      </div>
      <div className={styles.logoContainerHidden} ref={logoHidden}>
        <Logo color="white"/>
      </div>
      <div className={styles.hamburgerContainer} ref={hamburger} onClick={() => isOpen ? closeNavBar() : toogleNavBar()}>
        <Hamburger color={color && color == 'black' ? "#0C0C0C" : "#FFF"}/>
      </div>
      <motion.nav 
        className={styles.navLinksContainer} 
        ref={navLinksContainer}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <ul>
          <li id='homeNavLink'>
            <Link href="/" className={styles.navLinksItem}>
              Home
            </Link>
          </li>
          <li id='aboutLink'>
            <Link href="/about" className={styles.navLinksItem}>
              About
            </Link>
          </li>
          <li id='workLink'>
            <Link href="/work" className={styles.navLinksItem}>
              Work
            </Link>
          </li>
          <li id='contactLink'>
            <Link href="/contact" className={styles.navLinksItem}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </header>
  )
}
