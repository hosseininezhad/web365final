import styles from '../styles/components/TopBanner.module.css'
import { useState } from 'react'

export default function TopBanner() {

  const [showBanner, setShowBanner] = useState(false)


  return (
    <>
        <div className={styles.container}>
          <div className={styles.box}>
            <p>30% تخفیف خرید سامانه پیامکی، ویژه شب یلدا فقط تا 30 آذر</p>
            <button className={styles.yellowBtn}>مشاهده تعرفه ها</button>
          </div>
        </div>
    </>
  )
}