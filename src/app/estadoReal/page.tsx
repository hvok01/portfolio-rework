'use client';
import NavBar from '@/components/NavBar/navBar'
import React, { useLayoutEffect, useRef, useState } from 'react'
import styles from './estadoReal.module.css';
import Link from 'next/link';
import Image from 'next/image';
import EstadoRealMainImage from "../../assets/images/EstadoReal.jpg";
import EstadoRealImage1 from "../../assets/images/estadoReal/EstadoReal-1.png";
import EstadoRealImage2 from "../../assets/images/estadoReal/EstadoReal-2.png";
import EstadoRealImage3 from "../../assets/images/estadoReal/EstadoReal-3.png";
import EstadoRealImage4 from "../../assets/images/estadoReal/EstadoReal-4.png";
import EstadoRealImage5 from "../../assets/images/estadoReal/EstadoReal-5.png";
import EstadoRealImage6 from "../../assets/images/estadoReal/EstadoReal-6.png";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let slideIndex = 1;
export default function EstadoReal() {

  let slidesContainer = useRef<any>(null);
  let mainText = useRef<any>(null);
  let githubProject = useRef<any>(null);
  let getInTouch = useRef<any>(null);
  let prevArrow = useRef<any>(null);
  let nextArrow = useRef<any>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();

  function plusSlides(n: any) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n: any) {
    showSlides((slideIndex = n));
  }

  function showSlides(n: any) {
    let i;
    let slides = slidesContainer.current;
    let images = slides.children;
    if (n > images.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    images[slideIndex - 1].style.display = "block";
  }

  useLayoutEffect(() => {
    let slides = slidesContainer.current;
    let images = slides.children;
    images[0].style.display = "block";
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused: false})
      animateEstadoRealPage(tl)
      setTimeline(tl)
    });
    return () => ctx.revert();
  }, []);

  const animateEstadoRealPage = (timeline: gsap.core.Timeline) => {

    timeline.from(mainText.current, {
      duration: 2,
      x: -100,
      opacity: 0,
      ease: "power4.out",
    });

    timeline.from(githubProject.current, {
      scrollTrigger: {
        trigger: githubProject.current,
        toggleActions: "play none none none",
        start: "top bottom",
      },
      opacity: 0,
      duration: 1,
      delay: 1,
    });

    timeline.from(getInTouch.current, {
      scrollTrigger: {
        trigger: getInTouch.current,
        toggleActions: "play none none none",
        start: "top bottom",
      },
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    timeline.from(prevArrow.current, {
      scrollTrigger: {
        trigger: prevArrow.current,
        toggleActions: "play none none none",
        start: "top center",
      },
      opacity: 0,
      duration: 1,
    });

    timeline.from(nextArrow.current, {
      scrollTrigger: {
        trigger: nextArrow.current,
        toggleActions: "play none none none",
        start: "top center",
      },
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  }

  return (
    <>
    <NavBar />
    <div className={styles.gridContainer}>
      <main className={styles.worksSectionBackground}></main>
      <div className={styles.worksHeaderContainer}>
        <div className={styles.worksName}>
          <p>Estado Real</p>
        </div>
        <div className={styles.worksYear}>
          <p>2019</p>
        </div>
      </div>
      <div className={styles.worksMainImage}>
        <Image src={EstadoRealMainImage} alt="Estado Real image" />
      </div>
      <div className={styles.worksMainTextContainer} ref={mainText}>
        <h2>
          {
            "Estado Real is an app for a real estate, this was a system that i develop by myself for an asignature in Univesidad de La Punta. The goal was to learn how to create an API and develop a system that uses CRUD. For this project i worked with C# and also the MVC pattern, i used Visual Studio Community. I decided to use html, css and C# so by this time i didn't know any framework but I designed everything and also did every line of code. I'm very proud with the result."
          }
        </h2>
      </div>
    </div>
    <div className={styles.worksGalleryContainerGrid}>
      <div className={styles.worksGalleryTitle}>
        <h3>Gallery</h3>
      </div>
      <div className={styles.worksGalleryPrevious} ref={prevArrow}>
        <span className="prev" onClick={() => currentSlide(-1)}>
          &lt;-
        </span>
      </div>
      <div className={styles.worksGalleryNext} ref={nextArrow}>
        <span className="next" onClick={() => plusSlides(1)}>
          -&gt;
        </span>
      </div>
      <div className={styles.worksGalery}>
        <div className={styles.worksGaleryItem} ref={slidesContainer}>
          <Image src={EstadoRealImage1} alt="Estado Real image 1" />
          <Image src={EstadoRealImage2} alt="Estado Real image 2" />
          <Image src={EstadoRealImage3} alt="Estado Real image 3" />
          <Image src={EstadoRealImage4} alt="Estado Real image 4" />
          <Image src={EstadoRealImage5} alt="Estado Real image 5" />
          <Image src={EstadoRealImage6} alt="Estado Real image 6" />
        </div>
      </div>
      <div className={styles.worksGaleryGetInTouch} ref={getInTouch}>
        <Link href="/contact">Get in touch</Link>
      </div>
      <div className={styles.worksGaleryGithubProject} ref={githubProject}>
        <Link
          href={{ pathname: "https://github.com/hvok01/InmobEstadoReal" }}
          target="_blank"
        >
          Github project
        </Link>
      </div>
    </div>
  </>
  )
}
