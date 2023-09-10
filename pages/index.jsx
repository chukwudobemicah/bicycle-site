import Head from "next/head";
import Image from "next/image";
import { Fragment, useEffect, useRef } from "react";
import { Sling } from "hamburger-react";
import styles from "./Index.module.scss";
import { gsap } from "gsap";

export default function Home() {
  const mobileHeroRef = useRef(null);
  const desktopHeroRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const mobileHero = mobileHeroRef.current;
    const desktopHero = desktopHeroRef.current;
    const info = infoRef.current;

    let ctx = gsap.context(() => {
      gsap.from(mobileHero, {
        xPercent: -200,
        duration: 2,
        ease: "ease",
      });
      gsap.from(desktopHero, {
        xPercent: -200,
        duration: 2,
        ease: "ease",
      });
      gsap.from(info, {
        opacity: 0,
        yPercent: 100,
        duration: 1.5,
        delay: 2,
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
      {/* BEM naming convention */}
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
            <p>
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          <div className={styles["section__container-3"]}>
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
              {/*  */}
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
              {/*  */}
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
          </div>
          <div className={styles["section__container-4"]}>
            <Image
              className={styles["section__container-4--mobile-hero"]}
              ref={mobileHeroRef}
              src="/bicycle.svg"
              width={750}
              height={687.9412841796875}
              priority
            />
            <Image
              className={styles["section__container-4--desktop-hero"]}
              ref={desktopHeroRef}
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
