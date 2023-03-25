import React from 'react';
import character from '../images/softwareDevEdit.png';
import { useTypewriter } from 'react-simple-typewriter';

function About(props) {

    const [text] = useTypewriter({
        words: ['software developer.', 'Brazilian jiu-jitsu expert.', 'forever student.', 'martial artist.', 'builder.'],
        loop: false,
        typeSpeed: 120,
        deleteSpeed: 75,       
    })
    return (
        <div id='about'>
            <div className=' bg-bone iphone5:w-4/5 sm:w-3/5 lg:w-2/5 flex flex-col justify-center items-center mx-auto my-4 rounded-xl shadow-xl '>     
                <div className=''>  
                </div>
                <div className='text-center py-4 px-2'>    
                    <p className='text-xl iphone5:px-4 mobile:px-8'>
                        Hi, my name is Dawson. I'm a front end developer who has a passion for programming, and studying Brazilian jiu-jitsu.
                    </p>
                </div>
                <div className=''>
                        <img className='mx-auto pt-4  ' src={character} style={{width: '375px', minWidth:'200px'}} alt="" />
                        <p className='pb-2 md:text-lg text-center'>I'm a {text}</p>
                </div>
            </div>

        </div>
    );
}

export default About;