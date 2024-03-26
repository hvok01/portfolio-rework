'use client';
import NavBar from "@/components/NavBar/navBar";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import styles from './work.module.css';
import pinterImage from '../../assets/images/pintper.jpg';
import estadoRealImage from '../../assets/images/EstadoReal.jpg';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {

  let workPintperTitle = useRef<HTMLDivElement>(null);
  let githubRepoPintper = useRef<HTMLDivElement>(null);
  let githubRepoEstadoReal = useRef<HTMLDivElement>(null);
  let workEstadoRealTitle = useRef<HTMLDivElement>(null);
  let btt = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused: false})
      animateWorkPage(tl)
      setTimeline(tl)
    });
    return () => ctx.revert();
  },[]);

  const animateWorkPage = (timeline: gsap.core.Timeline) => {
    timeline.from(workPintperTitle.current, {
      duration: 2,
      opacity: 0,
      ease: "power4.out",
      delay: .5,
    });

    timeline.from(githubRepoPintper.current, {
      duration: 1,
      opacity: 0,
      delay: 1,
    });

    timeline.from(workEstadoRealTitle.current, {
      scrollTrigger: {
        trigger: workEstadoRealTitle.current,
        scrub: 1,
        start: `top 80%`,
        end: `top 60%`,
      },
      x: -200,
      opacity: 0,
      ease: "power4.out",
    });

    timeline.from(githubRepoEstadoReal.current, {
      scrollTrigger: {
        trigger: githubRepoEstadoReal.current,
        scrub: 1,
        start: `top 90%`,
        end: `top 90%`,
      },
      opacity: 0,
    });

    timeline.from(btt.current, {
      scrollTrigger: {
        trigger: btt.current,
        scrub: 1,
        start: `top 90%`,
        end: `top 90%`,
      },
      opacity: 0,
    });
  }

  return (
    <>
      <NavBar />
      <div className={styles.gridContainer} id="top">
        <main className={styles.worksSectionContainer}></main>
        <div className={styles.worksSection}>
          <h1 className={styles.worksSectionText}>works</h1>
        </div>

        <div className={styles.pintperHeader}>
          <div className={styles.pintperHeaderContainer}>
            <p>Pintper</p>
          </div>
          <div className={styles.pintperHeader2020}>
            <p>2020</p>
          </div>
        </div>

        <div className={styles.pintperImageContainer}>
          <Image src={pinterImage} alt="pintper image"/>
        </div>

        <div className={styles.pintperTextContainer} ref={workPintperTitle}>
          <h2>
            Pintper allows users to get homemade beer from different local
            stores. A friend told me that he wanted to work with me so we did
            this project for practise and also to have a great, looking good
            project for our portfolio.
          </h2>
        </div>

        <div className={styles.pintperMore}>
          <Link href="/pintper">More</Link>
        </div>
        <div
          className={styles.pintperGithubLinkContainer}
          ref={githubRepoPintper}
        >
          <Link
            href={{ pathname: "https://github.com/hvok01/PintPer" }}
            target="_blank"
          >
            Github Repo
          </Link>
        </div>
      </div>

      <div className={styles.estadoRealContainer}>
        <div className={styles.estadoRealHeader}>
          <div className={styles.estadoRealHeaderContainer}>
            <p>Estado Real</p>
          </div>
          <div className={styles.estadoRealHeader2020}>
            <p>2020</p>
          </div>
        </div>

        <div className={styles.estadoRealImageContainer}>
          <Image src={estadoRealImage} alt="Estado Real image"/>
        </div>

        <div
          className={styles.estadoRealTextContainer}
          ref={workEstadoRealTitle}
        >
          <h2>
            Estado Real is a system for a ficticial real estate, this was a
            system that i develop by my self for an asignature in Univesidad de La Punta. The goal was to learn how to create an API
            and develop a system that uses CRUD.
          </h2>
        </div>

        <div className={styles.estadoRealMore}>
          <Link href="/estadoReal">More</Link>
        </div>
        <div
          className={styles.estadoRealGithubLinkContainer}
          ref={githubRepoEstadoReal}
        >
          <Link
            href={{ pathname: "https://github.com/hvok01/InmobEstadoReal" }}
            target="_blank"
          >
            Github Repo
          </Link>
        </div>

        <div className={styles.backtotopContainer} ref={btt}>
          <Link
            href={{ pathname: "/work", hash: "top" }}
            target="_self"
          >Back to top</Link>
        </div>
      </div>
    </>
  );
}
