import Head from 'next/head';
import Link from 'next/link'
import Header from '../components/common/Header'
import styles from '../styles/Services.module.css'

  import Image from "next/image";



  import { useState, useEffect } from 'react'




  import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";


const Services = () => {

    const [option , setOption] = useState('first');
    const [imgSource, setImgSource] = useState('/assets/images/illustration/Services01.png')
    const [datePlan, setDatePlan] = useState('mount')




    useEffect(()=>{
        switch(option){
            case 'first':
                setImgSource('/assets/images/illustration/services01.png')
               
                break;

                case 'second':
                setImgSource('/assets/images/illustration/services02.png')
              
                break;

                case 'third':
                setImgSource('/assets/images/illustration/services03.png')
                
                break;

                case 'four':
                setImgSource('/assets/images/illustration/services04.png')
               
                break;
        }

    }, [option])

    return (
        <>
            <Head>
                <title>دپارتمان تخصصی طراحی وب - خدمات ما</title>
                <meta name="description" content="بهترین شرکت طراحی سایت و اپلیکیشن با بهترین کیفیت و هزینه مناسب در سراسر ایران" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            

            <main className={styles.main}>
                <img className={styles.topPhoto} src="/assets/images/illustration/ServicesPhoto.png" alt="" />
                <h3 className={styles.title}>مشتریانی که به ما اعتماد کردند</h3>

                <Swiper
      spaceBetween={50}
      slidesPerView={1}



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
          slidesPerView: 6,
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




<div className={styles.features}>

<h3 className={styles.title}>ویژگی های برتر خدمات ما</h3>

          <p className={styles.description}>
            شرکت ما یکی از بهترین توسعه دهندگان وب اپلیکیشن در سراسر دنیا میباشد و همواره بهترین توسعه دهندگان را در اختیار دارد
          </p>


<div className={styles.container}>
    <div className={styles.options}>
<div onClick={() => setOption('first')} className={option == 'first' ? styles.activeOption : styles.option}>
    <Image src="/assets/images/icons/of-diagram.png" width={60} height={60} alt=""  />
    <div className={styles.details}>
        <p>عنوان سرویس مورد نظر</p>
        <p>توضیح سرویس مود نظر در اینجاست</p>
    </div>
</div>

<div onClick={() => setOption('second')} className={option == 'second' ? styles.activeOption : styles.option}>
    <Image src="/assets/images/icons/hs-headphones.png" width={60} height={60} alt=""  />
    <div className={styles.details}>
        <p>عنوان سرویس مورد نظر</p>
        <p>توضیح سرویس مود نظر در اینجاست</p>
    </div>
</div>

<div onClick={() => setOption('third')} className={option == 'third' ? styles.activeOption : styles.option}>
    <Image src="/assets/images/icons/ms-cloud-computing.png" width={60} height={60} alt=""  />
    <div className={styles.details}>
        <p>عنوان سرویس مورد نظر</p>
        <p>توضیح سرویس مود نظر در اینجاست</p>
    </div>
</div>

<div onClick={() => setOption('four')} className={option == 'four' ? styles.activeOption : styles.option}>
    <Image src="/assets/images/icons/sm-setting.png" width={60} height={60} alt=""  />
    <div className={styles.details}>
        <p>عنوان سرویس مورد نظر</p>
        <p>توضیح سرویس مود نظر در اینجاست</p>
    </div>
</div>
    </div>
    <Image className={styles.activeImage} src={imgSource} width={665} height={555} alt="" />
</div>

</div>
          





<div className={styles.datePlan}>
<h3 className={styles.title}>ویژگی های برتر خدمات ما</h3>

          <p className={styles.description}>
            شرکت ما یکی از بهترین توسعه دهندگان وب اپلیکیشن در سراسر دنیا میباشد و همواره بهترین توسعه دهندگان را در اختیار دارد
          </p>

    <div className={styles.changer}>
        <span onClick={() => setDatePlan('mount')} className={datePlan == 'mount' ? styles.activeSpan : null} >ماهانه</span>
        <span onClick={() => setDatePlan('year')} className={datePlan == 'year' ? styles.activeSpan : null}>سالانه</span>
    </div>
</div>


          <div className={styles.plans}>
            
          <div className={styles.plan}>
                    <Image src="/assets/images/icons/ec-online-shop.png" width={70} height={70} alt="" />
                    <h2>پلن طلایی</h2>
                    { datePlan == "mount" ? <h3>۱۴ میلیون تومان</h3> : <h3>۴۱ میلیون تومان</h3>}
                        
                        <p>سه ماهه</p>
                        <p>وبسایت وردپرسی</p>
                        <p>بهینه شده</p>
                        <p>بهترین کیفیت</p>
                        <p>انتخاب قالب دلخواه</p>
                        <button>انتخاب پلن</button>
                    </div>

                    <div className={styles.plan}>
                        <Image src="/assets/images/icons/ec-mobile.png" width={70} height={70} alt="" />
                        <h2>پلن طلایی</h2>
                        { datePlan == "mount" ? <h3>۱۴ میلیون تومان</h3> : <h3>۴۱ میلیون تومان</h3>}
                        <p>سه ماهه</p>
                        <p>وبسایت وردپرسی</p>
                        <p>بهینه شده</p>
                        <p>بهترین کیفیت</p>
                        <p>انتخاب قالب دلخواه</p>
                        <button>انتخاب پلن</button>
        </div>

        <div className={styles.plan}>
                        <Image src="/assets/images/icons/ec-store.png" width={70} height={70} alt="" />
                        <h2>پلن طلایی</h2>
                        { datePlan == "mount" ? <h3>۱۴ میلیون تومان</h3> : <h3>۴۱ میلیون تومان</h3>}
                        <p>سه ماهه</p>
                        <p>وبسایت وردپرسی</p>
                        <p>بهینه شده</p>
                        <p>بهترین کیفیت</p>
                        <p>انتخاب قالب دلخواه</p>
                        <button>انتخاب پلن</button>
        </div>

          </div>






          <div className={styles.contact}>

          <h3 className={styles.title}>ویژگی های برتر خدمات ما</h3>

<p className={styles.description}>
  شرکت ما یکی از بهترین توسعه دهندگان وب اپلیکیشن در سراسر دنیا میباشد و همواره بهترین توسعه دهندگان را در اختیار دارد
</p>





















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
            <p>support@web365.ir</p>
          </div>
          <div>
            <Image
              src="/assets/images/icons/telephone.png"
              width={60}
              height={60}
              alt=""
            />
            <p>۵۹۹۹ ۰۴۴ ۹۱۷ ۹۸+</p>
            <p>۲۵۸۷ ۳۰۵ ۹۱۷ ۹۸+</p>
          </div>
          <div>
            <Image
              src="/assets/images/icons/location.png"
              width={60}
              height={60}
              alt=""
            />
            <p>شیراز، سی متری سینما سعدی</p>
            <p>ساختمان ارتفاعات شهرداری</p>
          </div>
        </div>

          </div>

            </main>
        </>
    )
}




export default Services
