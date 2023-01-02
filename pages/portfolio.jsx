import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Portfolio.module.css";

const Portfolio = () => {
  const [subject, setSubject] = useState("all");

  return (
    <>
      <Head>
        <title>دپارتمان تخصصی طراحی وب - سوالات متداول</title>
        <meta
          name="description"
          content="بهترین شرکت طراحی سایت و اپلیکیشن با بهترین کیفیت و هزینه مناسب در سراسر ایران"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     

      <main className={styles.main}>
        {/* ----------------------------------------------- Subjects */}
        <ul className={styles.subjects}>
          <li
            onClick={() => setSubject("all")}
            className={subject == "all" ? styles.activeSubject : null}
          >
            همه
          </li>
          <li
            onClick={() => setSubject("co")}
            className={subject == "co" ? styles.activeSubject : null}
          >
            شرکتی
          </li>
          <li
            onClick={() => setSubject("org")}
            className={subject == "org" ? styles.activeSubject : null}
          >
            سازمانی
          </li>
          <li
            onClick={() => setSubject("shop")}
            className={subject == "shop" ? styles.activeSubject : null}
          >
            فروشگاهی
          </li>
          <li
            onClick={() => setSubject("startup")}
            className={subject == "startup" ? styles.activeSubject : null}
          >
            استارتاپ
          </li>
        </ul>

        {/* ----------------------------------------------- Cards */}
        <div className={styles.cards}>
          <div className={styles.card}>
          <Link href="https://digitalSmart.ir" rel="noopener noreferrer" target="_blank">
            <figure className={styles.imageContainer}>
              <Image
                src="/assets/images/portfolio/digitalsmart.PNG"
                width={360}
                height={252}
                alt=""
              />
              <span className={styles.overlay}>
                <i className="fa-solid fa-search"></i>
              </span>
            </figure>
            </Link>

            <div className={styles.details}>
              <p className={styles.title}>دیجیتال اسمارت</p>
              <p className={styles.desc}>فروشگاه لوازم جانبی موبایل و کامپیوتر</p>
            </div>
          </div>

          <div className={styles.card}>
          <Link href="https://demo.4ws.ir/fomex2" rel="noopener noreferrer" target="_blank">
            <figure className={styles.imageContainer}>
              <Image
                src="/assets/images/portfolio/fomex.PNG"
                width={360}
                height={252}
                alt=""
              />
              <span className={styles.overlay}>
                <i className="fa-solid fa-search"></i>
              </span>
            </figure>
            </Link>
            <div className={styles.details}>
              <p className={styles.title}>فومکس</p>
              <p className={styles.desc}>شرکت صبا فوم آریا</p>
            </div>
          </div>

          <div className={styles.card}>
          <Link href="https://jvr.ae" rel="noopener noreferrer" target="_blank">
            <figure className={styles.imageContainer}>
              <Image
                src="/assets/images/portfolio/jvr.PNG"
                width={360}
                height={252}
                alt=""
              />
              <span className={styles.overlay}>
                <i className="fa-solid fa-search"></i>
              </span>
            </figure>
            </Link>

            <div className={styles.details}>
              <p className={styles.title}>JVR.AE</p>
              <p className={styles.desc}>UAE Real State</p>
            </div>
          </div>

          <div className={styles.card}>
          <Link href="https://sabetkala.com" rel="noopener noreferrer" target="_blank">
            <figure className={styles.imageContainer}>
              <Image
                src="/assets/images/portfolio/sabetkala.PNG"
                width={360}
                height={252}
                alt=""
              />
              <span className={styles.overlay}>
                <i className="fa-solid fa-search"></i>
              </span>
            </figure>
            </Link>

            <div className={styles.details}>
              <p className={styles.title}>ثابت کالا</p>
              <p className={styles.desc}>پخش کننده محصولات حرفه ای سالنی</p>
            </div>
          </div>

          <div className={styles.card}>
          <Link href="https://shahrkodak.com" rel="noopener noreferrer" target="_blank">
            <figure className={styles.imageContainer}>
              <Image
                src="/assets/images/portfolio/shahrkodak.PNG"
                width={360}
                height={252}
                alt=""
              />
              <span className={styles.overlay}>
                <i className="fa-solid fa-search"></i>
              </span>
            </figure>
            </Link>

            <div className={styles.details}>
              <p className={styles.title}>شهرکودک</p>
              <p className={styles.desc}>عرضه کننده محصولات مراقبت از کودک و سیسمونی</p>
            </div>
          </div>

          <div className={styles.card}>
          <Link href="https://viraarch.ir" rel="noopener noreferrer" target="_blank">
            <figure className={styles.imageContainer}>
              <Image
                src="/assets/images/portfolio/vira.PNG"
                width={360}
                height={252}
                alt=""
              />
              <span className={styles.overlay}>
                <i className="fa-solid fa-search"></i>
              </span>
            </figure>
            </Link>

            <div className={styles.details}>
              <p className={styles.title}>ویرا</p>
              <p className={styles.desc}>استودیوی معماری ویرا</p>
            </div>
          </div>

          <div className={styles.card}>
          <Link href="https://zandikala.com" rel="noopener noreferrer" target="_blank">
            <figure className={styles.imageContainer}>
              <Image
                src="/assets/images/portfolio/zandikala.PNG"
                width={360}
                height={252}
                alt=""
              />
              <span className={styles.overlay}>
                <i className="fa-solid fa-search"></i>
              </span>
            </figure>
            </Link>

            <div className={styles.details}>
              <p className={styles.title}>زندی کالا</p>
              <p className={styles.desc}>خرید سیم و کابل و روشنایی</p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Portfolio;
