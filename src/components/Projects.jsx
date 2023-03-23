import React from 'react';
import Carousel from './Carousel';
import video1 from '../videos/chatbox.mp4';
import video2 from '../videos/shamazonVideo.mp4';
import video3 from '../videos/protogenVideo.mp4';
import video4 from '../videos/theOtterVideo.mp4';
import video5 from '../videos/aiPlaygroundVideo.mp4';
import video6 from '../videos/woolleyWoodworkingVideo.mp4';


function Projects(props) {
    return (
        <div id='projects'>
                <div className=''>
                    <div className='flex flex-col iphone5:m-4 mobile:my-4 mobile:mx-8 sm:m-2 md:m-4  '>
                        <div className=' bg-bone mx-auto iphone5:w-full sm:w-3/5 md:w-7/12 lg:w-3/5 rounded-xl -mt-2 iphone5:px-8 rounded-br-none rounded-bl-none ' >
                            <Carousel />
                        </div>
                        <div className='iphone5:flex flex-col md:grid md:grid-cols-2 gap-4  bg-bone p-4 rounded-xl iphone5:rounded-tr-none iphone5:rounded-tl-none mx-auto iphone5:w-full sm:w-3/5 md:w-7/12 lg:w-3/5 '>
                            <div className='py-4'>
                                <h1 className='text-center font-xl font-bold'>Chatbox.js</h1>
                                <video controls poster='#' itemProp='contentURL'>
                                    <source src={video1} type='video/mp4' />
                                </video>
                            </div>
                            <div className='py-4'>
                                <h1 className='text-center font-xl font-bold'>Shamazon E-commerce</h1>
                                <video controls poster='#' itemProp='contentURL'>
                                    <source src={video2} type='video/mp4' />
                                </video>
                            </div>
                            <div className='py-4'>
                                <h1 className='text-center font-xl font-bold'>Protogen Data Visualization</h1>
                                <video controls poster='#' itemProp='contentURL'>
                                    <source src={video3} type='video/mp4' />
                                </video>
                            </div>
                            <div className='py-4'>
                                <h1 className='text-center font-xl font-bold'>The Otter Newsapp</h1>
                                <video controls poster='#' itemProp='contentURL'>
                                    <source src={video4} type='video/mp4' />
                                </video>
                            </div>
                            <div className='py-4'>
                                <h1 className='text-center font-xl font-bold'>Ai Playground</h1>
                                <video controls poster='#' itemProp='contentURL'>
                                    <source src={video5} type='video/mp4' />
                                </video>
                            </div>
                            <div className='py-4'>
                                <h1 className='text-center font-xl font-bold'>Woolley Woodworking</h1>
                                <video controls poster='#' itemProp='contentURL'>
                                    <source src={video6} type='video/mp4' />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Projects;