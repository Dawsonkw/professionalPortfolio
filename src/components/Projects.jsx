import React from 'react';
import Carousel from './Carousel';
import video1 from '../videos/chatbox.mp4';
import video2 from '../videos/shamazonVideo.mp4';
import video3 from '../videos/protogenVideo.mp4';
import video4 from '../videos/theOtterVideo.mp4';
import video5 from '../videos/aiPlaygroundVideo.mp4';
import thumbnail1 from '../images/chatbox.png';
import thumbnail2 from '../images/shamazon.png';
import thumbnail3 from '../images/protogen.png';
import thumbnail4 from '../images/theOtter.png';
import thumbnail5 from '../images/aiPlayground.png';




function Projects(props) {
    return (
        <div id='projects'>
                <div className=''>
                    <div className='flex flex-col iphone5:m-4 iphone5:my-8 mobile:my-8 sm:my-8 md:my-8 mobile:mx-8 sm:m-2 md:m-4 '>
                        <div className=' bg-bone mx-auto iphone5:w-full sm:w-3/5 md:w-7/12 lg:w-full rounded-xl -mt-2 iphone5:px-8 rounded-br-none rounded-bl-none  ' >
                            <Carousel />
                        </div>
                        <div className='iphone5:flex flex-col lg:grid grid-cols-2  bg-bone p-4 rounded-xl iphone5:rounded-tr-none iphone5:rounded-tl-none mx-auto iphone5:w-full sm:w-3/5 md:w-7/12 lg:w-full gap-8 shadow-lg shadow-black '>
                            <div className='py-4  bg-emeraldGreenDark rounded-xl shadow-md shadow-black'>
                                <h1 className='text-center text-3xl font-bold text-white iphone5:text-2xl sm:text-3xl'>Chatbox.js</h1>
                                <video className='p-4' controls poster={thumbnail1} itemProp='contentURL'>
                                    <source src={video1} type='video/mp4' />
                                </video>
                                <div className='text-center'><a href="https://github.com/Dawsonkw/chatBox.js" target='_blank' rel='noreferrer' className=' text-white text-2xl iphone5:text-lg hover:text-coral '>Github repository</a></div>
                            </div>
                            <div className='py-4 bg-emeraldGreenDark rounded-xl shadow-md shadow-black'>
                                <h1 className='text-center text-3xl font-bold text-white iphone5:text-2xl sm:text-3xl'>Shamazon E-commerce</h1>
                                <video className='p-4' controls poster={thumbnail2} itemProp='contentURL'>
                                    <source src={video2} type='video/mp4' />
                                </video>
                                <div className='text-center'><a href="https://github.com/Dawsonkw/Shamazon" target='_blank' rel='noreferrer' className=' text-white text-2xl iphone5:text-lg hover:text-coral'>Github repository</a></div>
                            </div>
                            <div className='py-4 bg-emeraldGreenDark rounded-xl shadow-md shadow-black'>
                                <h1 className='text-center text-3xl font-bold text-white iphone5:text-2xl sm:text-3xl'>Protogen Data Visualization</h1>
                                <video className='p-4' controls poster={thumbnail3} itemProp='contentURL'>
                                    <source src={video3} type='video/mp4' />
                                </video>
                                <div className='text-center'><a href="https://github.com/Dawsonkw/ProtogenIndustries" target='_blank' rel='noreferrer' className=' text-white text-2xl iphone5:text-lg hover:text-coral'>Github repository</a></div>
                            </div>
                            <div className='py-4 bg-emeraldGreenDark rounded-xl shadow-md shadow-black'>
                                <h1 className='text-center text-3xl font-bold text-white iphone5:text-2xl sm:text-3xl'>The Otter Newsapp</h1>
                                <video className='p-4' controls poster={thumbnail4} itemProp='contentURL'>
                                    <source src={video4} type='video/mp4' />
                                </video>
                                <div className='text-center'><a href="https://github.com/Dawsonkw/ReactNewsApp" target='_blank' rel='noreferrer' className=' text-white text-2xl iphone5:text-lg hover:text-coral'>Github repository</a></div>
                            </div>
                            <div className='py-4 bg-emeraldGreenDark rounded-xl shadow-md shadow-black'>
                                <h1 className='text-center text-3xl font-bold text-white iphone5:text-2xl sm:text-3xl'>Ai Playground</h1>
                                <video className='p-4' controls poster={thumbnail5} itemProp='contentURL'>
                                    <source src={video5} type='video/mp4' />
                                </video>
                                <div className='text-center'><a href="https://github.com/Dawsonkw/openAiProject" target='_blank' rel='noreferrer' className=' text-white text-2xl iphone5:text-lg hover:text-coral'>Github repository</a></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Projects;