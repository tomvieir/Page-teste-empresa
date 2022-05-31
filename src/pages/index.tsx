import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Drawer from '../components/Header/Drawer'
import WppLogo from '../components/WppLogo'
import Banner from '../components/Banner'
import Bio from '../components/Bio'
import SwiperCarousel from '../components/SwiperCarousel'
import SectionClient from '../components/SectionClient'
import SectionBadges from '../components/SectionBadges'
import Camisaria from '../components/SectionCamisaria'
import Alfaiataria from '../components/sectionAlfaiataria'
import SectionPromotion from '../components/SectionPromotion'
import SectionContact from '../components/SectionContact'
import SectionFooter from '../components/SectionFooter'

import Aos from 'aos';

import styles from '../styles/Home.module.scss'
import 'aos/dist/aos.css';

const Home: NextPage = () => {

  //animação de troca do header ao scroll encostar o topo
  const [activeHeader, setActiveHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActiveHeader(true)
      } else {
        setActiveHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

  }, [])

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Renee Trajar</title>
        <meta property="og:image" content="/cover/Site-ReneeTrajar-COVER.png" />
        <meta property="og:image:secure_url" content="/cover/Site-ReneeTrajar-COVER.png" />
        <meta name="twitter:image" content="/cover/Site-ReneeTrajar-COVER.png" />
        <meta name="twitter:image:src" content="/cover/Site-ReneeTrajar-COVER.png" />
        <meta
          property="og:description"
          content="Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos profissionais experientes e altamente qualificados."
        />

      </Head>

      <Header active={activeHeader} />
      <Drawer />

      <main>
        <Banner />
        <Bio />
        <SectionClient />
        <SectionBadges />
        <SectionPromotion />
        <Camisaria />
        <Alfaiataria />
        <SwiperCarousel />
        <SectionContact />
        <WppLogo />
      </main>

      <SectionFooter />
    </div>
  )
}

export default Home

