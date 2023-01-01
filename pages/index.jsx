import Head from "next/head";
import Image from "next/image";

import React, { useState, useEffect, useContext } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

import Cookies from "js-cookie";

import styles from "../styles/LandingPage.module.css";

import { GET_USER_DETAIL } from "./api/index";

import { PostUrl, GetUrl, GetAuthUrl } from "./api/config";

import { Context } from "../context/index";

export default function Home() {



  const handlerPosts = () => {
    GetUrl("/api/data").then((res, err) => {
      if (res && res.status === 200) {
        console.log(res.data)
      } else {
        console.log("error")
      }
    });
  }

  handlerPosts()

  useEffect(() => { }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>دپارتمان تخصصی طراحی وب</title>
        <meta
          name="description"
          content="بهترین شرکت طراحی سایت و اپلیکیشن با بهترین کیفیت و هزینه مناسب در سراسر ایران"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.question}>
          <h4>صفر تا صد کسب و کار اینترنتی خود را به ما بسپارید</h4>
          <p>
          در گام به گام مسیر راه اندازی وب سایت، از ثبت دامنه تا میزبانی وب، و از طراحی تا پیاده سازی و پشتیبانی وب سایت، در کنار شما هستیم.            </p>
        </div>

        <div className={styles.services}>
          <div className={styles.service}>
            <Image
              src="/assets/images/icons/services-01.png"
              width={120}
              height={112}
              alt=""
            />
             <h5>تولید محتوا</h5>
            <p>
            یکی از خدمات طراحی سایت شرکت دپارتمان تخصصی طراحی وب است که به صورت تخصصی انجام می شود.
            </p>   
            
          </div>

          <div className={styles.service}>
            <Image
              src="/assets/images/icons/services-05.png"
              width={120}
              height={112}
              alt=""
            />
            <h5>بازاریابی شبکه های اجتماعی</h5>
            <p>
            یکی دیگر از ابزارهای دیجیتال مارکتینگ است که می‌توان از پلتفرم‌های شبکه‌های اجتماعی برای تبلیغ محصولات و یا خدمات خود استفاده کرد.
            </p>
                      </div>

          <div className={styles.service}>
            <Image
              src="/assets/images/icons/services-06.png"
              width={120}
              height={112}
              alt=""
            />
            <h5>طراحی کمپین تبلیعاتی</h5>
            <p>
            یک کمپین تبلیغاتی خوب و استاندارد قابلیت این را دارد که در مدت زمانی کوتاه شما و برندتان را به مردم معرفی کند
            </p>          </div>

          <div className={styles.service}>
            <Image
              src="/assets/images/icons/services-03.png"
              width={120}
              height={112}
              alt=""
            />
<h5>بهینه سازی سایت</h5>
            <p>
            قرار گرفتن وب سایت شما در رتبه‌های بالا در صفحات نتایج موتور‌های جستجو و افزایش فروش بیشتر در کمترین زمان ممکن
            </p>


            </div>
        </div>

        <div className={styles.first}>
          <Image
            src="/assets/images/illustration/first.png"
            width={517}
            height={473}
            alt=""
          />
          <div className={styles.details}>
            <p className={styles.question}>ریسپانسیو یا واکنشگرا ؟</p>
            <p className={styles.title}>
            برای اینکه وبسایتی زیبا و انعطاف پذیر داشته باشید
            </p>
            <p className={styles.desc}>
            ریسپانسیو یا واکنشگرا بودن یکی از خصوصیات مهم وب سایت ها می باشد. وب سایتی که Responsive نباشد نمی تواند در رقابت کنونی حضور داشته باشد. و خیلی سریع مخاطبین خود را از دست می دهد.

منظور کلی از واکنشگرا بودن وب سایت این است که وب سایت طوری طراحی شده باشد که هنگام نمایش بر روی هر دستگاه نمایشگری، بهترین حالت نمایش را داشته باشد.

یعنی زمانی که با تلفن همراه یا موبایل وارد وب سایت می شویم وب سایت را به صورت کامل و صحیح مشاهده کنیم و اصلا نیازی به اسکرول صفحه نباشد.

برای مثال وقتی وارد یک وب سایت غیر واکنشگرا می شوید چون اندازه المان های آن برای کامپیوتر کدنویسی شده است شما باید برای دیدن همه وب سایت مجبور باشید صفحه گوشی موبایل را فقط اسکرول کنید.
            </p>

            <ul>
              <li>
                <i className="fa-solid fa-shield-check"></i>
                جذب کاربر وفادار
              </li>
              <li>
                <i className="fa-solid fa-shield-check"></i>
                افزایش رتبه گوگل
              </li>
              <li>
                <i className="fa-solid fa-shield-check"></i>
                افزایش فروش
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.second}>
          <Image
            src="/assets/images/illustration/second.webp"
            width={450}
            height={450}
            alt=""
          />
          <div className={styles.details}>
            <p className={styles.question}>ما چه میکنیم؟</p>
            <p className={styles.title}>
              چیزی که ما برای پیشرفت شما پیشنهاد میدیم
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <Image
                  src="/assets/images/icons/services-02.png"
                  width={80}
                  height={75}
                  alt=""
                />
                <div className={styles.details}>
                  <h5 className={styles.title}>سئو وبسایت</h5>
                  <p className={styles.desc}>
                  سئو (SEO) برای موتورهای جستجو، به منظور بهبود عملکرد سایت شما براساس استاندارهای موتورهای جستجو و جذب بازدیدکنندگان بیشتر از این طریق انجام میگیرد.                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <Image
                  src="/assets/images/icons/services-04.png"
                  width={80}
                  height={75}
                  alt=""
                />
                <div className={styles.details}>
                  <h5 className={styles.title}>تولید محتوا</h5>
                  <p className={styles.desc}>
                  تولید محتوا براساس اصول سئو و کاربرپسند یکی از خدمات طراحی سایت شرکت دپارتمان تخصصی طراحی وب است که به صورت تخصصی انجام می شود.                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <Image
                  src="/assets/images/icons/services-06.png"
                  width={80}
                  height={75}
                  alt=""
                />
                <div className={styles.details}>
                  <h5 className={styles.title}>پشتیبانی سایت</h5>
                  <p className={styles.desc}>
                  پشتیبانی سایت، که شامل رفع ایرادات آن از کدنویسی گرفته تا هاست به صورت کاملا تخصصی و با تیم مجرب این حوزه در دپارتمان تخصصی طراحی وب انجام می شود.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.third}>
          <Image
            src="/assets/images/illustration/third.png"
            width={555}
            height={450}
            alt=""
          />
          <div className={styles.details}>
            <p className={styles.question}>برای چی اینجایی؟</p>
            <p className={styles.title}>
              طراحی وبسایت و افزایش فروش بصورت تخصصی
            </p>
            <p className={styles.desc}>
            طراحی انواع سایت از خدمات تخصصی web365 می باشد که توسط تیم مجرب این شرکت انجام می شود. هدف تیم ما این است که تلاش کند با توجه به نوع کسب وکار مشتریان و نیاز آن ها، یک طرح سایت حرفه ای کاملا تخصصی و بهینه شده و منطبق بر اصول سئو را برای شما ایجاد نماید.
            </p>

            <ul>
              <li>
                <i className="fa-solid fa-shield-check"></i>
                افزایش سرعت وبسایت
              </li>
              <li>
                <i className="fa-solid fa-shield-check"></i>
                افزایش رتبه گوگل
              </li>
              <li>
                <i className="fa-solid fa-shield-check"></i>
                افزایش فروش
              </li>
              <li>
                <i className="fa-solid fa-shield-check"></i>
                افزایش سرعت سایت
              </li>
            </ul>
          </div>
        </div>


        <div className={styles.customerStories}>
          <div className={styles.question}>
            <h4>مشتری مداری ما</h4>
            <p>
              ما همیشه و همه جا بفکر مشتری خود هستیم و خواهیم بود و خواهیم ماند و
              این داستان ادامه دارد...
            </p>
          </div>
          
{/*
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            dir="rtl"

            pagination={{
              clickable: true
            }}

            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className={styles.commentCarouselContainer}

            modules={[Autoplay, Pagination]}

            loop={true}
            loopedSlides={4}
            
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              864: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1124: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }}

          >
            <SwiperSlide className={styles.commentCarouselItem}>
              <p>
                نظر من اینه که بهترین، مشتری مدار ترین و همچنین مسئولیت پذیر
                ترین شرکت مورد نظر در زمینه توسعه وب اپلیکیشن ها همینجاست و اگه
                سفارش داشتید خیالتون راحت باشه
              </p>
              <div>
                <img src="/assets/images/persons/person1.jpg" alt="" />
                <div>
                  <p>حسن احمدی</p>
                  <span>مدیر تولید</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.commentCarouselItem}>
              <p>
                نظر من اینه که بهترین، مشتری مدار ترین و همچنین مسئولیت پذیر
                ترین شرکت مورد نظر در زمینه توسعه وب اپلیکیشن ها همینجاست و اگه
                سفارش داشتید خیالتون راحت باشه
              </p>
              <div>
                <img src="/assets/images/persons/person2.jpg" alt="" />
                <div>
                  <p>سمیه نجاتی</p>
                  <span>مدیر عامل فروشگاه</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.commentCarouselItem}>
              <p>
                نظر من اینه که بهترین، مشتری مدار ترین و همچنین مسئولیت پذیر
                ترین شرکت مورد نظر در زمینه توسعه وب اپلیکیشن ها همینجاست و اگه
                سفارش داشتید خیالتون راحت باشه
              </p>
              <div>
                <img src="/assets/images/persons/person3.jpg" alt="" />
                <div>
                  <p>سهیلا رضوی</p>
                  <span>مدیر فروشگاه ایرانیان</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.commentCarouselItem}>
              <p>
                نظر من اینه که بهترین، مشتری مدار ترین و همچنین مسئولیت پذیر
                ترین شرکت مورد نظر در زمینه توسعه وب اپلیکیشن ها همینجاست و اگه
                سفارش داشتید خیالتون راحت باشه
              </p>
              <div>
                <img src="/assets/images/persons/person2.jpg" alt="" />
                <div>
                  <p>سمیه نجاتی</p>
                  <span>مدیر زبانکده ایران</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
 */}
          <div className={styles.products}>
            <div className={styles.details}>
              <span>تعرفه طراحی سایت</span>
              <h3>
              اجازه دهید کارشناسان حرفه‌ای و متخصص ما سایت شرکت شما را طراحی کنند !
              </h3>
              <p>
              بعضی طراحان وب به صورت فردی سفارش طراحی سایت انجام می‌دهند و شرکت‌ های طراحی سایت هم به صورت تیمی پروژه را پیش می‌برند و لذا پیشنهادات متفاوتی برای قیمت طراحی سایت فروشگاهی و شرکتی ارائه می‌شود که موجب سوال برای مشتریان می‌شود: چرا برای صنف طراحان هزینه طراحی سایت تعریف مشخص و یکسانی وجود ندارد؟ پاسخ کوتاه اینکه: کار طراحی وب سایت بسیار کیفی است و کیفیت کار و تیم حرفه‌ای در نتیجه و هزینه موثر است. لازم به ذکر است در طراحی سایت کیفیت پشتیبانی به اندازه کیفیت انجام پروژه و حتی بیشتر اهمیت دارد و پشتیبانی خوب تنها توسط شرکت های با سابقه و تجربه کافی بدرستی ارائه می‌شود.

</p>
</div>
            <div className={styles.plans}>
              <div className={styles.plan}>
                <Image
                  src="/assets/images/icons/ec-online-shop.png"
                  width={70}
                  height={70}
                  alt=""
                />
                <h2>از ۳۵ میلیون تومان</h2>
                <p>تحویل ۹۰ روز کاری</p>
                <p>وبسایت تخصصی</p>
                <p>بهینه شده</p>
                <p>بهترین کیفیت</p>
                <button>انتخاب پلن</button>
              </div>

              <div className={styles.plan}>
                <Image
                  src="/assets/images/icons/ec-mobile.png"
                  width={70}
                  height={70}
                  alt=""
                />
                <h2>از ۶ میلیون تومان</h2>
                <p>تحویل ۷ روز کاری</p>
                <p>استفاده از پلتفرم</p>
                <p>بهینه شده</p>
                <p>بهترین کیفیت</p>
                <button>انتخاب پلن</button>
              </div>
            </div>
          </div>

          <div className={styles.contact}>
            <Image
              src="/assets/images/illustration/fourth.png"
              width={555}
              height={525}
              alt=""
            />
            <div className={styles.details}>
              <p className={styles.question}>نظر شما چیه؟</p>
              <p className={styles.title}>
                ما منتظر تماس شما هستیم
              </p>
              <p className={styles.desc}>
              پشتیبانی سایت، که شامل رفع ایرادات آن از کدنویسی گرفته تا هاست به صورت کاملا تخصصی و با تیم مجرب این حوزه در دپارتمان تخصصی طراحی وب انجام می شود.
              </p>

              <button>تماس با ما</button>
            </div>
          </div>
        </div>

        <div className={styles.analyze}>
          <div className={styles.question}>
            <h4>هدیه ای برای تو</h4>
            <p>
              اگه دوست داری از برگزاری کمپین تخفیفی گرم زمستانی هر کسب و کار یک فروشگاه اینترنتی  باخبر باشی ثبت نام کن !
            </p>
          </div>

          <div className={styles.searchBoxContainer}>
            <input type="email" placeholder="ایمیل شما" />
            <button>ثبت نام</button>
          </div>
        </div>
      </main>
    </div>
  );
}
