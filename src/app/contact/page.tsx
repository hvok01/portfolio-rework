'use client'
import NavBar from "@/components/NavBar/navBar";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./contact.module.css";

export default function Contact() {

  let contactMainText = useRef<any>(null);
  let contactFormName = useRef<any>(null);
  let contactFormEmail = useRef<any>(null);
  let contactFormMessage = useRef<any>(null);
  let contactFormSend = useRef<any>(null);
  let contactGithub = useRef<any>(null);
  let contactDribble = useRef<any>(null);
  let contactBackToHome = useRef<any>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused: false})
      animateContactPage(tl)
      setTimeline(tl)
    });
    return () => ctx.revert();
  }, []);

  const animateContactPage = (timeline: gsap.core.Timeline) => {
    timeline.from(contactMainText.current, {
        duration: 2,
        x: -100,
        opacity: 0,
        ease: "power4.out",
      });
    timeline.from(contactFormName.current, {
        duration: 1,
        opacity: 0,
        delay: .3
    });
    timeline.from(contactFormEmail.current, {
        duration: 1,
        opacity: 0,
        delay: .5
    });
    timeline.from(contactFormMessage.current, {
        duration: 1,
        opacity: 0,
        delay: .8
    });
    timeline.from(contactFormSend.current, {
        duration: 2,
        opacity: 0,
        delay: 1.5
    });
    timeline.from(contactGithub.current, {
        duration: 1,
        opacity: 0,
        x: -50,
        delay: .5
    });
    timeline.from(contactDribble.current, {
        duration: 1,
        opacity: 0,
        x: -50,
        delay: .2
    });
    timeline.from(contactBackToHome.current, {
        duration: 1,
        opacity: 0,
        delay: 1
    });
  }

  return (
    <>
      <NavBar color="black"/>
      <div className={styles.gridContainer}>
          <main className={styles.aboutSectionContainer}></main>
          <div className={styles.aboutSection} ref={contactMainText}>
              <h1 className={styles.aboutSectionText}>{
                "If you are interested in my job and want to ask something you can send me an email to lecofdesings2015@gmail.com or can complete this form :)"
              }</h1>
          </div>
          <div className={styles.gridLine1a}></div>
          <div className={styles.gridLine2a}></div>
          <div className={styles.gridLine3a}></div>
          <div className={styles.gridLine4a}></div>
          <div className={styles.gridLine5a}></div>

          <div className={styles.contactFormContainerPage}>
              <form action="mailto:lecofdesings2015@gmail.com" method="post" encType="text/plain" className={styles.contactForm}>
                  <div className={styles.inputNameContainer}>
                      <input type="text" name="name" id="name" placeholder="Name:" className={styles.contactInputTxt} ref={contactFormName} />
                      <input type="email" name="email" id="email" placeholder="Email:" className={styles.contactInputTxt} ref={contactFormEmail} />
                      <div className={styles.inputMessageSendContainer}>
                          <input type="text" name="message" id="message" placeholder="Message:" className={styles.contactInputTxt} ref={contactFormMessage}/>
                          <input type="submit" value="Send ->" className={styles.contactButtonEnviar} ref={contactFormSend}/>
                      </div>
                  </div>
              </form>
          </div>
          
          <div className={styles.contactGithub} ref={contactGithub}>
              <Link href={{ pathname: "https://github.com/hvok01" }} target="_blank">Github</Link>
          </div>

          <div className={styles.contactDribble} ref={contactDribble}>
              <Link href={{ pathname: "https://dribbble.com/leo01" }} target="_blank">Dribble</Link>
          </div>
          
          <div className={styles.goBackToHomeButton} ref={contactBackToHome}>
              <Link href="/">Go back to home</Link>
          </div>
      </div>
    </>
  );
}
