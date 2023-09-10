import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { Fragment, useEffect, useRef } from "react";
import { Sling } from "hamburger-react";
import styles from "./Index.module.scss";
import { gsap } from "gsap";

export default function Home() {
  const imageRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const info = infoRef.current;

    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.from(image, { xPercent: -200, duration: 2, ease: "ease" }).from(info, {
        opacity: 0,
        yPercent: 100,
        duration: 1.5,
      });
    });

    return () => ctx.revert();
  });
  return (
    <Fragment>
      <Head>
        <title>Bicycle Site!</title>
        <meta name="description" content="Dummy bicycle site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cirleplus.svg" />
      </Head>
      <main>
        <nav className={styles.navigation}>
          <div className={styles["navigation__container"]}>
            <p>RACLING</p>
            <ul>
              <li>
                <img src="/searchicon.svg" alt="search icon" />
              </li>
              <li>
                <img src="/shoppingcart.svg" alt="search icon" />
              </li>
              <li>
                <Sling color="grey" size={20} />
              </li>
            </ul>
          </div>
          <div className={styles["navigation__line"]}></div>
        </nav>
        <section className={styles["section"]}>
          <div className={styles["section__container-1"]}>
            <h1>SANDER SYSTEM</h1>
            <p>JI-MOD-WEC-021 </p>
          </div>

          <div ref={infoRef} className={styles["section__container-2"]}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="364"
              height="130"
              viewBox="0 0 364 130"
              fill="none"
            >
              <path
                d="M348.812 0.642227V24.3779V69.3209V91.7924M363.557 129.009L321.646 114.43C321.329 114.32 320.996 114.264 320.661 114.264H293.523H238.233H127.654H0.342773"
                stroke="#D9D9D9"
                stroke-opacity="0.3"
                stroke-width="0.5"
                stroke-dasharray="3 6"
              />
            </svg> */}
            <p>
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          <div className={styles["section__container-3"]}>
            {/* <div className={styles["section__container-3__blur-background"]}> */}
            <ul>
              <li>
                <div>
                  <p className={styles["section__container-3--heading"]}>
                    Size
                  </p>
                  <p>26'</p>
                </div>
              </li>
              <li>
                <div>
                  <p className={styles["section__container-3--heading"]}>
                    Chain
                  </p>
                  <p>Racing th H56 5Amp Des</p>
                </div>
              </li>
              <li>
                <div>
                  <p className={styles["section__container-3--heading"]}>
                    Brakes
                  </p>
                  <p>5Amp Des</p>
                </div>
              </li>
              {/* </ul> */}
              {/*  */}
              {/* <ul> */}
              <li>
                <div>
                  <p className={styles["section__container-3--heading"]}>
                    Tyres
                  </p>
                  <p>Compan H56 Racing th H56</p>
                </div>
              </li>
              <li>
                <div>
                  <p className={styles["section__container-3--heading"]}>
                    Bars
                  </p>
                  <p>Compan H56</p>
                </div>
              </li>
              <li>
                <div>
                  <p className={styles["section__container-3--heading"]}>
                    Brakes
                  </p>
                  <p>Fulcrum Racing th</p>
                </div>
              </li>
              {/* </ul> */}
              {/*  */}
              {/* <ul> */}
              <li>
                <div>
                  <p className={styles["section__container-3--heading"]}>
                    Crankset
                  </p>
                  <p> Racing th H56</p>
                </div>
              </li>
              <li>
                <div>
                  <p className={styles["section__container-3--heading"]}>
                    Wheels
                  </p>
                  <p>Racing th H56</p>
                </div>
              </li>
              <li className={styles["section__container-3--desktop-none"]}>
                <div>
                  <p className={styles["section__container-3--heading"]}>
                    Wheels
                  </p>
                  <p>Racing th H56</p>
                </div>
              </li>
            </ul>
            {/* </div> */}
          </div>
          <div className={styles["section__container-4"]}>
            <Image
              ref={imageRef}
              src="/bicycle.svg"
              width={1184.3214111328125}
              height={687.9412841796875}
              priority
            />
          </div>
          <Image
            className={styles["section--background"]}
            src="/RACLING.svg"
            width={1184.3214111328125}
            height={687.9412841796875}
            alt="RACKLING"
            priority
          />
        </section>
      </main>
    </Fragment>
  );
}
