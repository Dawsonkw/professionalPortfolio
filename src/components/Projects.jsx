import React from 'react';
import Carousel from './Carousel';

function Projects(props) {
    return (
        <div id='projects'>
                <div className=''>
                    <div className='flex iphone5:m-8 mobile:m-8 sm:m-2  '>
                        <div className=' bg-bone mx-auto iphone5:w-full sm:w-3/5 lg:w-2/5 md:w-7/12 rounded-xl mt-4 iphone5:px-8' >
                            <Carousel />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Projects;