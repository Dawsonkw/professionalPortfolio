import React from 'react';
import headshot from '../images/headshotPic.jpg'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { MdWorkHistory } from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {VscLocation} from 'react-icons/vsc'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';

//Email.js constants
const SERVICE_ID = "service_r5ieg6y";
const TEMPLATE_ID = "template_lufahf9";
const USER_ID = "0DEv7bd_vZqmZbu0H";

//Sweet Alert 2 functionality tied to the email.js sender
const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

function Contact(props) {
    return (
        <div id='contact'>
            <div className='iphone5:w-11/12 sm:w-3/5 md:w-7/12 lg:w-2/5  bg-bone mx-auto flex flex-row justify-around rounded-xl my-4 shadow-xl'>
                <div className='text-center'>
                    <img className='p-2 rounded-full flex justify-center items-center' src={headshot} style={{width: '300px'}} alt="" />
                    <h2>Connect with me</h2>
                </div>
                <div className='flex flex-col justify-center px-4'>
                    <div className='flex flex-col mx-auto text-5xl iphone5:text-2xl 350:text-3xl mobile:text-4xl sm:text-5xl gap-6 py-2'>
                    <div className="relative group">
                        <a href="#" className=" hover:text-emeraldGreenDark"><AiFillInstagram/></a>
                        <div className="hidden absolute left-14 top-0 w-fit bg-emeraldGreenDark rounded-md shadow-lg py-2 transition-all duration-2000 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ">
                            <p className='text-2xl'>Instagram</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="hover:text-emeraldGreenDark"><AiFillGithub/></a>
                        <div className="hidden absolute left-14 top-0 w-fit bg-emeraldGreenDark rounded-md shadow-lg py-2 transition-all duration-900 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                            <p className='text-2xl'> Github</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="hover:text-emeraldGreenDark"><AiFillLinkedin/></a>
                        <div className="hidden absolute left-14 top-0 w-fit bg-emeraldGreenDark rounded-md shadow-lg py-2 transition-all duration-900 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                            <p className='text-2xl'>LinkedIn</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="hover:text-emeraldGreenDark"><AiFillYoutube/></a>
                        <div className="hidden absolute left-14 top-0 w-fit bg-emeraldGreenDark rounded-md shadow-lg py-2 transition-all duration-900 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                            <p className='text-2xl'>YouTube</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <a href="#" className="hover:text-emeraldGreenDark"><MdWorkHistory/></a>
                        <div className="hidden absolute left-14 top-0 w-fit bg-emeraldGreenDark rounded-md shadow-lg py-2 transition-all duration-900 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                            <p className='text-2xl'>Resume</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='' id='contact'>
                <div className=' flex justify-center pb-5'>
                    <div className='flex w-full min-h-1/4 max-w-90/1 justify-center items-center '>
                        <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-bone w-full max-w-4xl p-8 rounded-xl shadow-lg text-white overflow-hidden mx-4'>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <h1 className='font-bold text-4xl tracking-wide text-reallyDarkTurquoise text-center'>Contact Me</h1>
                                    <p className='pt-2 text-reallyDarkTurquoise text-md'>Please reach out to me if you have any questions. I am currently seeking fulltime employment. </p>
                                </div>
                                <div>
                                    <div className='flex flex-row p-5 space-x-3 text-reallyDarkTurquoise '>
                                        <FiPhoneCall className='text-reallyDarkTurquoise'/>
                                        <span> Phone number available on request</span> 
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-row p-5 space-x-3 text-reallyDarkTurquoise'>
                                        <HiOutlineMail className='text-reallyDarkTurquoise'/>
                                        <span>Dawsonkw@gmail.com</span>
                                    </div>
                                </div>                          
                                <div>
                                    <div className='flex flex-row p-5 space-x-3 text-reallyDarkTurquoise'>
                                        <VscLocation className='text-reallyDarkTurquoise' />
                                        <span>Colorado</span>
                                    </div>
                                </div>          
                            </div>
                            <div className='relative'>
                                <div className='absolute w-40 h-40 bg-emeraldGreenDark rounded-full -right-20 -top-20'></div>
                                <div className='absolute w-40 h-40 bg-emeraldGreenDark rounded-full -left-20 -bottom-20'></div>
                                <div className='relative z-10 bg-darkStone rounded-xl shadow-lg p-8 text-gray-600 md:w-80 '>
                                    <form  onSubmit={handleOnSubmit} action="" className='flex flex-col space-y-4'>
                                        <div>
                                            <label name='to_name' htmlFor="" className='text-sm'>Your Name</label>
                                        </div>
                                            <div>               
                                                <input type="text" placeholder='Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500' name='from_name' required/>
                                            </div>
                                        <div>
                                        <div>
                                            <label htmlFor="" className='text-sm'>Email Address</label>
                                        </div>
                                            <div>
                                                <input type="email" placeholder='Email Address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500' name=' from_name' required />
                                            </div>
                                        </div>
                                        <div>
                                        <div>
                                            <label htmlFor="" className='text-sm'>Message</label>
                                        </div>
                                        <div>
                                            <textarea type="text" placeholder='Type a brief message here' rows={4} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500' name='message' required></textarea>
                                        </div>
                                        </div>
                                        <button type='submit' className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-emeraldGreenDark border rounded-md shadow-sm hover:bg-kitsuneOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" data-rounded="rounded-md" data-primary="black" data-primary-reset="{}">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
}

export default Contact;