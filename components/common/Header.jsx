import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/Header.module.css";

export default function Header(props) {

  // States
  const [searchModal, setSearchModal] = useState(false);
  const [floatNavigation, setFloatNavigation] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const [searchText, setSearchText] = useState("");



  // This is For Show and Hide Floating Header
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
        {/* Start Navigation */}
        <nav>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/assets/images/logo-light.png"
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

          <div className={styles.navIcons}>
            <i
              onClick={() => setInfoModal(true)}
              className="fa-regular fa-circle-exclamation"
            ></i>
            <i
              onClick={() => {
                setSearchModal(!searchModal);
                setInfoModal(false);
              }}
              className="fa fa-search"
            ></i>
            <i
              onClick={() => setMenuModal(true)}
              className={`fa-solid fa-bars ${styles.menuIcon}`}
            ></i>
          </div>
        </nav>
        {/* End Navigation */}


        {/* Start Heading */}
        <div className={styles.heading}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        {/* End Heading */}


        {/* Start Search Modal */}
        <div className={searchModal ? styles.searchModal : styles.hide}>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="جستجو در خدمات و مطالب وبسایت"
          />
          <i
            onClick={() => setSearchModal(false)}
            className={`fa-solid fa-xmark ${styles.closeIcon}`}
          ></i>
        </div>
        {/* End Search Modal */}


        {/* Start Info Modal */}
        <div className={infoModal ? styles.info : styles.hide}>
          <div className={styles.infoLogo}>
            <Image
              src="/assets/images/logo-light.png"
              width={120}
              height={32}
              alt=""
            />
            <i
              onClick={() => setInfoModal(false)}
              className={`fa-solid fa-arrow-right ${styles.arrowRight}`}
            ></i>
          </div>

          <p className={styles.about}>
          دپارتمان تخصصی طراحی وب با یک تیم مجرب و با تجربه، با مناسب ترین قیمت ها تمامی خدماتی که برای رونق کسب و کار شما نیاز است را پوشش می دهد.
          </p>

          <h3>اطلاعات تماس</h3>
          <p className={styles.address}>
          آدرس دفتر مرکزی : شیراز – سی متری سینما سعدی - نبش کوچه ۷ - ساختمان شیشه ای ارتفاعات شهرداری - طبقه ۴ - واحد ۷ - دپارتمان تخصصی طراحی وب سایت
          </p>

          <p className={styles.email}>info@web365.ir</p>
          <p className={styles.tel}>۵۹۹۹ ۰۴۴ ۹۱۷ ۹۸+</p>

          <h3>سایر موارد</h3>
          <dir className={styles.links}>
            <Link href="/">صفحه اصلی</Link>
            <Link href="/">قوانین وبسایت</Link>
            <Link href="/">لینک های مفید</Link>
            <Link href="/">مقالات</Link>
          </dir>

          <h3>ما را دنبال کنید</h3>
          <div className={styles.social}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
        {/* End Info Modal */}


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

          <div className={styles.navIcons}>
            <i
              onClick={() => setInfoModal(true)}
              className="fa-regular fa-circle-exclamation"
            ></i>
            <i
              onClick={() => {
                setSearchModal(!searchModal);
                setInfoModal(false);
              }}
              className="fa fa-search"
            ></i>
            <i
              onClick={() => setMenuModal(true)}
              className={`fa-solid fa-bars ${styles.menuIcon}`}
            ></i>
          </div>
        </div>
        {/* End Float Navigation Modal */}
      </header>
    </>
  );
}
