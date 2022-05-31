import styles from './Button2.module.scss';

interface SelectButton2Props {
    description: string;
    link: string;
}

export default function Button2({ description, link }: SelectButton2Props) {
    return (
        <div className={styles.container}>
            <a href={link} target="_blank">
                <strong>
                    {description}
                </strong>
            </a>
        </div>
    )
}