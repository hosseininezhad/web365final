import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/common/Header";
import styles from "../styles/Contact.module.css";
import CoLocation from "../components/CoLocation";

const Contact = () => {
  return (
    <>
      <Head>
        <title>دپارتمان تخصصی طراحی وب - ارتباط با ما</title>
        <meta
          name="description"
          content="بهترین شرکت طراحی سایت و اپلیکیشن با بهترین کیفیت و هزینه مناسب در سراسر ایران"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     

      <main className={styles.main}>

        {/* ---------------------------------------------- Icons */}
        <div className={styles.icons}>
          <div>
            <Image
              src="/assets/images/icons/email.png"
              width={60}
              height={60}
              alt=""
            />
            <p>info@web365.ir</p>
            <p>web365@gmail.com</p>
          </div>
          <div>
            <Image
              src="/assets/images/icons/telephone.png"
              width={60}
              height={60}
              alt=""
            />
            <p>۵۹۹۹ ۰۴۴ ۹۱۷ ۹۸+</p>
            <p>۵۹۹۹ ۰۴۴ ۹۱۷ ۹۸+</p>
          </div>
          <div>
            <Image
              src="/assets/images/icons/location.png"
              width={60}
              height={60}
              alt=""
            />
            <p>شیراز، سی متری سینما سعدی</p>
            <p>ساختمان ارتفاعات شهرداری طبقه چهارم</p>
          </div>
        </div>




        {/* ---------------------------------------------- Google Map Location */}
        <CoLocation />


        {/* ---------------------------------------------- Contact Form */}
        <section className={styles.contact}>
          <h2>یه خط برامون بنویس...</h2>
          <p>
          شما می توانید برای دریافت مشاوره از این طریق با ما در ارتباط باشید
          </p>
          <form className={styles.contactForm} action="/">
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
        </section>
      </main>
    </>
  );
};

export default Contact;