import React from 'react'

import Header from '../components/layout/Header'
import Hero from '../components/home/Hero'
import ServicesSection from '../components/home/ServicesSection'
import AboutSection from '../components/home/AboutSection'
import WorkSection from '../components/home/WorkSection'
import StrategySection from '../components/home/StrategySection'
import TestimonialSection from '../components/home/TestimonialSection'
import ClientLogoSlider from '../components/home/ClientLogoSlider'
import ContactTalkSection from '../components/home/ContactTalkSection'
import Footer from '../components/layout/Footer'

function Home() {

  return (

    <>
      <Header />
      <Hero />
      <AboutSection/>
      <ServicesSection/>
      <ClientLogoSlider/>
      <WorkSection/>
     {/* <StrategySection/> */}
     
     <TestimonialSection/>
     <ContactTalkSection/>
     <Footer/>
      
    </>

  )

}

export default Home