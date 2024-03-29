import React from 'react'
import FullProfile from '../assets/FullProfile_Transparent.png'
// import { ImageBackground, StyleSheet, Text, View } from 'react-native-web-linear-gradient';
// import LinearGradient from 'react-native-web-linear-gradient'
// import { View } from 'react-native-web'

const About = () => {
    return (
        <div className='w-full bg-[#FAFAFC]'>

            {/* <div className='spacer wave-1'></div> */}

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 mt-[-100]'>
                <img 
                    className='w-[400px] mx-auto my-4'
                    style={{borderRadius: 200}}  
                    src={FullProfile} alt='/'
                />
                <div className='max-w-[450px] flex flex-col justify-center mx-[10px]'>
                    <div className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-4'>
                        <p>Hi, I'm Katie!</p>
                    </div>
                    <div className='mt-4 mb-4 text-[18px] text-right pt-4 pb-4 border-t border-b border-black'>
                        <p>B.S. Computer Science</p>
                        <p>Minor in Quantitative Finance</p>
                        <p><em>Stevens Institute of Technology</em></p>
                    </div>
                    <p className='text-[18px]'> 
                        My curiosity for technology stems from a passion for challenge. Meaningful contributions are often 
                        solutions to "impossible" questions, and while these solutions vary from question to question, all successful 
                        approaches share two things in common: <span>confidence</span> and <span>an open mind.</span>
                    </p>
                </div>
            </div>

            {/* <div className='spacer wave-2'></div> */}

        </div>
    )
}

export default About