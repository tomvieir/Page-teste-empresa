import styles from './Button.module.scss';

interface SelectButtonProps {
    description: string;
    link: string;
}

export default function Button({ description, link }: SelectButtonProps) {
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