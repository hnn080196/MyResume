import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Abilities from './Abilities/Abilities';
import Proficiency from './Proficiency/Proficiency';
import Education from './Education/Education';
import Project from './Project/Project';
import Contact from './Contact/Contact';
export default function Home() {
    return (
        <section className='home'>
            <Header />
            <About />
            <Abilities />
            <Proficiency />
            <Education />
            <Project />
            <Contact />
        </section>
    );
}
