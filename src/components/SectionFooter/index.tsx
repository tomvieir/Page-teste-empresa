import Logo from '../Logo';
import ScrollTop from '../ScrollTop';
import Social from '../Social';
import styles from './SectionFooter.module.scss';

export default function SectionFooter() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.sectionLogo}>
                    <Logo />
                    <p>CNPJ:04.487.685/0001-01</p>
                </div>

                <div className={styles.sectionSocial}>
                    <div className={styles.SocialContainer}>
                        <Social />
                    </div>

                    <div className={styles.copyright}>
                        <p>
                            Copyright: 2021 © Renee Trajar - Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.scrollTopContainer}>
                <ScrollTop />
            </div>
        </div>
    )
}