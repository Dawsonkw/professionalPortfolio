import React from 'react';
import character from '../images/softwareDevEdit.png';
import headshot from '../images/headshotPic.jpg';
import belt from '../images/beltPhoto.png'
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
            <div className='flex iphone5:flex-col 350:flex-col mobile:flex-col sm:flex-row  sm:px-4 justify-between  py-4 px-4 mt-10 bg-bone iphone5:w-5/6 sm:w-5/6 md:3/5 mx-auto rounded-xl'>     
                <div className='flex flex-col justify-center items-center mt-4 mr-2 mobile:order-2 iphone5:order-2 350:order-2 sm:order-2 md:order-2 text-center sm:px-4  iphone5:mr-4 iphone5:ml-4 sm:ml-0 iphone5:rounded-xl 350:rounded-xl mobile:rounded-xl sm:rounded-tl-none sm:rounded-bl-none xl:rounded-xl xl:ml-1 font-bold xl:mx-8 xl:w-1/3'>
                    <img className='rounded-xl mx-auto items-center iphone5:hidden 350:hidden mobile:hidden md:hidden lg:hidden xl:flex pb-2' src={headshot} style={{width: '200px'}} alt="" />
                    
                    
                </div>
                <div className='flex flex-col order-2 justify-center items-center' style={{width: '300px'}} >
                    
                    <img className='iphone5: hidden lg:hidden xl:flex justify-center items-center ' src={belt} alt="" />
                    <p className=''>
                        Hi, my name is Dawson. I'm a front end developer who has a passion for programming, and studying Brazilian jiu-jitsu.
                    
                    </p>
                
                </div>
                
                <div className=' flex flex-col justify-center items-center mt-4 mr-2 mobile:order-1 iphone5:order-1 350:order-1 sm:order-2 text-center sm:px-4  iphone5:mr-4 iphone5:ml-4 sm:ml-0 iphone5:rounded-xl 350:rounded-xl mobile:rounded-xl sm:rounded-tl-none sm:rounded-bl-none xl:rounded-xl xl:ml-1 font-bold xl:mx-8 xl:w-1/3'>
                        <img className='mx-auto pt-4  ' src={character} style={{width: '375px', minWidth:'200px'}} alt="" />
                        <p className='pb-2 sm:text-sm iphone5:text-xs'>I'm a {text}</p>
                </div>
            </div>
        </div>
    );
}

export default About;