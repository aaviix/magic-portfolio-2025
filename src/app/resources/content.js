import { InlineCode } from "@/once-ui/components";
import { FaInstagram } from 'react-icons/fa';

const person = {
  firstName: "Avanish",
  lastName: "Kumar Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Machine Learning Engineer & Software Developer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Berlin", // IANA time zone identifier for Germany
  languages: ["English", "German", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about machine learning, software development, and data-driven innovation.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aaviix",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/avanish-kumar-singh-7167051b8/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram style={{ width: '1em', height: '1em' }} />,
    link: "https://instagram.com/aaviix_",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:singhavanish8642@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Machine Learning Engineer & Software Developer</>,
  subline: (
    <>
      I'm {person.firstName}, a Machine Learning Engineer & Software Developer specializing in creating
      data-driven solutions and innovative applications. I leverage AI, Python, Java, and JavaScript to build
      scalable systems that address real-world challenges.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, ${person.role} based in ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/avanish-singh-tcepem", // Update if needed
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.name} is a Machine Learning Engineer and Software Developer with expertise in building data-driven
        solutions, innovative applications, and scalable systems. Proficient in Python, Java, and JavaScript, he has
        hands-on experience in developing machine learning models, Android applications, and full-stack web projects.
        Passionate about leveraging AI to solve real-world challenges, {person.firstName} is dedicated to creating
        user-centric solutions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "KOgenie E-Solutions PVT LTD",
        timeframe: "Aug 2024 – Feb 2025",
        role: "Machine Learning Engineer",
        achievements: [
          <>
            Designed and implemented AI-driven solutions optimizing operational efficiency across multiple domains.
          </>,
          <>
            Developed and deployed machine learning models to enhance client decision-making using advanced analytics.
          </>,
          <>
            Collaborated with cross-functional teams to deliver data-driven business tools.
          </>,
        ],
        images: [],
      },
      {
        company: "Branguin",
        timeframe: "Feb 2024 – Dec 2024",
        role: "Business Consultant",
        achievements: [
          <>
            Provided actionable insights to enhance business strategies using market research and data analytics.
          </>,
          <>
            Directed client relations and spearheaded operational improvements, resulting in a 20% productivity increase.
          </>,
        ],
        images: [],
      },
      {
        company: "Skeleton Crew Production",
        timeframe: "May 2019 – Jul 2024",
        role: "Cinematographer",
        achievements: [
          <>
            Led the camera and lighting crew to produce over 20 high-quality short films.
          </>,
          <>
            Integrated modern tools and techniques in filmmaking to create impactful visual stories.
          </>,
        ],
        images: [],
      },
      {
        company: "AajTakCrime News",
        timeframe: "Feb 2020 – Apr 2024",
        role: "Application Developer",
        achievements: [
          <>
            Developed an Android app for news aggregation using Java and Android Studio tailored for the Indian audience.
          </>,
          <>
            Enhanced app engagement through improved UI/UX, increasing user satisfaction by 30%.
          </>,
        ],
        images: [],
      },
      {
        company: "Foxmula - The Smart Way",
        timeframe: "Jan 2022 – Sep 2022",
        role: "Machine Learning Intern",
        achievements: [
          <>
            Completed a Microsoft-authorized internship program focused on Python programming and software development.
          </>,
        ],
        images: [],
      },
      {
        company: "Internshala",
        timeframe: "Jun 2021 – Apr 2022",
        role: "Content Writer Intern",
        achievements: [
          <>
            Authored technical content aligning deliverables with client requirements, resulting in excellent client feedback.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Technische Hochschule Deggendorf",
        description: <>Bachelor of Artificial Intelligence (Oct 2022 – Present)</>,
      },
      {
        name: "G.D Goenka University",
        description: <>Diploma in Computer Science Engineering (Artificial Intelligence) (Sep 2020 – Jun 2022)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Python",
        description: (
          <>Experienced in developing machine learning models and data-driven applications using Python.</>
        ),
        images: [],
      },
      {
        title: "Java",
        description: (
          <>Skilled in building Android applications and backend systems with Java, including projects with Android Studio.</>
        ),
        images: [],
      },
      {
        title: "JavaScript & React",
        description: (
          <>
            Proficient in developing full-stack web applications using JavaScript, React, and Next.js for scalable solutions.
          </>
        ),
        images: [],
      },
      {
        title: "Android Development",
        description: (
          <>
            Expertise in developing Android applications, emphasizing intuitive UI/UX and seamless performance.
          </>
        ),
        images: [],
      },
      {
        title: "Full-Stack Web Development",
        description: (
          <>
            Experience building scalable web applications using modern frameworks like Next.js, Node.js, Bootstrap, and Tailwind CSS.
          </>
        ),
        images: [],
      },
      {
        title: "Machine Learning & AI",
        description: (
          <>
            Deep understanding of machine learning, deep learning, and natural language processing to create innovative solutions.
          </>
        ),
        images: [],
      },
      {
        title: "Data Science & Analytics",
        description: (
          <>
            Strong background in statistics, regression analysis, and data visualization to derive actionable insights.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Insights on ML and Software Development",
  description: `Read about ${person.name}'s journey in machine learning, software development, and data-driven innovation.`,
};

const work = {
  label: "Projects",
  title: "My Projects",
  description: `Machine learning, software development, and innovative projects by ${person.name}`,
};

// const gallery = {
//   label: "Gallery",
//   title: "Photography & Cinematography",
//   description: `A curated collection of photos and visual stories by ${person.name}`,
//   images: [
//     {
//       src: "/images/gallery/img-01.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-02.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-03.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-04.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-05.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-06.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-07.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-08.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-09.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-10.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-11.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-12.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-13.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-14.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//   ],
// };

export { person, social, newsletter, home, about, blog, work };
