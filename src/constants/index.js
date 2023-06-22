import johnson from '../assets/johnson.png';
import stevens from '../assets/stevens.png';

const experiences = [
    {
        title: "Technology Intern",
        company_name: "Johnson & Johnson",
        icon: johnson,
        iconBg: "#fbfbfb",
        date: "May 2023 - Present",
        points: [
            "Initial test",
            "Supporting systems integration to digitize end-to-end supply chain processes",
            "Hopefully full-stack web development for surgeons"
        ]
    },
    {
        title: "Lab Specialist",
        company_name: "Extended Reality (XR) Laboratory",
        icon: stevens,
        iconBg: "#fbfbfb",
        date: "Sep 2022 - May 2023",
        points: [
            "Managed modules supporting university classes and research students in developing predictive models for antibody stability, editing genes using CRISPR-Cas9, and testing mechanical prototypes in virtual spaces.",
            "Assisted in launching a pilot program for a graduate finance course, allowing the professor to host classes in virtual reality for more immersive learning.",
            "Trained 150+ students, faculty members, and research teams to handle XR technologies and systems, including the Microsoft HoloLens 2, HTC Vive Pro, and Meta Oculus Rift."
        ]
    }
]

export { experiences }