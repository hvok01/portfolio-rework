'use client'
import NavBar from '@/components/NavBar/navBar';
import styles from './about.module.css';
import { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from "gsap";

export default function About() {
  let aboutMainText = useRef<HTMLDivElement>(null);
  let aboutGithub = useRef<HTMLDivElement>(null);
  let aboutDribble = useRef<HTMLDivElement>(null);
  let aboutContactButton = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused: false})
      animateNotFound(tl)
      setTimeline(tl)
    });
    return () => ctx.revert();
  },[])

  const animateNotFound = (timeline: gsap.core.Timeline) => {
    timeline.from(aboutMainText.current, {
      duration: 2,
      x: -100,
      opacity: 0,
      ease: "power4.out",
    });
    timeline.from(
      aboutGithub.current,
      { duration: 1, x: "-50", opacity: 0, delay: 0.5 },
      "-=1"
    );
    timeline.from(
      aboutDribble.current,
      { duration: 1, x: -50, opacity: 0, delay: 0.8 },
      "-=2"
    );
    timeline.from(
      aboutContactButton.current,
      { duration: 2, opacity: 0, delay: 1 },
      "-=1"
    );
  }

  return (
    <>
      <NavBar color="black"/>
      <div className={styles.gridContainer}>
          <main className={styles.aboutSectionContainer}></main>
          <div className={styles.aboutSection} ref={aboutMainText}>
              <h1 className={styles.aboutSectionText}>{
                "Hey!. My name is Leo, i'm current living in Potrero de Los Funes, San Luis, Argentina, i'm 25 and i'm a frontend developer."
              } <br />
              {
                "Currently working as a consultant and architect of cloud solutions with Azure. Grow up with a lot of creatives influences, graduated from an art high school spend my last 10 years looking to develop skills to create stuff, i got into graphic design, motion graphics, 4D art, even music, and then software development. Freelancing for a few months, i've been able to gain myselft time enought to learn more about software development. Gradueted from univeristy in a software development related career, got a good job here in my city, but, i’m trying to move on, looking to become an expert inside the world wide web."
              }
              </h1>
          </div>
          <div className={styles.gridLine1a}></div>
          <div className={styles.gridLine2a}></div>
          <div className={styles.gridLine3a}></div>
          <div className={styles.gridLine4a}></div>
          <div className={styles.gridLine5a}></div>

          <div className={styles.aboutContactButton} ref={aboutContactButton}>
              <Link href="/contact" className="button">contact</Link>
          </div>

          <div className={styles.aboutGithub} ref={aboutGithub}>
              <Link href={{ pathname: "https://github.com/hvok01" }} target="_blank" className={styles.aboutContactButton2}>Github</Link>
          </div>

          <div className={styles.aboutDribble} ref={aboutDribble}>
              <Link href={{ pathname: "https://dribbble.com/leo01" }} target="_blank" className={styles.aboutContactButton2}>Dribble</Link>
          </div>
      </div>
    </>
  );
}
