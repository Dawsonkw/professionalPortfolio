import React from 'react';
import icon from '../images/kitsuneIcon.png'
import { AiFillInstagram, AiFillGithub, AiFillFilePdf } from 'react-icons/ai';
import { Link } from 'react-scroll';


function Header(props) {
    return (
        <div>
            <div className='bg-bone text-reallyDarkTurquoise mx-auto iphone5:w-3/4 sm:w-3/5 shadow-2xl rounded-lg rounded-tl-none rounded-tr-none'>
                <div>
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
                                        <AiFillFilePdf />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-around px-2 py-2 iphone5:text-xs 350:text-sm  iphone5:px-1 sm:text-lg'>
                        <Link to='about' smooth={true} className='pl-2 border-b-2 border-transparent hover:border-b-2 hover:border-emeraldGreenDark' >About</Link>
                        <Link to='projects' smooth={true} className='border-b-2 border-transparent hover:border-b-2 hover:border-emeraldGreenDark' >Projects</Link>
                        <Link to='jiujitsu' smooth={true} className='border-b-2 border-transparent hover:border-b-2 hover:border-emeraldGreenDark' >Jiu-Jitsu</Link>
                        <Link to='contact' smooth={true} className='pr-2 border-b-2 border-transparent hover:border-b-2 hover:border-emeraldGreenDark' >Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;