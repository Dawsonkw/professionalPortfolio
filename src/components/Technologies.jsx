import React from 'react';
import cIcon from '../images/CIcon.png'
import htmlCssIcon from '../images/htmlCSSIcon.png'
import JsIcon from '../images/javascriptIcon.png'
import pythonIcon from '../images/pythonIcon.png'
import reactIcon from '../images/reactIcon.png'
import tailwindIcon from '../images/tailwindcssIcon.png'
import viteIcon from '../images/viteIcon.png'
import webDevIcon from '../images/webDevIcon.png'

function Technologies(props) {
    return (
        <div>
            <div className='bg-bone p-4 flex flex-col iphone5:m-4 iphone5:my-8 mobile:my-8 sm:my-8 md:my-8 mobile:mx-8 sm:m-2 md:m-4 rounded-xl shadow-lg shadow-black'>
                <h1 className='text-xl '>Technologies I use:</h1>   
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 gap-x-6 sm:grid-cols-1 pt-2'>               
                    <div className='bg-gray-300 p-6 my-2 mx-2 relative shadow-md shadow-black rounded-xl' id='reactCard'>
                        <h1 className='text-3xl pb-1'>React.js</h1>
                        <div className="absolute top-0 right-0 -mx-2 -my-2 w-8 h-8 "><img src={reactIcon} alt="React.js Icon" /></div>
                    </div>
                    <div className='p-6 my-2 mx-2 relative shadow-md shadow-black  rounded-xl' id='jsCard' >
                        <h1 className='text-3xl pb-1'>Javascript</h1>
                        <div className="absolute top-0 right-0 -mx-2 -my-2 w-8 h-8 "><img src={JsIcon} alt="Javascript Icon" /></div>
                    </div>
                    <div className='bg-gray-300 p-6 my-2 mx-2 relative shadow-md shadow-black rounded-xl' id='htmlCard'>
                        <h1 className='text-3xl pb-1'>HTML / CSS</h1>
                        <div className="absolute top-0 right-0 -mx-2 -my-2 w-8 h-8 bg-slate-800"><img src={htmlCssIcon} alt="HTML / CSS Icon" /></div>
                    </div>
                    <div className='bg-gray-300 p-6 my-2 mx-2 relative shadow-md shadow-black rounded-xl' id='tailwindCard'>
                        <h1 className='text-3xl pb-1'>TailwindCss</h1>
                        <div className="absolute top-0 right-0 -mx-2 -my-2 w-8 h-8 bg-gray-800"><img src={tailwindIcon} alt="TailwindCSS Icon" /></div>
                    </div>
                    <div className='bg-gray-300 p-6 my-2 mx-2 relative shadow-md shadow-black rounded-xl' id='viteCard'>
                        <h1 className='text-3xl pb-1'>Vite</h1>
                        <div className="absolute top-0 right-0 -mx-2 -my-2 w-8 h-8 bg-slate-800"><img src={viteIcon} alt="Vite Icon" /></div>
                    </div>
                    <div className='bg-gray-300 p-6 my-2 mx-2 relative shadow-md shadow-black rounded-xl' id='cCard'>
                        <h1 className='text-3xl pb-1'>C</h1>
                        <div className="absolute top-0 right-0 -mx-2 -my-2 w-8 h-8 bg-slate-800"><img className='object-cover w-8 h-8' src={cIcon} alt="C Icon" /></div>
                    </div>
                    <div className='bg-gray-300 p-6 my-2 mx-2 relative shadow-md shadow-black rounded-xl' id='pythonCard'>
                        <h1 className='text-3xl pb-1'>Python</h1>
                        <div className="absolute top-0 right-0 -mx-2 -my-2 w-8 h-8 bg-slate-800"><img src={pythonIcon} alt="Python Icon" /></div>
                    </div>
                    <div className='bg-gray-300 p-6 my-2 mx-2 relative shadow-md shadow-black rounded-xl' id='devCard'>
                        <h1 className='text-3xl pb-1'>And many more</h1>
                        <p className='text-md'> </p>
                        <div className="absolute top-0 right-0 -mx-2 -my-2 w-8 h-8 bg-slate-800"><img src={webDevIcon} alt="Icon for Web Development" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;