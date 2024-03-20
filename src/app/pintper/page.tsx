'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';
import styles from './pintPer.module.css';
import PintperMainImage from "../../assets/images/pintper.jpg";
import PintperImage1 from "../../assets/images/pintper/pintper-1.png";
import PintperImage2 from "../../assets/images/pintper/pintper-2.png";
import PintperImage3 from "../../assets/images/pintper/pintper-3.png";
import PintperImage4 from "../../assets/images/pintper/pintper-4.png";
import PintperImage5 from "../../assets/images/pintper/pintper-5.png";
import PintperImage6 from "../../assets/images/pintper/pintper-6.png";
import NavBar from '@/components/NavBar/navBar';
import Image from 'next/image';
import Link from 'next/link';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let slideIndex = 1;
export default function PintPer() {
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
      animatePintPerPage(tl)
      setTimeline(tl)
    });
    return () => ctx.revert();
  }, []);

  const animatePintPerPage = (timeline: gsap.core.Timeline) => {
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
  };

  return (
    <>
      <NavBar />
      <div className={styles.gridContainer}>
        <main className={styles.worksSectionBackground}></main>
        <div className={styles.worksHeaderContainer}>
          <div className={styles.worksName}>
            <p>Pintper</p>
          </div>
          <div className={styles.worksYear}>
            <p>2020</p>
          </div>
        </div>
        <div className={styles.worksMainImage}>
          <Image src={PintperMainImage} alt="pintper image" />
        </div>
        <div className={styles.worksMainTextContainer} ref={mainText}>
          <h2>
            {
              "Pintper allows users to get homemade beer from different local stores. A friend told me that he wanted to work with me so we did this project for practise and also to have a great, looking good project for our portfolio. For this project we use the model view controller pattern and we work with MySql as database. This project start in january of 2020 but because of the Coronavirus we could't finish it. Anyways we had a great time and we learn a lot working on this."
            }
          </h2>
        </div>
      </div>
      <div className={styles.worksGalleryContainerGrid}>
        <div className={styles.worksGalleryTitle}>
          <h3>Gallery</h3>
        </div>
        <div className={styles.worksGalleryPrevious} ref={prevArrow}>
          <span className="prev" onClick={() => plusSlides(-1)}>
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
            <Image src={PintperImage1} alt="pintper image 1" />
            <Image src={PintperImage2} alt="pintper image 2" />
            <Image src={PintperImage3} alt="pintper image 3" />
            <Image src={PintperImage4} alt="pintper image 4" />
            <Image src={PintperImage5} alt="pintper image 5" />
            <Image src={PintperImage6} alt="pintper image 6" />
          </div>
        </div>
        <div className={styles.worksGaleryGetInTouch} ref={getInTouch}>
          <Link href="/contact">Get in touch</Link>
        </div>
        <div className={styles.worksGaleryGithubProject} ref={githubProject}>
          <Link
            href={{ pathname: "https://github.com/hvok01/PintPer" }}
            target="_blank"
          >
            Github project
          </Link>
        </div>
      </div>
    </>
  )
}
