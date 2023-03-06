/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Skills from './Skills'
import ProjectsWork from './ProjectsWork'
import Experience from './Experience'
import CV_Resume from './CV_Resume'
import Footer from './Footer'
const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            <ProjectsWork />
            <Experience />
            <CV_Resume />
            <Footer />
        </main>

    )
}

export default Home