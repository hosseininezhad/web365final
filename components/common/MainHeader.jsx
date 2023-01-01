import styles from "../../styles/components/MainHeader.module.css";
import Image from "next/image";
import Link from 'next/link'
import { useEffect, useState } from "react";

const MainHeader = () => {

  const [floatNavigation, setFloatNavigation] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const [contactModal, setContactModal] = useState(false)


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setFloatNavigation(true);
      } else {
        setFloatNavigation(false);
      }
    });
  }, []);


  return (
    <>
      <header className={styles.header}>
        <nav>
          <Image
            className={styles.logo}
            src="/assets/images/logo.png"
            width={120}
            height={32}
            alt=""
          />
          <ul>
            <Link href="/">
              <li>صفحه اصلی</li>
            </Link>
            <Link
              onMouseOver={() => setSubMenu(true)}
              onMouseLeave={() => setSubMenu(false)}
              href="/services"
            >
              <li>خدمات</li>
            </Link>
            <Link href="/portfolio">
              <li>نمونه کارها</li>
            </Link>
            <Link href="/faq">
              <li>سوالات متداول</li>
            </Link>
            <Link href="/about">
              <li>درباره ما</li>
            </Link>
            <Link href="/contact">
              <li>تماس با ما</li>
            </Link>
            <Link href="/blog">
              <li>وبلاگ</li>
            </Link>
          </ul>
          <button>در تماس باشید!</button>
          <i onClick={() => setMenuModal(true)} className={`${styles.menuIcon} fa-solid fa-bars`}></i>
        </nav>

        {/* Start Sub Menu Modal */}
        <div
          onMouseOver={() => {
            setSubMenu(true);
          }}
          onMouseLeave={() => {
            setSubMenu(false);
          }}
          className={subMenu ? styles.subMenu : styles.hide}
        >
          <div>
            <h3>طراحی وبسایت</h3>
            <ul>
              <Link href="/website-design-of-shiraz">
                <li>طراحی وبسایت شیراز</li>
              </Link>
              <li>طراحی اپلیکیشن</li>
              <li>پشتیبانی</li>
              <li>مشاوره و راهنمایی</li>
              <li>طراحی تجربه کاربری</li>
            </ul>
          </div>
          <div>
            <h3>خدمات دیجیتال مارکتینگ</h3>
            <ul>
              <li>بازاریابی در شبکه های اجتماعی</li>
              <li>طراحی کمپین تبلیغاتی</li>
              <li>خدمات SEO</li>
              <li>تولید محتوا</li>
            </ul>
          </div>
          <div>
            <h3>هاست و دامنه</h3>
            <ul>
              <li>میزبانی وب اشتراکی</li>
              <li>سرور اختصاصی</li>
              <li>سرور مجازی</li>
              <li>رزرو دامنه</li>
            </ul>
          </div>
        </div>
        {/* End Sub Menu Modal */}


        {/* Start Menu Modal */}
        <div className={menuModal ? styles.menuModal : styles.hide}>
          <div className={styles.menuLogo}>
            <i
              onClick={() => setMenuModal(false)}
              className={`fa-solid fa-arrow-left ${styles.arrowLeft}`}
            ></i>
            <Image
              src="/assets/images/logo-light.png"
              width={120}
              height={32}
              alt=""
            />
          </div>

          <ul>
            <Link href="/">
              <li>

                <span>
                  <i className="fa-solid fa-house-window"></i>
                  <p>صفحه اصلی</p>
                </span>
                <i className="fa-solid fa-chevron-down"></i>

              </li>
            </Link>

            <Link href="/services">
              <li>
                <span>
                  <i className="fa-solid fa-server"></i>
                  <p>خدمات</p>
                </span>
                <i className="fa-solid fa-chevron-down"></i>
              </li>
            </Link>

            <Link href="/portfolio">
              <li>
                <span>
                  <i className="fa-solid fa-rectangle-vertical-history"></i>
                  <p>نمونه کارها</p>
                </span>
                <i className="fa-solid fa-chevron-down"></i>
              </li>
            </Link>

            <Link href="/faq">
              <li>
                <span>
                  <i className="fa-solid fa-message-question"></i>
                  <p>سوالات متداول</p>
                </span>
                <i className="fa-solid fa-chevron-down"></i>
              </li>
            </Link>

            <Link href="/about">
              <li>
                <span>
                  <i className="fa-solid fa-circle-info"></i>
                  <p>درباره ما</p>
                </span>
                <i className="fa-solid fa-chevron-down"></i>
              </li>
            </Link>

            <Link href="/contact">
              <li>
                <span>
                  <i className="fa-solid fa-phone"></i>
                  <p>تماس با ما</p>
                </span>
                <i className="fa-solid fa-chevron-down"></i>
              </li>
            </Link>

            <Link href="/blog">
              <li>
                <span>
                  <i className="fa-solid fa-blog"></i>
                  <p>وبلاگ</p>
                </span>
                <i className="fa-solid fa-chevron-down"></i>
              </li>
            </Link>
          </ul>
        </div>
        {/* End Menu Modal */}



        {/* Start Float Navigation Modal */}
        <div className={floatNavigation ? styles.floatNavigation : styles.hide}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/assets/images/logo.png"
              width={120}
              height={32}
              alt=""
            />
          </Link>

          <ul>
            <Link href="/">
              <li>صفحه اصلی</li>
            </Link>
            <Link
              onMouseOver={() => setSubMenu(true)}
              onMouseLeave={() => setSubMenu(false)}
              href="/services"
            >
              <li>خدمات</li>
            </Link>
            <Link href="/portfolio">
              <li>نمونه کارها</li>
            </Link>
            <Link href="/faq">
              <li>سوالات متداول</li>
            </Link>
            <Link href="/about">
              <li>درباره ما</li>
            </Link>
            <Link href="/contact">
              <li>تماس با ما</li>
            </Link>
            <Link href="/blog">
              <li>وبلاگ</li>
            </Link>
          </ul>

          <button>در تماس باشید!</button>
          <i onClick={() => setMenuModal(true)} className={`${styles.menuIcon} fa-solid fa-bars`}></i>
        </div>
        {/* End Float Navigation Modal */}



        <div className={styles.container}>
          <div className={styles.illustration}>
            <img
              className={styles.rocket}
              src="/assets/images/rocket/rocket2.png"
              alt=""
            />
            <img
              className={styles.stars}
              src="/assets/images/rocket/rocket3.png"
              alt=""
            />
            <img
              className={styles.bothCloud}
              src="/assets/images/rocket/rocket4.png"
              alt=""
            />
          </div>

          <div className={styles.text}>
            <h1 className={styles.title}>
              دپارتمان تخصصی طراحی وبسایت
            </h1>
            <h3 className={styles.subtitle}>
              ما در دپارتمان تخصصی طراحی وب بر این باور هستیم که باید تمامی سفارشات و خواسته های شما را به بهترین و موثرترین شکل انجام دهیم، تا دریک بستر کاملا حرفه ای شما مشتری گرامی بتوانید به بهترین و مطلوبترین نتیجه ممکن برسید که این امر موجب خشنودی و رضایت هر دو طرف خواهد بود.
            </h3>
            <button className={styles.yellow}>
              <Link href="/website-design-of-shiraz">
              تعرفه طراحی سایت
              </Link>
              </button>
            <button onClick={() => setContactModal(true)} className={styles.green}>درخواست مشاوره رایگان</button>

          </div>
        </div>

        <Image
          className={styles.bottomCloud}
          width={3171}
          height={252}
          src="/assets/images/rocket/rocket1.png"
          alt=""
        />
      </header>







      {contactModal && <div className={styles.contactModalContainer}>

        <div className={styles.contactModal}>
          <div className={styles.right}>
            <div className={styles.inner}>
              <h1>
                <Image
                  className={styles.logo}
                  src="/assets/images/logo-light.png"
                  width={220}
                  height={64}
                  alt=""
                />
                </h1>
              <div className={styles.details}>
                <h5>الان در خدمتیم</h5>
                <p>با ما تماس بگیرید!</p>
                <h5>شماره تماس</h5>
                <p>۵۹۹۹ ۰۴۴ ۹۱۷ ۹۸+</p>
                <h5>پست الکترونیکی</h5>
                <p>info@web365.ir</p>
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <h2>مشاوره تلفنی رایگان</h2>
            <p>همین الان، اطلاعات تماس خود را وارد نمایید.</p>
            <form action="">
              <div className={styles.inputContainer}>
                <input type="text" name="" id="" placeholder="نام و نام خانوادگی" />
                <input type="text" name="" id="" placeholder="شماره تماس" />
              </div>
              <div className={styles.inputContainer}>
                <select name="" id="">
                  <option value="هیچکدام">انتخاب زمان مشاوره (اختیاری)</option>
                  <option value=" در اسرع وقت">در اسرع وقت</option>
                  <option value="از ساعت ۹ تا ۱۱">از ساعت ۹ تا ۱۱</option>
                  <option value="از ساعت ۱۱ تا ۱۳">از ساعت ۱۱ تا ۱۳</option>
                  <option value="از ساعت ۱۳ تا ۱۵">از ساعت ۱۳ تا ۱۵</option>
                  <option value="از ساعت ۱۵ تا ۱۸">از ساعت ۱۵ تا ۱۸</option>
                  <option value="از ساعت ۱۸ تا ۲۱">از ساعت ۱۸ تا ۲۱</option>
                </select>
                <input type="text" name="" id="" placeholder="شماره ثابت (اختیاری)" />
              </div>
              <input type="text" name="" id="" placeholder="زمینه مشاوره (اختیاری)" />
              <button>ثبت درخواست</button>
            </form>
          </div>


          <i onClick={() => setContactModal(false)} class={`${styles.closeIcon} fa-solid fa-xmark`}></i>
        </div>
      </div>
      }
    </>
  );
};

export default MainHeader;
