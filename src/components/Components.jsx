import React from 'react';
import video1 from '../videos/loginComponentVideo.mp4';
import placeholder from '../images/placeholder.png';

function Components(props) {
    return (
        <div>
            
            <div className='iphone5:m-4 mobile:my-4 mobile:mx-8 sm:m-2 md:m-4 shadow-xl '>
                <div className='iphone5:flex flex-col lg:grid grid-cols-2 xl:grid-cols-3  bg-bone p-4 rounded-xl  mx-auto iphone5:w-full sm:w-3/5 md:w-7/12 lg:w-full gap-8'>
                    <h2 className='text-center sm:flex-col lg:col-span-3'>Components</h2>
                    <div >
                        <div className='py-4  bg-emeraldGreenDark h-full rounded-xl'>
                            <h1 className='text-center font-xl font-bold'>User Login Portal</h1>
                            <a href="https://github.com/Dawsonkw/entryPortal" target='_blank' rel='noreferrer'  className='flex justify-center'>Github repository</a>
                            <video className='p-4' controls poster='#' itemProp='contentURL'>
                                <source src={video1} type='video/mp4' />
                            </video>
                            <p className='p-4  flex justify-center'>
                                <ul>
                                    <li>React</li>
                                    <li>Firebase Auth</li>
                                    <li>React Router</li>
                                    <li>Sweet Alert 2</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='py-4  bg-emeraldGreenDark h-full rounded-xl'>
                            <h1 className='text-center font-xl font-bold'>Contact Form</h1>
                            <a href="https://github.com/Dawsonkw/contactFormComponent" target='_blank' rel='noreferrer'  className='flex justify-center'>Github repository</a>
                            <img className='mx-auto p-4' src={placeholder} style={{width: '350px',}} alt="" />
                            <p className='p-4  flex justify-center'>
                                <ul>
                                    <li>React</li>
                                    <li>Email.js</li>
                                    <li>Sweet Alert 2</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='py-4  bg-emeraldGreenDark h-full rounded-xl'>
                            <h1 className='text-center font-xl font-bold'>Account Creation Form</h1>
                            <a href="https://github.com/Dawsonkw/accountCreation" target='_blank' rel='noreferrer' className='flex justify-center'>Github repository</a>
                            <img className='mx-auto p-4' src={placeholder} style={{width: '350px',}} alt="" />
                            <p className='p-4  flex justify-center'>
                                <ul>
                                    <li>React</li>
                                    <li>Firebase Auth</li>
                                    <li>Sweet Alert 2</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='py-4  bg-emeraldGreenDark h-full rounded-xl'>
                            <h1 className='text-center font-xl font-bold'>User Authentication Form</h1>
                            <a href="https://github.com/Dawsonkw/userAuth" target='_blank' rel='noreferrer' className='flex justify-center'>Github repository</a>
                            <img className='mx-auto p-4' src={placeholder} style={{width: '350px',}} alt="" />
                            <p className='p-4  flex justify-center'>
                                <ul>
                                    <li>React</li>
                                    <li>React Hook Form</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Components;