import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-30 max-w-[1240px] mx-auto my-10 px-4'>

            <ul className='hidden md:flex'>
                <li className='p-4'>About</li>
                <li className='p-4'>Experience</li>
                <li className='p-4'>Projects</li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#BBBBBB] bg-[#BBBBBB] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <ul className='uppercase p-2 text-white'>
                    <li className='p-4 border-b border-b-white'>About</li>
                    <li className='p-4 border-b border-b-white'>Experience</li>
                    <li className='p-4'>Projects</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;