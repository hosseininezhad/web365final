import Head from "next/head";
import styles from "../styles/Faq.module.css";
import Header from "../components/common/Header";

const FAQ = () => {
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
        <p className={styles.title}>
          اگه سوالی که داری در بخش سوالات متداول نیست میتونی با استفاده از فرم
          ارتباط با ما به ما ایمیل بزنی و سوالتو بپرسی
        </p>

        {/* ----------------------------------------- FAQ Accordion */}
        <section className={styles.faqQuestions}>
          <div>
            <details>
              <summary>
                <span className={styles.summaryTitle}>
                آیا امکان ویرایش مشخصات کاربری و ایمیل من وجود دارد؟
                </span>
                <i
                  className={`fa-solid fa-chevron-down ${styles.summaryChevronUp}`}
                ></i>
              </summary>

              <div className={styles.summaryContent}>
              بله، شما می‏‌توانید در هر زمان مشخصات کاربری خود را ویرایش کنید. برای این کار کافی‌ست پس از وارد کردن ایمیل و رمز عبور وارد حساب کاربری خود شوید و با کلیک روی گزینه «حساب من» اطلاعات خود را ویرایش کنید.
              </div>
            </details>

            <details>
              <summary>
                <span className={styles.summaryTitle}>
                رمزعبور خود را فراموش کرده‌ام، باید چکار کنم؟
                </span>
                <i
                  className={`fa-solid fa-chevron-down ${styles.summaryChevronUp}`}
                ></i>
              </summary>

              <div className={styles.summaryContent}>
              زمانی که گزینه «رمز عبور را فراموش کرده ام» را بزنید پسورد جدیدی به ایمیل شما ارسال خواهد شد.
              </div>
            </details>

            <details>
              <summary>
                <span className={styles.summaryTitle}>
                  چرا لینک درخواست تغییر رمز عبور برای من ارسال نشده است؟
                </span>
                <i
                  className={`fa-solid fa-chevron-down ${styles.summaryChevronUp}`}
                ></i>
              </summary>

              <div className={styles.summaryContent}>
              لطفاً ایمیل‌های اسپم(spam) خود را چک کنید. به ویژه ایمیل‌های ارسال شده به حساب‏‌های کاربری gmail گاهی spam می‌شوند. توجه داشته باشید که link تغییر رمز برای شما ارسال می‏‌شود نه خود رمز.
              </div>
            </details>

            <details>
              <summary>
                <span className={styles.summaryTitle}>
                چقدر فضا برای سایت من کافی است؟
                </span>
                <i
                  className={`fa-solid fa-chevron-down ${styles.summaryChevronUp}`}
                ></i>
              </summary>

              <div className={styles.summaryContent}>
              مقدار فضای لازم بستگی به نوع طراحی و همچنین فعالیت شما در سایتتان دارد. شما باید حجم فایل هایی که سایت شما را در بر می گیرد را محاسبه کنید و مقدار فضایی بیشتر از آنچه محاسبه کرده اید را خریداری نمایید.
              </div>
            </details>
          </div>
          <div>
            <details>
              <summary>
                <span className={styles.summaryTitle}>
                طراحی سایت داینامیک چیست؟
                </span>
                <i
                  className={`fa-solid fa-chevron-down ${styles.summaryChevronUp}`}
                ></i>
              </summary>

              <div className={styles.summaryContent}>
              در زمان طراحی سایت داینامیک انعطاف پذیری لازم برای قسمت های مختلف سایت در نظر گرفته می شود تا مدیر سایت برا اساس نیاز و سلیقه خود قادر به ایجاد تغییر و ویرایش در قسمت های مختلف سایت باشد.
              </div>
            </details>

            <details>
              <summary>
                <span className={styles.summaryTitle}>
                آیا بهینه سازی برای هر وب سایتی لازم و ضروری است؟
                </span>
                <i
                  className={`fa-solid fa-chevron-down ${styles.summaryChevronUp}`}
                ></i>
              </summary>

              <div className={styles.summaryContent}>
              بسته به توقع شما از وب سایتتان دارد. بهینه سازی کمک می کند یک وب سایت در موتورهای جستجو رتبه بالاتری داشته باشد و در نتیجه باعث بیشتر دیده شدن سایت می شود. 
              </div>
            </details>

            <details>
              <summary>
                <span className={styles.summaryTitle}>
                آیا سایت طراحی شده در آینده قابلیت ارتقا دارد؟
                </span>
                <i
                  className={`fa-solid fa-chevron-down ${styles.summaryChevronUp}`}
                ></i>
              </summary>

              <div className={styles.summaryContent}>
              بله
              </div>
            </details>
          </div>
        </section>

        {/* ----------------------------------------- FAQ Form */}
        <form className={styles.faqForm} action="/">
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
            <input type="email" name="" id="emailAddress" placeholder="ایمیل" />
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
            placeholder="سوال شما"
          ></textarea>
          <button>
            <i className="fa-solid fa-paper-plane-top"></i>
            ارسال سوال
          </button>
        </form>
      </main>
    </>
  );
};

export default FAQ;
