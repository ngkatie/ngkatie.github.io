import React from 'react'
import ProfilePhoto from '../assets/ProfilePhoto.jpg'

const Intro = () => {
    return (
        <div className='w-full bg-[#d8b29a]'>

            <div className='spacer wave-1'></div>
            
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img 
                    className='w-[400px] mx-auto my-4'
                    style={{borderRadius: 200}}  
                    src={ProfilePhoto} alt='/'
                />
                <div className='flex flex-col justify-center'>
                    <p>
                        Hello! I'm Katie, a sophomore at Stevens pursuing a B.S. Computer Science with a minor in Quantitative Finance. 
                    </p>
                    <p>
                        My curiosity for technology stems from an appreciation for human-centered design. I value diversity in 
                        perspective because I believe exposure to unique experiences fosters a culture of empathy, collaboration, and 
                        creativity that culminates in innovation. 
                    </p>
                    <p>
                        As a fast and adaptive learner, I am hoping to pursue opportunities that will not only allow me to apply my skills, 
                        but will also challenge my problem-solving abilities. The most meaningful contributions are often solutions to 
                        "impossible" questions, and while these solutions vary from question to question, all successful approaches share 
                        two things in common: confidence and an open mind.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro