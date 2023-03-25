import React from 'react';
import character from '../images/softwareDevEdit.png';
import { useTypewriter } from 'react-simple-typewriter';
import headshot from '../images/headshotPic.jpg'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { MdWorkHistory } from 'react-icons/md'

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
            <div className='iphone5:w-4/5 sm:w-3/5 lg:w-2/5 bg-bone mx-auto flex flex-row justify-around rounded-xl py-4'>
                <div className='text-center'>
                    <img className='p-2 rounded-full flex justify-center items-center' src={headshot} style={{width: '300px'}} alt="" />
                    <h2>Connect with me</h2>
                </div>
                <div className='flex flex-col justify-center'>
                    {/* <div className='flex flex-col mx-auto text-5xl iphone5:text-2xl 350:text-3xl mobile:text-4xl sm:text-5xl gap-6 py-2'>
                        <a href="#"><AiFillInstagram/></a>
                        <a href="#"><AiFillGithub/></a>
                        <a href="#"> <AiFillLinkedin/></a>
                        <a href="#"><AiFillYoutube/></a>
                        <a href="#"><MdWorkHistory/></a>
                    </div> */}
                    <div className='flex flex-col mx-auto text-5xl iphone5:text-2xl 350:text-3xl mobile:text-4xl sm:text-5xl gap-6 py-2'>
                    <div className="relative group">
                        <a href="#" className=" hover:text-emeraldGreenDark"><AiFillInstagram/></a>
                        <div className="hidden absolute left-12 top-0 w-fit bg-gray-100 rounded-md shadow-lg py-2 transition-all duration-2000 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ">
                            <p className='text-2xl'>Instagram</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="hover:text-emeraldGreenDark"><AiFillGithub/></a>
                        <div className="hidden absolute left-12 top-0 w-fit bg-gray-100 rounded-md shadow-lg py-2 transition-all duration-900 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                            <p className='text-2xl'> Github</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="hover:text-emeraldGreenDark"><AiFillLinkedin/></a>
                        <div className="hidden absolute left-12 top-0 w-fit bg-gray-100 rounded-md shadow-lg py-2 transition-all duration-900 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                            <p className='text-2xl'>LinkedIn</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="hover:text-emeraldGreenDark"><AiFillYoutube/></a>
                        <div className="hidden absolute left-12 top-0 w-fit bg-gray-100 rounded-md shadow-lg py-2 transition-all duration-900 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                            <p className='text-2xl'>YouTube</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="hover:text-emeraldGreenDark"><MdWorkHistory/></a>
                        <div className="hidden absolute left-12 top-0 w-fit bg-gray-100 rounded-md shadow-lg py-2 transition-all duration-900 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                            <p className='text-2xl'>Resume</p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;