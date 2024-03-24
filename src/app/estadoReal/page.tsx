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
import Close from '@/components/Close/close';

gsap.registerPlugin(ScrollTrigger);

let slideIndex = 1;
export default function EstadoReal() {
  let slidesContainer = useRef<HTMLDivElement>(null);
  let slidesContainerModal = useRef<HTMLDivElement>(null);
  let mainText = useRef<HTMLDivElement>(null);
  let githubProject = useRef<HTMLDivElement>(null);
  let getInTouch = useRef<HTMLDivElement>(null);
  let prevArrow = useRef<HTMLDivElement>(null);
  let nextArrow = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currenImageId, setCurrentImageId] = useState<number>(0);

  function plusSlides(n: number, container: React.RefObject<HTMLDivElement>) {
    showSlides((slideIndex += n), container);
  }

  function currentSlide(n: number, container: React.RefObject<HTMLDivElement>) {
    showSlides((slideIndex = n), container);
  }

  function showSlides(n: number, container: React.RefObject<HTMLDivElement>) {
    let i;
    let slides = container.current;
    if (slides) {
      let images: HTMLCollection = slides.children;
      if (n > images.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = images.length;
      }
      for (i = 0; i < images.length; i++) {
        const el = images[i] as HTMLElement;
        el.style.display = "none";
      }
      const el = images[slideIndex - 1] as HTMLElement;
      el.style.display = "block";
    }
  }

  useLayoutEffect(() => {
    let slides = slidesContainer.current;
    if (slides) {
      let images: HTMLCollection = slides.children;
      const el = images[0] as HTMLElement;
      el.style.display = "block";
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused: false});
      animateEstadoRealPage(tl);
      setTimeline(tl);
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

  const handleModal = (setModalValue: boolean, imageId: number) => {
    setShowModal(setModalValue);
    setCurrentImageId(imageId);
  }

  const handleImageCarrousel = (add: boolean, container: React.RefObject<HTMLDivElement>) => {
    if (add) {
      plusSlides(1, container);
      if (currenImageId < 6) {
        let lastImageId = currenImageId;
        setCurrentImageId(lastImageId + 1);
      } else {
        setCurrentImageId(1);
      }
    } else {
      plusSlides(-1, container);
      if (currenImageId > 1) {
        let lastImageId = currenImageId;
        setCurrentImageId(lastImageId - 1);
      } else {
        setCurrentImageId(6);
      }
    }
  }

  return (
    <>
    {
      showModal && (
        <div className={styles.galleryModalContainer}>
          <div className={styles.closeIcon} onClick={() => setShowModal(false)}>
            <Close color='#0c0c0c'/>
          </div>
          <div className={styles.imagesContainer} ref={slidesContainerModal}>
            <Image src={EstadoRealImage1} alt="Estado Real image 1" onClick={() => handleModal(true, 1)}/>
            <Image src={EstadoRealImage2} alt="Estado Real image 2" onClick={() => handleModal(true, 2)}/>
            <Image src={EstadoRealImage3} alt="Estado Real image 3" onClick={() => handleModal(true, 3)}/>
            <Image src={EstadoRealImage4} alt="Estado Real image 4" onClick={() => handleModal(true, 4)}/>
            <Image src={EstadoRealImage5} alt="Estado Real image 5" onClick={() => handleModal(true, 5)}/>
            <Image src={EstadoRealImage6} alt="Estado Real image 6" onClick={() => handleModal(true, 6)}/>
          </div>
          <div className={styles.galleryButtons}>
            <span className="prev" onClick={() => handleImageCarrousel(false, slidesContainerModal)}>
              &lt;-
            </span>
            <div>
              0{currenImageId}/06
            </div>
            <span className="next" onClick={() => handleImageCarrousel(true, slidesContainerModal)}>
              -&gt;
            </span>
          </div>
        </div>
      )
    }
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
        <h3>{"Gallery (6)"}</h3>
      </div>
      <div className={styles.worksGalleryPrevious} ref={prevArrow}>
        <span className="prev" onClick={() => handleImageCarrousel(false, slidesContainer)}>
          &lt;-
        </span>
      </div>
      <div className={styles.worksGalleryNext} ref={nextArrow}>
        <span className="next" onClick={() => handleImageCarrousel(true, slidesContainer)}>
          -&gt;
        </span>
      </div>
      <div className={styles.worksGalery}>
        <div className={styles.worksGaleryItem} ref={slidesContainer}>
          <Image src={EstadoRealImage1} alt="Estado Real image 1" onClick={() => handleModal(true, 1)}/>
          <Image src={EstadoRealImage2} alt="Estado Real image 2" onClick={() => handleModal(true, 2)}/>
          <Image src={EstadoRealImage3} alt="Estado Real image 3" onClick={() => handleModal(true, 3)}/>
          <Image src={EstadoRealImage4} alt="Estado Real image 4" onClick={() => handleModal(true, 4)}/>
          <Image src={EstadoRealImage5} alt="Estado Real image 5" onClick={() => handleModal(true, 5)}/>
          <Image src={EstadoRealImage6} alt="Estado Real image 6" onClick={() => handleModal(true, 6)}/>
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
