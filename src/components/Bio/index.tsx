import Button from "../Button";
import SectionTitle from "../SectionTitle";
import styles from "./Bio.module.scss";

export default function Bio() {
    return (
        <div
            className={styles.container}
            id='empresa'
        >
            <div className={styles.bio}>
                <div className={styles.bioImage} >
                    <img
                        src='/images/photo-bio.svg'
                        alt="profile"
                        data-aos="fade-up"
                    />
                </div>

                <div className={styles.bioText}>
                    <div className={styles.titleContainer}>
                        <SectionTitle title="Renee Trajar" />
                    </div>

                    <p className={styles.text0}>
                        Com mais de 35 anos de experiência em camisas, calças e ternos sob medida,
                         possuímos profissionais experientes e altamente qualificados.
                    </p>

                    <p className={styles.text1}>
                        Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo 
                        através das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.
                    </p>

                    <p className={styles.text2}>
                        “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe 
                        satisfação ao usar nossos produtos, aliado a um relacionamento franco e honesto, 
                        valorizando o ser humano.”
                    </p>

                    <div className={styles.name}>
                        <p>Renee Trajar</p>
                    </div>

                    <div className={styles.button}>
                        <Button
                            description="Agende uma visita"
                            link="https://api.whatsapp.com/send?1=pt_BR&phone=5511991490628"
                        />
                    </div>
                </div>
            </div>
            <img
                className={styles.backimg}
                src="/images/aspas.png"
                alt="backimg"
            />
        </div>
    );
}