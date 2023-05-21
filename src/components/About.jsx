import React from 'react';
import Typed from 'typed.js';

const About = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ['developer','artist','lover'], 
        startDelay: 200,
        typeSpeed: 150,
        backSpeed: 140,
        backDelay: 100,
        loop:true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='text-[#A4907C]'>

            <div className='max-w-[800px] mt-[-95px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 uppercase'>Hi, I'm Katie.</h1>
                <div>
                    {}
                    <span className='md:text-2xl text-xl' ref={el}></span>
                </div>
            </div>

        </div>
    )
}

export default About;