import React from 'react';
import Carousel from './Carousel';

function Projects(props) {
    return (
        <div id='projects'>
                <div className='relative bg-bone mx-auto iphone5:w-3/4 sm:w-3/5 rounded-xl mt-10' >
                    <Carousel />
                </div>
        </div>
    );
}

export default Projects;