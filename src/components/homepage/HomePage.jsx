"use client"
import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import Welcome from '../welcome/Welcome'
import WoWeAre from '../woWeAre/WoWeAre'
import WhatWeDo from '../whatWeDo/WhatWeDo'
import WorkingFor from '../workingFor/WorkingFor'
import Complaint from '../complaint/Complaint'
import Feedback from '../feedback/Feedback'
import Footer from '../footer/Footer'

const HomaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <>
            <Navbar />
            <Hero />
            <Welcome />
            <WoWeAre />
            <WhatWeDo />
            <WorkingFor />
            <Complaint />
            <Feedback />
            <Footer />
        </>
    )
}

export default HomaPage