import Image from "next/image";
import styles from "../../styles/components/Blog/PostItem.module.css";

export default function PostItem(props) {
    return (
        <div className={styles.post}>
            <Image
                src={props.image}
                width={70}
                height={70}
                alt=""
            />
            <div className={styles.details}>
                <p className={styles.title}>{props.title}</p>
                <div className={styles.desc}>
                    <div className={styles.time}>
                        <i className="fa-regular fa-clock-desk"></i>
                        {props.createAt}
                    </div>
                    <div className={styles.comment}>
                        <i className="fa-regular fa-comments"></i>
                        {props.commentNumber}
                    </div>
                </div>
            </div>
        </div>
    )
}