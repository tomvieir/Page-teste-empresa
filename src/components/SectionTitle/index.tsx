import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className={styles.titleContainer}>
            <div className={styles.title}>
                <h1>{title}</h1>
                <span></span>
            </div>
        </div>
    )
}