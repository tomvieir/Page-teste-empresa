// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Swiper.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import SectionTitle from '../SectionTitle';


export default () => {
    return (

        <div
            className={styles.container}
            id='depoimentos'
        >
            <div className={styles.titleContainer}>
                <SectionTitle title="Depoimentos" />
            </div>

            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation

                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >

                <SwiperSlide>
                    <div className={styles.item}>
                        <img
                            src="/images/photoslide2.svg"
                            alt="profile"
                        />
                        <strong className={styles.text}>
                            “Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai, que já têm uma história de décadas com o querido Renee.
                            O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a Renee Trajar em um patamar acima dos demais do ramo.”                        </strong>
                        <strong className={styles.author}>
                            William H. M. Garey
                        </strong>
                        <p>
                            Advogado  |   Nelson Garey Advogados Associados
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.item}>
                        <img
                            src="/images/photoslide1.svg"
                            alt="profile"
                        />
                        <strong className={styles.text}>
                            “Há mais de 10 anos sou cliente da Renee Trajar. A qualidade, caimento e possibilidade de customização das roupas, aliados ao excelente atendimento e prazo de entrega são fatores decisivos para mim.”
                        </strong>
                        <strong className={styles.author}>
                            Josimar Henrique da Silva
                        </strong>
                        <p>
                            Diretor Presidente | Grupo Hebron
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.item}>
                        <img
                            src="/images/photoslide3.svg"
                            alt="profile"
                        />
                        <strong className={styles.text}>
                            “Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus amigos tem elogiado a vestimenta.
                            Recomendo para quem gosta de perfeição. Estamos nos servindo do trabalho do Renee Trajar há mais de vinte anos.”
                        </strong>
                        <strong className={styles.author}>
                            Domingos Orestes Chiomento
                        </strong>
                        <p>
                            DOC Contabilidade Empresarial
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.item}>
                        <img
                            src="/images/photoslide4.svg"
                            alt="profile"
                        />
                        <strong className={styles.text}>
                            “Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional competente e idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os anseios de seus clientes, incluindo este signatário.”
                        </strong>
                        <strong className={styles.author}>
                            José Mauro Marques
                        </strong>
                        <p>
                            José Mauro Marques
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.item}>
                        <img
                            src="/images/photoslide5.svg"
                            alt="profile"
                        />
                        <strong className={styles.text}>
                            “Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos, produtos de excelente qualidade e especialmente tudo é feito com muito cuidado e qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com perfeição nos detalhes.”                        </strong>
                        <strong className={styles.author}>
                            Custódio Pereira
                        </strong>
                        <p>
                            Membro do CONSOCIAL - Conselho Superior de Responsabilidade Social da FIESP-SP
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};