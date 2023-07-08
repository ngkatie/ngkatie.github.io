import React from 'react';
// import Typed from 'typed.js';

const Hero = () => {

    // const el = React.useRef(null);

    // React.useEffect(() => {
    //     const typed = new Typed(el.current, {
    //     strings: ['turn ideas into reality.'], 
    //     startDelay: 200,
    //     typeSpeed: 300,
    //     onComplete() {
    //         typed.cursor.remove();
    //     }
    //     // backSpeed: 140,
    //     // backDelay: 100,
    //     // loop:true
    //     });

    //     return () => {
    //         typed.destroy();
    //     };
    // }, []);

    return (
        <div>

            <div className='max-w-[800px] mt-[8px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

                {/* <div>
                    {}
                    <span className='md:text-3xl sm:text-2xl text-xl text-[#939393]' ref={el}></span>
                </div> */}

                <h1 className='md:text-8xl sm:text-7xl text-6xl font-bold md:py-6 sm:py-2 uppercase'>Katie Ng</h1>

                <div className='mb-10'>
                    <p>Developer with a strong background in algorithms and web technologies.</p>
                </div>

                <div className="sm:w-[60%] sm:mx-[20%] w-[70%] mx-[15%] my-2 rounded-full inline-block whitespace-nowrap bg-white border border-[#CCCCCC]">
                    <div className="p-2 inline-block md:text-base text-xs text-[#31c061] border-r">
                        <span className="inline-block align-middle m-3 h-2 w-2 animate-pulse bg-[#31c061] rounded-full" />
                        Status
                    </div>
                    <p className="inline whitespace-nowrap p-4 md:text-base text-xs">
                        Looking for a 2024 Summer Internship.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Hero;