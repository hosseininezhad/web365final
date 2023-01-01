import Header from './common/Header'
import MainHeader from './common/MainHeader'
import Footer from './common/Footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { headerRoutes } from "../utils/router"


export default function Layout({ children }) {

  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isMain, setIsMain] = useState(false)




  useEffect(() => {
    switch (router.pathname) {
      case "/services":
        setTitle("خدمات ما")
        setDescription("دوست داری بدونی ما چه کارهایی میکنیم؟")
        break

      case "/portfolio":
        setTitle("نمونه کارها")
        setDescription("بخشی از نمونه کارهای مارو ببین و لذت ببر")
        break

      case "/faq":
        setTitle("سوالات متداول")
        setDescription("اگه سوالی داری بپرس راحت باش !")
        break

      case "/about":
        setTitle("درباره ما")
        setDescription("ما رو بهتر بشناس و با خیال راحت کارتو بده دست ما")
        break

      case "/contact":
        setTitle("تماس با ما")
        setDescription("میخوای با ما در ارتباط باشی؟! بزن بریم")
        break

      case "/blog":
        setTitle("وبلاگ تخصصی طراحی وب اپلیکیشن")
        setDescription("میتونی از بین هزاران مقاله موجود موضوع مورد نظرتو انتخاب کنی و کلی چیز یادبگیری")
        setIsMain(false)
        break

        case '/website-design-of-shiraz':
          setTitle("طراحی سایت شیراز | شرکت طراحی سایت شیراز | طراحی وب شیراز")
        setDescription("هرکجای دنیا که باشید ما با شما در ارتباط هستیم و کمک میکنیم تا در افزایش فروش خود موفق باشید")
      
          break
    }
  }, [router.pathname])


  return (
    <>
      { headerRoutes.includes(router.pathname) ? 
      <MainHeader /> : 
      <Header title={title} description={description} /> }

      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}