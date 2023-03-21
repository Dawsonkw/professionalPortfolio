import React from 'react';
import icon from '../images/kitsuneIcon.png'
import { AiFillInstagram, AiFillGithub, AiFillFilePdf } from 'react-icons/ai'

function Header(props) {
    return (
        <div>
            <div className='bg-kindaTan text-reallyDarkTurquoise mx-auto iphone5:w-3/4 sm:w-3/5 shadow-2xl rounded-lg rounded-tl-none rounded-tr-none'>
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
                                <li className='hover:text-emeraldGreenDark'><AiFillInstagram /></li>
                                <li className='hover:text-emeraldGreenDark'><AiFillGithub /></li>
                                <li className='hover:text-emeraldGreenDark'><AiFillFilePdf /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-around px-4 py-2 iphone5:text-sm  iphone5:px-1 sm:text-lg'>
                        <a className='pl-2 border-b-2 border-transparent hover:border-b-2 hover:border-emeraldGreenDark' href="#">About</a>
                        <a className='border-b-2 border-transparent hover:border-b-2 hover:border-emeraldGreenDark' href="#">Projects</a>
                        <a className='pr-2 border-b-2 border-transparent hover:border-b-2 hover:border-emeraldGreenDark' href="#">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;