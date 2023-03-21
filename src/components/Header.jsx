import React from 'react';
import icon from '../images/kitsuneIcon.png'

function Header(props) {
    return (
        <div>
            <div className='mx-auto w-3/4 bg-gray-400'>
                <div className='flex flex-row items-center'>
                    <div>
                        <img className='px-1' src={icon} style={{height: '75px'}} alt="" />
                    </div>
                    <div className='mx-auto'>
                        Dawson Woolley
                    </div>
                    <div className='px-1'>
                        <ul>
                            <li>IG</li>
                            <li>GH</li>
                            <li>RE</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;