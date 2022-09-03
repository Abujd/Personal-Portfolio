
import React from 'react'
import Navbar from '../Navbar'
import Jumbo from './Jumbo'
import About from './About'
import Experience from './experience'
import Projects from './Projects'
import GetInTouch from './getInTouch'
import Footer from './footer'
import WorkExperience from './WorkExperience'

export default function Main() {
  return (
  <>
    <Navbar />
    <Jumbo/>
    <About />
    <Experience />
    <Projects />
    <GetInTouch />
    <Footer />
  </>
  )
}
