import React from 'react';
import character from '../images/softwareDevEdit.png';
import headshot from '../images/headshotPic.jpg';
import { useTypewriter } from 'react-simple-typewriter';

function About(props) {

    const [text] = useTypewriter({
        words: ['software developer.', 'Brazilian jiu-jitsu expert.', 'forever student.', 'martial artist.', 'builder.'],
        loop: false,
        typeSpeed: 120,
        deleteSpeed: 75,       
    })


    return (
        <div>
            <div className='flex iphone5:flex-col 350:flex-col mobile:flex-col sm:flex-row  sm:px-4 justify-between  py-4 px-4 mt-10'>
                
                <div className='flex w-3/5  mt-4 iphone5:mx-auto xl:mx-8 iphone5:order-2 350:order-2 mobile:order-2 sm:order-1 '>
                    <div className='flex flex-col justify-center items-center bg-bone py-4 px-4 w-full h-full  rounded-xl iphone5:rounded-xl 350:rounded-xl mobile:rounded-xl sm:rounded-tr-none sm:rounded-br-none xl:rounded-xl xl:mr-1 text-xl text-center text-reallyDarkTurquoise font-bold'>
                    <img className='rounded-xl mx-auto items-center iphone5:hidden 350:hidden mobile:hidden sm:flex pb-2' src={headshot} style={{width: '200px'}} alt="" />
                        Hi, my name is Dawson. I'm a front end developer who has a passion for creating software that helps make an impact in people's lives.
                        
                    </div>
                </div>
                
                <div className=' flex flex-col justify-center items-center mt-4 mr-2 mobile:order-1 iphone5:order-1 350:order-1 sm:order-2 text-center sm:px-6 bg-bone iphone5:rounded-xl 350:rounded-xl mobile:rounded-xl sm:rounded-tl-none sm:rounded-bl-none xl:rounded-xl xl:ml-1 text-reallyDarkTurquoise font-bold xl:mx-8'>
                    <img className='mx-auto pt-4  ' src={character} style={{width: '375px'}} alt="" />
                    <p className='pb-2'>I'm a {text}</p>
                </div>
            </div>
        </div>
    );
}

export default About;