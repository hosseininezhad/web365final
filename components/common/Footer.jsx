import Image from "next/image";
import styles from "../../styles/components/Footer.module.css";
import { posts, hashtag, category, contact, learnMore, help } from '../../utils/data'
import PostItem from '../Blog/PostItem'



export default function Footer() {
  return (

    
    <footer className={styles.footer}>
      <Image
        className={styles.topFooter}
        src="/assets/images/rocket/rocket1.png"
        width={2000}
        height={150}
        alt=""
      />
      <div className={styles.columns}>

        {/* ----------------------------------------- First Column */}
        <div className={styles.firstColumns}>
          <h3>پربازدید ترین ها</h3>
          <div className={styles.posts}>
            {posts.map((item, i) =>
              <PostItem key={item.id} image={item.image} title={item.title} createAt={item.createAt}
                commentNumber={item.commentNumber} />)}
          </div>
        </div>

        {/* ----------------------------------------- Second Column */}
        <div className={styles.secondCol}>
          <h3>دسترسی سریع</h3>
          <div className={styles.hashtags}>

            {hashtag.map((item, i)=> <span key={i} className={styles.hashtag}>{item}</span> )}
          </div>

          <h3>دسته بندی</h3>

          <div className={styles.category}>

          <ul>
            {category[0].map((item, i)  => <li key={i}>{item.subject} ({item.count})</li>)}
            </ul>

            <ul>
            {category[1].map((item, i)  => <li key={i}>{item.subject} ({item.count})</li>)}
            </ul>
          </div>
        </div>

        {/* ----------------------------------------- Third Column */}
        <div className={styles.thirdCol}>
          <h3>ارتباط با ما</h3>
          <p className={styles.address}>
            {contact.address}
          </p>
          <p className={styles.email}>{contact.email}</p>
          <p className={styles.tel}>۵۱۱۱ ۲۳۴ ۰۷۱۳ <br />
          {contact.mobile} <br />
          ۹۴۴۳ ۲۴۳ ۹۳۸ ۹۸+
          </p>

          <h3>فضای مجازی</h3>
          <div className={styles.icons}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>

        {/* ----------------------------------------- Fourth Column */}
        <div className={styles.fourthCol}>
          <h3>یادگیری بیشتر</h3>
          <ul>
            {learnMore.map((item, i)  => <li key={i}>{item}</li>)}
          </ul>

          <h3>کمک میخوای؟</h3>
          <ul>
          {help.map((item, i)  => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* ----------------------------------------- Copyright */}
      <p className={styles.copyright}>
      © ۱۸ سال با افتخار در کنار شما هستیم… تمامی حقوق مادی و معنوی این سایت برای مجموعه web365 محفوظ است.
      </p>
    </footer>
  );
}
