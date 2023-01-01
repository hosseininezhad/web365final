import Head from "next/head";
import Header from "../components/common/Header";
import Image from "next/image";
import styles from "../styles/About.module.css";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";


const About = () => {
  return (
    <>
      <Head>
        <title>دپارتمان تخصصی طراحی وب - درباره ما</title>
        <meta
          name="description"
          content="بهترین شرکت طراحی سایت و اپلیکیشن با بهترین کیفیت و هزینه مناسب در سراسر ایران"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <main className={styles.main}>

        {/* ----------------------------------------------------- First Section */}
        <section className={styles.firstSection}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <Image
                src="/assets/images/illustration/double-about-one.png"
                width={550}
                height={460}
                alt=""
              />
              <div>
                <span>۵۰۰+</span>
                <p>پروژه</p>
                <p>موفقیت آمیز</p>
              </div>
            </div>

            <div className={styles.details}>
              <h2>تجربه کاری تیم ماهر ما</h2>
              <p className={styles.description}>
              مجموعه web365 تشکیل شده از جوانان خبره و باهوش که هر کدام در تخصص خود حرفه ای و با تجربه هستند و با سطح دانش بالا و بکارگیری خلاقیت فردی کار شما را به بهترین صورت انجام می دهند.
              </p>

              <div className={styles.progressContainer}>
                <div className={styles.progressTitle}>
                  <p>طراحی وبسایت</p>
                  <p>۱۰۰%</p>
                </div>
                <div className={styles.progress}>
                  <span></span>
                </div>

                <div className={styles.progressTitle}>
                  <p>خدمات هاست و دامنه</p>
                  <p>۷۰%</p>
                </div>
                <div className={styles.progress}>
                  <span></span>
                </div>

                <div className={styles.progressTitle}>
                  <p>خدمات دیجیتال مارکتینگ</p>
                  <p>۹۰%</p>
                </div>
                <div className={styles.progress}>
                  <span></span>
                </div>

                <div className={styles.progressTitle}>
                  <p>مشاوره و راهنمایی</p>
                  <p>۸۰%</p>
                </div>
                <div className={styles.progress}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.atributies}>
            <div>
              <i className="fa-regular fa-mobile-notch"></i>
              <h3>ساخت اپلیکیشن</h3>
              <p>
                ساخت برنامه اندروید و IOS و نصب راحت آن به روی تلفن همراه یکی از
                مزایای آن است
              </p>
            </div>
            <div>
              <i className="fa-solid fa-palette"></i>
              <h3>ساخت اپلیکیشن</h3>
              <p>
                ساخت برنامه اندروید و IOS و نصب راحت آن به روی تلفن همراه یکی از
                مزایای آن است
              </p>
            </div>
            <div>
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              <h3>ساخت اپلیکیشن</h3>
              <p>
                ساخت برنامه اندروید و IOS و نصب راحت آن به روی تلفن همراه یکی از
                مزایای آن است
              </p>
            </div>
            <div>
              <i className="fa-regular fa-laptop-code"></i>
              <h3>ساخت اپلیکیشن</h3>
              <p>
                ساخت برنامه اندروید و IOS و نصب راحت آن به روی تلفن همراه یکی از
                مزایای آن است
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- Second Section */}
        <section className={styles.secondSection}>
          <h2>فرآیند کار</h2>
          <p className={styles.desc}>
          مراحل انجام پروژه توسط تیم حرفه ای ما
          </p>

          <div className={styles.container}>
            <div className={styles.details}>
              <div className={styles.item}>
                <h4>۰۱ تهیه قرارداد</h4>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>

              <div className={styles.item}>
                <h4>۰۲ تجزیه و تحلیل داده ها</h4>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
            <Image
              src="/assets/images/illustration/about-details.png"
              width={525}
              height={351}
              alt=""
            />
            <div className={styles.details}>
              <div className={styles.item}>
                <h4>۰۳ گزارش پیشرفت</h4>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>

              <div className={styles.item}>
                <h4>۰۴ رضایت مشتری</h4>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.thirdSection}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <Image
                src="/assets/images/illustration/about-carousel.png"
                width={550}
                height={460}
                alt=""
              />
              <div>
                <span>۲۰۰۰+</span>
                <p>همکاری با</p>
                <p>مشتریان خوشتیپ</p>
              </div>
            </div>

            <Swiper
      spaceBetween={50}
      slidesPerView={1}

      loop={true}
      loopedSlides={3}




dir="rtl"
pagination= {{
  clickable: true
}}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}

      className={styles.commentCarouselContainer}
      

      modules={[Autoplay, Pagination]}
      
    >
              <SwiperSlide className={styles.commentCarouselItem}>
                <i className="fa-solid fa-quote-right"></i>
                <p>
                نظر من اینه که بهترین، مشتری مدار ترین و همچنین مسئولیت پذیر
                ترین شرکت مورد نظر در زمینه توسعه وب اپلیکیشن ها همینجاست و اگه
                سفارش داشتید خیالتون راحت باشه
                </p>
                <div>
                  <Image
                    src="/assets/images/persons/person1.jpg"
                    width={70}
                    height={70}
                    alt=""
                  />
                  <span>
                    <h5>ندا عمادی</h5>
                    <p>پروژه بوشهر</p>
                  </span>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.commentCarouselItem}>
                <i className="fa-solid fa-quote-right"></i>
                <p>
                نظر من اینه که بهترین، مشتری مدار ترین و همچنین مسئولیت پذیر
                ترین شرکت مورد نظر در زمینه توسعه وب اپلیکیشن ها همینجاست و اگه
                سفارش داشتید خیالتون راحت باشه
                </p>
                <div>
                  <Image
                    src="/assets/images/persons/person2.jpg"
                    width={70}
                    height={70}
                    alt=""
                  />
                  <span>
                    <h5>ندا عمادی</h5>
                    <p>پروژه بوشهر</p>
                  </span>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.commentCarouselItem}>
                <i className="fa-solid fa-quote-right"></i>
                <p>
                نظر من اینه که بهترین، مشتری مدار ترین و همچنین مسئولیت پذیر
                ترین شرکت مورد نظر در زمینه توسعه وب اپلیکیشن ها همینجاست و اگه
                سفارش داشتید خیالتون راحت باشه
                </p>
                <div>
                  <Image
                    src="/assets/images/persons/person3.jpg"
                    width={70}
                    height={70}
                    alt=""
                  />
                  <span>
                    <h5>ندا عمادی</h5>
                    <p>پروژه بوشهر</p>
                  </span>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>

          <Swiper
      spaceBetween={50}
      slidesPerView={1}


      loop={true}
      loopedSlides={8}


      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      className={styles.companyLogoContainer}
      

      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        }
      }}

      modules={[Autoplay, Pagination]}
      
    >
            <SwiperSlide className={styles.companyLogo}>
              <Image
                src="/assets/images/icons/company/z1.svg"
                width={135}
                height={96}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className={styles.companyLogo}>
              <Image
                src="/assets/images/icons/company/z2.svg"
                width={135}
                height={96}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className={styles.companyLogo}>
              <Image
                src="/assets/images/icons/company/z3.svg"
                width={135}
                height={96}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className={styles.companyLogo}>
              <Image
                src="/assets/images/icons/company/z4.svg"
                width={135}
                height={96}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className={styles.companyLogo}>
              <Image
                src="/assets/images/icons/company/z5.svg"
                width={135}
                height={96}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className={styles.companyLogo}>
              <Image
                src="/assets/images/icons/company/z6.svg"
                width={135}
                height={96}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className={styles.companyLogo}>
              <Image
                src="/assets/images/icons/company/z7.svg"
                width={135}
                height={96}
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className={styles.companyLogo}>
              <Image
                src="/assets/images/icons/company/z8.svg"
                width={135}
                height={96}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* ----------------------------------------------------- Four Section */}
        <section className={styles.fourSection}>
          <div className={styles.formContainer}>
            <h3>با ما در ارتباط باش</h3>
            <p className={styles.description}>
            شما می توانید برای دریافت مشاوره از این طریق با ما در ارتباط باشید.
            </p>
            <form action="">
              <div className={styles.container}>
                <input type="text" name="" id="firstName" placeholder="نام" />
                <input
                  type="text"
                  name=""
                  id="lastName"
                  placeholder="نام خانوادگی"
                />
              </div>

              <div className={styles.container}>
                <input
                  type="email"
                  name=""
                  id="emailAddress"
                  placeholder="ایمیل"
                />
                <input
                  type="text"
                  name=""
                  id="phoneNumber"
                  placeholder="شماره همراه"
                />
              </div>

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="پیام شما"
              ></textarea>
              <button>
                <i className="fa-solid fa-paper-plane-top"></i>
                ارسال پیام
              </button>
            </form>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/assets/images/illustration/about-form.png"
              width={555}
              height={560}
              alt=""
            />
            <div>
              <p>شیراز، سی متری سینما سعدی</p>
              <p>Info@Web365.IR</p>
              <p>۰۹۱۷۰۴۴۵۹۹۹</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
