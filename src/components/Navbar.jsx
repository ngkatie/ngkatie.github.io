import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Routes, Route, useNavigate} from 'react-router-dom';
import About from './About';
import Experience from './Experience';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
    }

    const navigate = useNavigate();

    const navAbout = () => {
        navigate('/about');
    }
    const navExperience = () => {
        navigate('/experience');
    }

    return (
        <div className='flex justify-between items-center h-30 max-w-[1240px] mx-auto my-10 px-4'>

            <ul className='hidden md:flex'>
                <li onClick={navAbout} className='p-4'>About</li>
                <li onClick={navExperience} className='p-4'>Experience</li>
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

            <Routes>
                <Route path='/about' element={<About/>} />
                <Route path='/experience' element={<Experience/>} />
            </Routes>

        </div>
    )
}

export default Navbar;