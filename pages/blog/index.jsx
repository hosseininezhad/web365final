import Head from 'next/head';
import Link from 'next/link'
import Header from '../../components/common/Header'
import styles from '../../styles/Blog.module.css'
import Image from 'next/image'

const Blog = () => {

    return (
        <>
            <Head>
                <title>دپارتمان تخصصی طراحی وب - سوالات متداول</title>
                <meta name="description" content="بهترین شرکت طراحی سایت و اپلیکیشن با بهترین کیفیت و هزینه مناسب در سراسر ایران" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            


            <main className={styles.main}>
                
            <aside className={styles.sidebar}>
                    <h3>دنبال چی میگردی؟</h3>
                    <input type="text" placeholder='جستجو در سایت' />
                    <h3>درباره ما</h3>
                    <p className={styles.aboutText}>وبلاگ وب ۳۶۵ یکی از برترین وبلاگ های بروز و فعال در زمینه توسعه وب میباشد که همواره در ایران به فعالیت خود ادامه میدهد</p>
                
                    <div className={styles.social}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>




          <div className={styles.posts}>
            <div className={styles.post}>
              <Image
                src="/assets/images/posts/post1.jpg"
                width={70}
                height={70}
                alt=""
              />
              <div className={styles.details}>
                <p className={styles.title}>آموزش خرید هاست آلمان</p>
                <div className={styles.desc}>
                  <div className={styles.time}>
                    <i className="fa-regular fa-clock-desk"></i>
                    ۱۴ فروردین
                  </div>
                  <div className={styles.comment}>
                    <i className="fa-regular fa-comments"></i>۶
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.post}>
              <Image
                src="/assets/images/posts/post2.jpg"
                width={70}
                height={70}
                alt=""
              />
              <div className={styles.details}>
                <p className={styles.title}>نحوه مدیریت سی پنل</p>
                <div className={styles.desc}>
                  <div className={styles.time}>
                    <i className="fa-regular fa-clock-desk"></i>
                    ۱۴ فروردین
                  </div>
                  <div className={styles.comment}>
                    <i className="fa-regular fa-comments"></i>۶
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.post}>
              <Image
                src="/assets/images/posts/post3.jpg"
                width={70}
                height={70}
                alt=""
              />
              <div className={styles.details}>
                <p className={styles.title}>مزایای خرید آنلاین</p>
                <div className={styles.desc}>
                  <div className={styles.time}>
                    <i className="fa-regular fa-clock-desk"></i>
                    ۱۴ فروردین
                  </div>
                  <div className={styles.comment}>
                    <i className="fa-regular fa-comments"></i>۶
                  </div>
                </div>
              </div>
            </div>
          </div>









<h3>دسته بندی ها</h3>
          <div className={styles.category}>
            <ul>
              <li>فروشگاهی (۱۴)</li>
              <li>شرکتی (۱۴)</li>
              <li>سازمانی (۱۴)</li>
            </ul>
          </div>








          <h3>دسترسی سریع</h3>
          <div className={styles.hashtags}>
            <span className={styles.hashtag}>طراحی سایت</span>

            <span className={styles.hashtag}>طراحی اپلیکیشن</span>

            <span className={styles.hashtag}>بازی سازی</span>
            <span className={styles.hashtag}>بازاریابی</span>
            <span className={styles.hashtag}>فروش آنلاین</span>
            <span className={styles.hashtag}>تبلیغات</span>
            <span className={styles.hashtag}>توسعه اپلیکیشن</span>




          </div>






          <h3>آرشیو</h3>
          <div className={styles.category}>
            <ul>
              <li>فروشگاهی (۱۴)</li>
              <li>شرکتی (۱۴)</li>
              <li>سازمانی (۱۴)</li>
            </ul>
          </div>
                </aside>











                <section className={styles.articles}>
                  

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


                    <article className={styles.article}>
                    <figure className={styles.imageContainer}>
                        <Image src="/assets/images/portfolio/m2.jpg" width={360} height={252} alt="" />
                        <span className={styles.overlay}>
                خواندن مقاله
              </span>
                        </figure>
                        <span className={`${styles.green} ${styles.tagName}`}>بازاریابی</span>
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

                    <article className={styles.article}>
                    <figure className={styles.imageContainer}>
                        <Image src="/assets/images/portfolio/m3.jpg" width={360} height={252} alt="" />
                        <span className={styles.overlay}>
                خواندن مقاله
              </span>
                        </figure>                        <span className={`${styles.pink} ${styles.tagName}`}>فروش آنلاین</span>
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

                    <article className={styles.article}>
                    <figure className={styles.imageContainer}>
                        <Image src="/assets/images/portfolio/m4.jpg" width={360} height={252} alt="" />
                        <span className={styles.overlay}>
                خواندن مقاله
              </span>
                        </figure>                        <span className={`${styles.red} ${styles.tagName}`}>بازی سازی</span>
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

                    <article className={styles.article}>
                    
                    <figure className={styles.imageContainer}>
                        <Image src="/assets/images/portfolio/m2.jpg" width={360} height={252} alt="" />
                        <span className={styles.overlay}>
                خواندن مقاله
              </span>
                        </figure>
                        <span className={`${styles.green} ${styles.tagName}`}>بازاریابی</span>
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

                    <article className={styles.article}>
                    <figure className={styles.imageContainer}>
                        <Image src="/assets/images/portfolio/m2.jpg" width={360} height={252} alt="" />
                        <span className={styles.overlay}>
                خواندن مقاله
              </span>
                        </figure>
                        <span className={`${styles.green} ${styles.tagName}`}>بازاریابی</span>
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

                    <div className={styles.pagination}>
                    <i className="fa-solid fa-arrow-right"></i>
                    <span className={styles.active}>۱</span>
                    <span>۲</span>
                    <span>۳</span>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                </section>

                
            </main>
        </>
    )
}




export default Blog
