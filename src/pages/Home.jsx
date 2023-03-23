import React from 'react';
import About from '../components/About';
import Components from '../components/Components';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Jiujitsu from '../components/Jiujitsu';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies'


function Home(props) {
    return (
        
            <div className=' bg-inherit h-full' >
                <Header />
                <About />
                <Projects />
                <Components />
                <Technologies />
                <Jiujitsu />
                <Contact />
            </div>
        
    );
}

export default Home;