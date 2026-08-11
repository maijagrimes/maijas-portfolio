import './style.css'
import './header.css'
import Header from './Header.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Experience from './Experience.jsx'
import Education from './Education.jsx'
import Contact from './Contact.jsx'
import Credits from './Credits.jsx'
import Contents from './Contents.jsx'
import { useState } from 'react'

export default function App() {
    return (
        <>
            <Header/>
            <div style={{display: 'flex', margin: '10px'}}>
                <div style={{display: 'flex', flexDirection: 'column', flexGrow: '1', minWidth: '0'}}>
                    <About/>
                    <Projects/>
                    <Experience/>
                    <Education/>
                    <Contact/>
                    <Credits/>
                    <p style={{textAlign: 'center', margin: '120px', fontFamily: 'Short'}}>Thanks for stopping by!</p>
                </div>
                <Contents/>
            </div>
        </>
    );
}