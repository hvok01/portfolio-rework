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
import Close from '@/components/Close/close';

gsap.registerPlugin(ScrollTrigger);

let slideIndex = 1;
export default function PintPer() {
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
      animatePintPerPage(tl);
      setTimeline(tl);
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
        scrub: 1,
        start: `bottom bottom`,
        end: `bottom bottom`,
      },
      opacity: 0,
    });

    timeline.from(getInTouch.current, {
      scrollTrigger: {
        trigger: getInTouch.current,
        scrub: 1,
        start: `bottom bottom`,
        end: `bottom bottom`,
      },
      opacity: 0,
    });

    timeline.from(prevArrow.current, {
      scrollTrigger: {
        trigger: prevArrow.current,
        scrub: 1,
        start: `top 80%`,
        end: `top 80%`,
      },
      opacity: 0,
      stagger: 0.7,
    });

    timeline.from(nextArrow.current, {
      scrollTrigger: {
        trigger: nextArrow.current,
        scrub: 1,
        start: `top 90%`,
        end: `top 90%`,
      },
      opacity: 0,
      stagger: 0.5,
    });
  };

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
              <Image src={PintperImage1} alt="pintper image 1" onClick={() => handleModal(true, 1)}/>
              <Image src={PintperImage2} alt="pintper image 2" onClick={() => handleModal(true, 2)}/>
              <Image src={PintperImage3} alt="pintper image 3" onClick={() => handleModal(true, 3)}/>
              <Image src={PintperImage4} alt="pintper image 4" onClick={() => handleModal(true, 4)}/>
              <Image src={PintperImage5} alt="pintper image 5" onClick={() => handleModal(true, 5)}/>
              <Image src={PintperImage6} alt="pintper image 6" onClick={() => handleModal(true, 6)}/>
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
            <Image src={PintperImage1} alt="pintper image 1" onClick={() => handleModal(true, 1)}/>
            <Image src={PintperImage2} alt="pintper image 2" onClick={() => handleModal(true, 2)}/>
            <Image src={PintperImage3} alt="pintper image 3" onClick={() => handleModal(true, 3)}/>
            <Image src={PintperImage4} alt="pintper image 4" onClick={() => handleModal(true, 4)}/>
            <Image src={PintperImage5} alt="pintper image 5" onClick={() => handleModal(true, 5)}/>
            <Image src={PintperImage6} alt="pintper image 6" onClick={() => handleModal(true, 6)}/>
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
