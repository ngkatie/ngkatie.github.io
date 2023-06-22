import React from 'react';
import Typed from 'typed.js';

const Hero = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ['turn ideas into reality.'], 
        startDelay: 200,
        typeSpeed: 300,
        onComplete() {
            typed.cursor.remove();
        }
        // backSpeed: 140,
        // backDelay: 100,
        // loop:true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='text-[#A4907C]'>

            <div className='max-w-[800px] mt-[-95px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 uppercase'>KATIE NG</h1>
                <div>
                    {}
                    <span className='md:text-2xl text-xl' ref={el}></span>
                </div>
            </div>

        </div>
    )
}

export default Hero;