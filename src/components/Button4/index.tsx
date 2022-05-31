import styles from './Button4.module.scss';

interface SelectButton4Props {
    description: string;
    link: string;
}

export default function Button4({ description, link }: SelectButton4Props) {
    return (
        <div className={styles.container}>
            <a
                className={styles.link}
                href={link}
                target="_blank"
            >
                <strong className={styles.description}>
                    {description}
                </strong>
            </a>
        </div>
    )
}