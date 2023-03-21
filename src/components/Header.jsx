import React from 'react';
import icon from '../images/kitsuneIcon.png'
import { AiFillInstagram, AiFillGithub, AiFillFilePdf } from 'react-icons/ai'

function Header(props) {
    return (
        <div>
            <div className='bg-darkTurquoise text-kindaTan mx-auto mobile:w-3/4 sm:w-3/5 shadow-2xl rounded-lg rounded-tl-none rounded-tr-none'>
                <div>
                    <div className='flex flex-row items-center'>
                        <div>
                            <img className='px-2' src={icon} style={{height: '100px'}} alt="" />
                        </div>
                        <div className='mx-auto mobile:text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>
                            Dawson Woolley
                        </div>
                        <div className='px-2 '>
                            <ul className='space-y-2 text-lg '>
                                <li className='hover:text-cyan-500'><AiFillInstagram /></li>
                                <li className='hover:text-cyan-500'><AiFillGithub /></li>
                                <li className='hover:text-cyan-500'><AiFillFilePdf /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-between px-4 py-2 mobile:text-sm  mobile:px-1 sm:text-lg'>
                        <a className='pl-2 border-b-2 border-transparent hover:border-b-2 hover:border-cyan-500' href="#">About</a>
                        <a className='border-b-2 border-transparent hover:border-b-2 hover:border-cyan-500' href="#">Projects</a>
                        <a className='border-b-2 border-transparent hover:border-b-2 hover:border-cyan-500' href="#">Components</a>
                        <a className='pr-2 border-b-2 border-transparent hover:border-b-2 hover:border-cyan-500' href="#">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;