import React from 'react';
import icon from '../images/kitsuneIcon.png'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { MdWorkHistory } from 'react-icons/md'
import { Link } from 'react-scroll';


function Header(props) {
    return (
        <div className='sticky top-0 z-10' id='header'>
            <div className='bg-bone text-black mx-auto iphone5:w-4/5 sm:w-3/5 shadow-md shadow-black rounded-lg rounded-tl-none rounded-tr-none'>
                <div className=''>
                    <div className='flex flex-row items-center'>
                        <div>
                            <img className='px-4' src={icon} style={{height: '100px'}} alt="" />
                        </div>
                        <div className=' font-marker mx-auto iphone5:text-sm iphone5:font-bold 350:text-lg mobile:text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>
                            Dawson Woolley
                        </div>
                        <div className='px-4 '>
                            <ul className='space-y-3 iphone5:text-lg sm:text-xl md:text-2xl md:py-2 '>
                                <li className='hover:text-emeraldGreenDark'>  
                                    <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/dawson_does_jiujitsu/">
                                        <AiFillInstagram />
                                    </a>                             
                                </li>
                                <li className='hover:text-emeraldGreenDark'>
                                    <a target="_blank" rel='noopener noreferrer' href="https://github.com/Dawsonkw">
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className='hover:text-emeraldGreenDark'>
                                    <a target="_blank" rel='noopener noreferrer' href="https://pdfhost.io/v/XvwQZk9fR_dkw_dev_resume_hosted">
                                        <MdWorkHistory />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-around px-2 py-2 iphone5:text-xs 350:text-sm  iphone5:px-1 sm:text-lg'>
                        <Link to='about' smooth={true} offset={-170} className='pl-2 border-b-2 border-transparent hover:border-b-2 hover:border-emeraldGreenDark' >About</Link>
                        <Link to='projects' smooth={true} offset={-170} className='border-b-2 border-transparent hover:border-b-2 hover:border-emeraldGreenDark' >Projects</Link>
                        {/* <Link to='jiujitsu' smooth={true} offset={-170} className='border-b-2 border-transparent hover:border-b-2 hover:border-emeraldGreenDark' >Jiu-Jitsu</Link> */}
                        <Link to='contact' smooth={true} offset={-170} className='pr-2 border-b-2 border-transparent hover:border-b-2 hover:border-emeraldGreenDark' >Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;