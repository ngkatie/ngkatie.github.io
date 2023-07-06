import johnson from '../assets/johnson.png';
import stevens from '../assets/stevens.png';

const experiences = [
    {
        title: "Technology Intern",
        company_name: "Johnson & Johnson",
        icon: johnson,
        date: "May 2023 - Present",
        points: [
            "Maintained a product backlog and led weekly standups for 15+ global stakeholders to translate business needs into technical sprints, ensuring timely deployment for the consolidation of 7 supply chain ERPs.",
            "Hopefully data science and full-stack web development...    "
        ]
    },
    {
        title: "Lab Specialist",
        company_name: "Extended Reality (XR) Laboratory",
        icon: stevens,
        date: "Sep 2022 - May 2023",
        points: [
            "Managed modules supporting 5 university classes and 6 research teams in drug development and mechanical prototyping.",
            "Trained 220+ students and 15+ faculty members to handle 9 VR/AR systems.",
            "Researched new developments in the metaverse to identify innovative technologies and educational strategy."
        ]
    },
    {
        title: "Undergraduate Researcher",
        company_name: "Mobile AI Cybersecurity Computing (MACC) Laboratory",
        icon: stevens,
        date: "May 2022 - Aug 2022",
        points: [
            "Leveraged pandas to identify the optimal resource selection window ensuring 98% success for message delivery in cellular vehicle-to-everything (CV2X) communications.",
            "Analyzed the performance of WiFi-based DSRC versus 4G/5G CV2X, concluding that DSRC outperformed by 97% in latency, but CV2X was 117% more reliable with packet reception.",
            "Developed traffic simulations and modeled vehicular networks in Eclipse SUMO and ns-3."
        ]
    }
]

export { experiences }