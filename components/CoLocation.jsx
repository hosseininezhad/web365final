import styles from '../styles/components/CoLocation.module.css'

export default function CoLocation() {

    return (
        <>
            <iframe className={styles.googleMap} src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1734.2788283291093!2d52.52028720337401!3d29.616542622818617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d29.616643099999997!2d52.518858599999994!5e0!3m2!1sfa!2sus!4v1671445579210!5m2!1sfa!2sus" allowfullscreen="" loading="lazy"></iframe>
        </>
    )
}