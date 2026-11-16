
import styles from "./Card.module.css";

export default function Card() {
    console.log(styles);
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>Card Page</h1>
            <p className={styles.p}>This is card page content</p>
        </div>
    )
}