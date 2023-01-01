import Head from 'next/head';
import Link from 'next/link'
import Header from '../../components/common/Header'
import styles from '../../styles/BlogPost.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

const Blog = () => {

    return (
        <>
            <Head>
                <title>دپارتمان تخصصی طراحی وب - سوالات متداول</title>
                <meta name="description" content="بهترین شرکت طراحی سایت و اپلیکیشن با بهترین کیفیت و هزینه مناسب در سراسر ایران" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            


            <main className={styles.main}>

<Image className={styles.blogImage} src="/assets/images/portfolio/m1.jpg" width={945} height={555} alt="" />

<span className={styles.tagName}>شبکه اجتماعی</span>
<h1>شبکه اجتماعی چیست</h1>

<div className={styles.icons}>
                  <div className={styles.time}>
                    <i className="fa-regular fa-clock-desk"></i>
                    ۱۴ فروردین
                  </div>
                  <div className={styles.user}>
                    <i className="fa-regular fa-user"></i>
                    منتشر شده توسط ادمین
                  </div>

                  <div className={styles.comment}>
                    <i className="fa-regular fa-comments"></i>
                    ۶ نظر
                  </div>
                </div>

                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <i className={`${styles.quoteIcon} fa-solid fa-quote-right`}></i>

                
                <p className={styles.quoteText}>
               
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی گیرد.</p>
            
            <span className={styles.quoteBy}>-- یادگاری از حافظ</span>

            <h3>خب بریم سراغ ادامه مطلب</h3>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            

            <div className={styles.gallery}>
                <figure className={styles.imageContainer}>
                <img src="/assets/images/portfolio/m2.jpg" alt="" />

                    <span className={styles.overlay}>بزن بریم</span>
                </figure>
                <figure className={styles.imageContainer}>
                <img src="/assets/images/portfolio/m3.jpg" alt="" />

                    <span className={styles.overlay}>بزن بریم</span>
                </figure>
                <figure className={styles.imageContainer}>
                <img src="/assets/images/portfolio/m4.jpg" alt="" />

                    <span className={styles.overlay}>بزن بریم</span>
                </figure>
                <figure className={styles.imageContainer}>
                <img src="/assets/images/portfolio/m5.jpg" alt="" />

                    <span className={styles.overlay}>بزن بریم</span>
                </figure>
                <figure className={styles.imageContainer}>
                <img src="/assets/images/portfolio/m6.jpg" alt="" />

                    <span className={styles.overlay}>بزن بریم</span>
                </figure>
            </div>

            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            
            <div className={styles.container}>
                <div className={styles.tags}>
                    <span>شبکه اجتماعی</span>
                    <span>ارتباط</span>
                    <span>روانشناسی</span>
                </div>
                <div className={styles.social}>
                    <p>اشتراک گذاری: </p>
                    <div>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
                </div>
            </div>




            <div className={styles.authorBox}>
                <Image src="/assets/images/portfolio/m1.jpg" width={294} height={206} alt="" />
                <div className={styles.details}>
                    <h4>علیرضا احمدی</h4>
<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    <div className={styles.social}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
                </div>
            </div>


            <div className={styles.favoritePosts}>
                <h3>شاید دوست داشته باشید</h3>

                <Swiper
      spaceBetween={30}
      slidesPerView={1}




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

                    <article className={styles.article}>
                    <Link href="/blog/blog-post">
                        <figure className={styles.imageContainer}>
                        <Image src="/assets/images/portfolio/m1.jpg" width={360} height={252} alt="" />
                        <span className={styles.overlay}>
                خواندن مقاله
              </span>
                        </figure>
                        </Link>
                        
                        <span className={styles.tagName}>طراحی سایت</span>
                        <h3>یونیتی کارش چیه</h3>
                        
                        <p>یونیتی یکی از بهترین نرم افزارهای ساخت بازی ومیباشد که در صنعت بازی سازی بسیار کار رو حرفه ای میکنه</p>
                    
                        <div className={styles.desc}>
                  <div className={styles.time}>
                    <i className="fa-regular fa-clock-desk"></i>
                    ۱۴ فروردین
                    
                  </div>
                  <div className={styles.comment}>
                    <i className="fa-regular fa-comments"></i>۶ نظر
                  </div>
                </div>
                    </article>
                    </SwiperSlide>

                    <SwiperSlide className={styles.commentCarouselItem}>

                    <article className={styles.article}>
                    <Link href="/blog/blog-post">
                        <figure className={styles.imageContainer}>
                        <Image src="/assets/images/portfolio/m1.jpg" width={360} height={252} alt="" />
                        <span className={styles.overlay}>
                خواندن مقاله
              </span>
                        </figure>
                        </Link>
                        
                        <span className={styles.tagName}>طراحی سایت</span>
                        <h3>یونیتی کارش چیه</h3>
                        
                        <p>یونیتی یکی از بهترین نرم افزارهای ساخت بازی ومیباشد که در صنعت بازی سازی بسیار کار رو حرفه ای میکنه</p>
                    
                        <div className={styles.desc}>
                  <div className={styles.time}>
                    <i className="fa-regular fa-clock-desk"></i>
                    ۱۴ فروردین
                    
                  </div>
                  <div className={styles.comment}>
                    <i className="fa-regular fa-comments"></i>۶ نظر
                  </div>
                </div>
                    </article>
                    </SwiperSlide>

                    <SwiperSlide className={styles.commentCarouselItem}>

                    <article className={styles.article}>
                    <Link href="/blog/blog-post">
                        <figure className={styles.imageContainer}>
                        <Image src="/assets/images/portfolio/m1.jpg" width={360} height={252} alt="" />
                        <span className={styles.overlay}>
                خواندن مقاله
              </span>
                        </figure>
                        </Link>
                        
                        <span className={styles.tagName}>طراحی سایت</span>
                        <h3>یونیتی کارش چیه</h3>
                        
                        <p>یونیتی یکی از بهترین نرم افزارهای ساخت بازی ومیباشد که در صنعت بازی سازی بسیار کار رو حرفه ای میکنه</p>
                    
                        <div className={styles.desc}>
                  <div className={styles.time}>
                    <i className="fa-regular fa-clock-desk"></i>
                    ۱۴ فروردین
                    
                  </div>
                  <div className={styles.comment}>
                    <i className="fa-regular fa-comments"></i>۶ نظر
                  </div>
                </div>
                    </article>
                    </SwiperSlide>
                </Swiper>
            </div>



            <div className={styles.comments}>
                <h3>۶ نظر</h3>

                <div className={styles.comment}>
                    <Image src="/assets/images/persons/person1.jpg" width={80} height={80} alt="" />
                    <div className={styles.details}>
                        <h5>سارا صداقت</h5>
<p>اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.</p>
                        <div>
                        <p>۱۲ اسفند ۱۴۰۱</p>
                            <p>پاسخ</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.comment} ${styles.replyComment}`}>
                    <Image src="/assets/images/persons/person2.jpg" width={80} height={80} alt="" />
                    <div className={styles.details}>
                        <h5>سارا صداقت</h5>
<p>اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.</p>
                        <div>
                            <p>دیروز ساعت ۲۲:۳۲</p>
                            <p>پاسخ</p>
                        </div>
                    </div>
                </div>

                <div className={styles.comment}>
                    <Image src="/assets/images/persons/person3.jpg" width={80} height={80} alt="" />
                    <div className={styles.details}>
                        <h5>سارا صداقت</h5>
<p>اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.</p>
                        <div>
                            <p>امروز ساعت ۲۲:۳۲</p>
                            <p>پاسخ</p>
                        </div>
                    </div>
                </div>

            </div>
            </main>
        </>
    )
}




export default Blog
