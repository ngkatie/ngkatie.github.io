import johnson from '../assets/johnson.png';
import stevens from '../assets/stevens.png';

const experiences = [
    {
        title: "Technology Intern",
        company_name: "Johnson & Johnson",
        icon: johnson,
        date: "May 2023 - Present",
        points: [
            "Supporting systems integration to digitize end-to-end supply chain for medical devices.",
            "Hopefully data science and full-stack web development...    "
        ]
    },
    {
        title: "Lab Specialist",
        company_name: "Extended Reality (XR) Laboratory",
        icon: stevens,
        date: "Sep 2022 - May 2023",
        points: [
            "Managed modules supporting university classes and research teams in developing predictive models for drug development, gene editing, and mechanical prototyping.",
            "Assisted in launching a pilot program for a graduate finance course, allowing the professor to host classes in virtual reality.",
            "Trained 150+ students, faculty members, and research teams to handle XR technologies and systems."
        ]
    }
]

export { experiences }