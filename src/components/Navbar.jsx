import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-30 max-w-[1240px] mx-auto px-4 text-[#A4907C]'>
            <h1 className='w-full text-3xl font-bold text-[#A4907C] m-4'>KATIE NG</h1>

            <ul className='hidden md:flex'>
                <li className='p-4'>About</li>
                <li className='p-4'>Experience</li>
                <li className='p-4'>Projects</li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#C8B6A6] bg-[#C8B6A6] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-white m-4'>KATIE NG</h1>
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