import styles from './Button3.module.scss';

interface SelectButton3Props {
    description: string;
    link: string;
}

export default function Button3({ description, link }: SelectButton3Props) {
    return (
        <div className={styles.container}>
            <a
                className={styles.link}
                href={link}
                target="_blank"
            >
                <strong className={styles.text}>
                    {description}
                </strong>
            </a>
        </div>
    )
}