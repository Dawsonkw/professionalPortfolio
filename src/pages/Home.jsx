import React from 'react';
import About from '../components/About';
import Components from '../components/Components';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Projects from '../components/Projects';

function Home(props) {
    return (
        <div className=''>
            <Header />
            <About />
            <Projects />
            <Components />
            <Contact />
        </div>
    );
}

export default Home;