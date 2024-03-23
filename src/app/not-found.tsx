'use client';
import NavBar from "@/components/NavBar/navBar";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import styles from './[...not_found]/notFound.module.css';
import gsap from "gsap";

export default function NotFound() {
  let mainTitle = useRef<HTMLDivElement>(null);
  let backToHome = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused: false})
      animateNotFound(tl)
      setTimeline(tl)
    });
    return () => ctx.revert();
  },[]);

  const animateNotFound = (timeline: gsap.core.Timeline) => {
    timeline.from(mainTitle.current, {
      duration: 2,
      opacity: 0,
    });
    timeline.from(backToHome.current, {
        duration: 2,
        opacity: 0,
        delay: .5
    });
  }

  return (
      <>
        <NavBar />
        <div className={styles.gridContainerNotFound}>
            <main className={styles.notFoundContainer}></main>
            <div className={styles.notFound} ref={mainTitle}>
                <h1 className={styles.notFoundText}>404: Page not found.</h1>
            </div>
            <div className={styles.linkGoBackToHome} ref={backToHome}>
                <Link href='/'> Go back to home</Link>
            </div>
        </div>
      </>
  );
}
