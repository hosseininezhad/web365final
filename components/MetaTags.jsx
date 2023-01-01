import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/common/Header";
import styles from "../styles/Portfolio.module.css";

const Portfolio = (props) => {

    return(
        <>
        <Head>
        <meta name="keywords" content="طراحی وبسایت شیراز, طراحی اپلیکیشن شیراز, طراحی لوگو, طراحی سایت با وردپرس شیراز, طراحی سایت تهران"/>
        <meta name="description" content="مجموعه web365 تشکیل شده از جوانان خبره و باهوش که هر کدام در تخصص خود حرفه ای و با تجربه هستند و با سطح دانش بالا و بکارگیری خلاقیت فردی کار شما را به بهترین صورت انجام می دهند."/>
        <meta name="subject" content="شرکت طراحی وبسایت شیراز"/>
        <meta name="copyright" content="Web365" />
        <meta name="language" content="fa-IR" />
        <meta name="robots" content="index, follow" />
        <meta name="revised" content={Date.now()} />




        {/* Other */}
        <meta name="summary" content="خلاصه مقاله" />
        <meta name="topic" content="موضوع مقاله" />
        <meta name="Classification" content="Business" />
        <meta name="author" content="Web365 Co, info@web365.ir" />
        <meta name="designer" content="Web365 Co" />
        <meta name="owner" content="Web365" />
        <meta name="url" content="https://www.web365.ir" />
        <meta name="category" content="طراحی سایت" />


        </Head>
        </>
    )
};

export default Portfolio;
