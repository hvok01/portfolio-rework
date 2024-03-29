"use client";
import NavBar from "@/components/NavBar/navBar";
import styles from "./page.module.css";
import Link from "next/link";
import pintper from "../assets/images/pintper.jpg";
import estadoReal from "../assets/images/EstadoReal.jpg";
import texture from "../assets/images/texture.png";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  let homeTitle = useRef<HTMLHeadingElement>(null);
  let githubTitle = useRef<HTMLDivElement>(null);
  let dribbleTitle = useRef<HTMLDivElement>(null);
  let buttonMoreTitle = useRef<HTMLDivElement>(null);
  let containerAboutLeft = useRef<HTMLDivElement>(null);
  let containerAboutRight = useRef<HTMLDivElement>(null);
  let dividerAbout = useRef<HTMLDivElement>(null);
  let contactText = useRef<HTMLDivElement>(null);
  let contactForm = useRef<HTMLFormElement>(null);
  let footerText = useRef<HTMLHeadingElement>(null);
  let footerYear = useRef<HTMLDivElement>(null);
  let footerBtt = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();
  const [emailBody, setEmailBody] = useState("");
  const [emailName, setEmailName] = useState("");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: false });
      animateHomePage(tl);
      setTimeline(tl);
    });
    return () => ctx.revert();
  }, []);

  const animateHomePage = (timeline: gsap.core.Timeline) => {
    timeline.from(homeTitle.current, {
      duration: 2,
      x: -100,
      opacity: 0,
      ease: "power4.out",
    });
    timeline.from(
      githubTitle.current,
      { duration: 1, x: -50, opacity: 0, delay: 0.5 },
      "-=1"
    );
    timeline.from(
      dribbleTitle.current,
      { duration: 2, x: -50, opacity: 0, delay: 0.5 },
      "-=2"
    );
    timeline.from(
      buttonMoreTitle.current,
      { duration: 1, opacity: 0, delay: 1 },
      "-=.5"
    );

    timeline.to("#containerAboutLeft h1", {
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: containerAboutLeft.current,
        scrub: 1,
        start: `top 98%`,
        end: `top 70%`,
      },
    });

    timeline.to("#containerAboutRight h1", {
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: containerAboutRight.current,
        scrub: 1,
        start: `top 98%`,
        end: `top 70%`,
      },
    });

    timeline.from(dividerAbout.current, {
      scrollTrigger: {
        trigger: dividerAbout.current,
        toggleActions: "restart none none none",
        start: "bottom bottom",
      },
      x: -200,
      opacity: 0,
      duration: 1,
    });

    /* CONTACT SECTION */

    const anim = gsap.from(contactText.current, {
      x: -200,
      duration: 2,
      opacity: 0,
      ease: "power4.out",
    });

    ScrollTrigger.create({
      trigger: contactText.current,
      animation: anim,
    });

    if (contactForm.current) {
      timeline.from(contactForm.current.children[0], {
        scrollTrigger: {
          trigger: contactForm.current.children[0],
          scrub: 1,
          start: `top 80%`,
          end: `top 80%`,
        },
        opacity: 0,
      });

      timeline.from(contactForm.current.children[1], {
        scrollTrigger: {
          trigger: contactForm.current.children[1],
          scrub: 1,
          start: `top 80%`,
          end: `top 80%`,
        },
        opacity: 0,
      });

      timeline.from(contactForm.current.children[2], {
        scrollTrigger: {
          trigger: contactForm.current.children[2],
          scrub: 1,
          start: `top 80%`,
          end: `top 80%`,
        },
        opacity: 0,
      });

      timeline.from(contactForm.current.children[3], {
        scrollTrigger: {
          trigger: contactForm.current.children[3],
          scrub: 1,
          start: `top 80%`,
          end: `top 80%`,
        },
        opacity: 0,
      });
    }

    /* FOOTER SECTION */

    timeline.from(footerText.current, {
      scrollTrigger: {
        trigger: footerText.current,
        scrub: 1,
        start: `top 80%`,
        end: `top 80%`,
      },
      opacity: 0,
    });

    timeline.from(footerYear.current, {
      scrollTrigger: {
        trigger: footerText.current,
        scrub: 1,
        start: `top 80%`,
        end: `top 80%`,
      },
      opacity: 0,
    });

    timeline.from(footerBtt.current, {
      scrollTrigger: {
        trigger: footerText.current,
        scrub: 1,
        start: `top 80%`,
        end: `top 80%`,
      },
      opacity: 0,
    });
  };

  return (
    <main>
      <NavBar />
      <div className={styles.gridContainer} id="top">
        <main className={styles.homeSectionContainer}></main>
        <div className={styles.homeSection}>
          <h1 className={styles.homeSectionText} ref={homeTitle}>
            {"Welcome :). I'm Leo"} <br />
            {
              "Frontend developer based in Potrero de Los Funes, San Luis, Argentina."
            }
          </h1>
        </div>
        <div className={styles.gridLine1}></div>
        <div className={styles.gridLine2}></div>
        <div className={styles.gridLine3}></div>
        <div className={styles.gridLine4}></div>
        <div className={styles.gridLine5}></div>

        <div className={styles.homeSectionBanner} ref={buttonMoreTitle}>
          <Link href="/about" className={styles.button1}>
            More
          </Link>
        </div>

        <div className={styles.homeSectionGithub} ref={githubTitle}>
          <Link
            href={{ pathname: "https://github.com/hvok01" }}
            target="_blank"
          >
            Github
          </Link>
        </div>

        <div className={styles.homeSectionDribble} ref={dribbleTitle}>
          <Link
            href={{ pathname: "https://dribbble.com/leo01" }}
            target="_blank"
          >
            Dribble
          </Link>
        </div>

        <div className={styles.homeScrollDown}> </div>
      </div>

      <div className={styles.homeAboutSection}>
        <div
          className={styles.aboutMainText}
          ref={containerAboutLeft}
          id="containerAboutLeft"
        >
          <h1>I like to create,</h1>
          <h1>learn,</h1>
          <h1>share</h1>
          <h1>and</h1>
          <h1>Lo-fi music.</h1>
        </div>
        <div className={styles.aboutDivider} ref={dividerAbout}></div>
        <div
          className={styles.aboutMainText2}
          ref={containerAboutRight}
          id="containerAboutRight"
        >
          <h1>I can build,</h1>
          <h1>design,</h1>
          <h1>develop,</h1>
          <h1>websites</h1>
          <h1>and apps.</h1>
        </div>
        <div className={styles.aboutButton2}>
          <Link href="/contact">Get in touch!</Link>
        </div>
        <div className={styles.aboutBox}>
          <Link href="/about">Whoami?</Link>
        </div>

        <div className={styles.aboutBackToTop}>
          <Link href={{ pathname: "/", hash: "top" }} target="_self">
            Back to top
          </Link>
        </div>

        <div className={styles.aboutWorks}>
          <div className={styles.aboutWorksRotate}>
            <Link href={{ pathname: "/", hash: "middle" }} target="_self">
              Work-&gt;
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.workContainer} id="middle">
        <div className={styles.workHeader}>
          <p>Pintper</p>
          <p>2020</p>
        </div>
        <div className={styles.workImageContainer}>
          <Link href="/work" className={styles.workButton}>
            More
          </Link>
          <Image
            src={pintper}
            alt="pintper image"
            className={styles.workImage}
          />
        </div>

        <div className={styles.workHeader2}>
          <p>Estado Real</p>
          <p>2019</p>
        </div>
        <div className={styles.workImageContainer2}>
          <Link href="/work" className={styles.workButton}>
            More
          </Link>
          <Image
            src={estadoReal}
            alt="estado real image"
            className={styles.workImage}
          />
        </div>
      </div>

      <div className={styles.contactFooterContainer}>
        <div className={styles.contactContainer}>
          <div className={styles.contactText} ref={contactText}>
            <h1>Get in touch.</h1>
          </div>
          <div className={styles.contactFormContainer}>
            <form
              action={`mailto:lecofdesings2015@gmail.com?subject=cv-contact-by-${emailName}&body${emailBody}`}
              method="post"
              encType="text/plain"
              className={styles.contactForm}
              ref={contactForm}
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name:"
                className={styles.contactInput}
                onChange={(e) => setEmailName(e.target.value)}
              />
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Message:"
                className={styles.contactInput}
                onChange={(e) => setEmailBody(e.target.value)}
              />
              <input
                type="submit"
                value="Send ->"
                className={styles.contactButton}
              />
            </form>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.footerImageContainer}>
            <Image src={texture} alt="placeholder-image" unoptimized />
            <h1 ref={footerText}>K. Leonel Gomez Rodriguez</h1>
          </div>
          <div className={styles.footer2020Container} ref={footerYear}>
            <p>2024</p>
          </div>
          <div className={styles.footerBackToTopContainer} ref={footerBtt}>
            <Link href={{ pathname: "/", hash: "top" }} target="_self">
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
