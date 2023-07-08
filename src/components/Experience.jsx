import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants/index.js'

const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#AAAAAA",
          color: "#FBFBFB",
        }}
        contentArrowStyle={{ borderRight: "7px solid #AAAAAA" }}
        date={experience.date}
        dateClassName={"text-[#777777]"}
        iconStyle={{ background: "#FBFBFB" }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
  
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };
  
  const Experience = () => {
    return (
        <div className="m-20 flex flex-col">
          <h1 className='uppercase text-center md:text-5xl sm:text-4xl text-2xl font-bold md:py-4'>Experiences</h1>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={index} 
                experience={experience} 
              />
            ))}
          </VerticalTimeline>
        </div>
    );
  };
  
export default Experience