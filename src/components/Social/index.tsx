import styles from './Social.module.scss';

export default function Social() {
    return (
        <div className={styles.container}>
            <a
                className={styles.instagram}
                href="https://www.instagram.com/renee.trajar/"
                target="_blank"
            >
                <div className={styles.instagramIcon}></div>
            </a>

            <a
                className={styles.facebook}
                href="https://www.facebook.com/reneetrajar/"
                target="_blank"
            >
                <div className={styles.facebookIcon}></div>
            </a>

        </div>
    )
}