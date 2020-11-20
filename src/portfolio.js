/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Rushank Jain",
  logo_name: "Rushank570",
  nickname: "Necromancer",
  subTitle:
    "CS Undergrad || Machine learning and Competitive Programming Enthusiast.",
  resumeLink:
    "https://drive.google.com/file/d/1MjPUfJA6cqMFR43AHnxFZnKQWVO8BFod/view?usp=sharing",
  portfolio_repository: "https://github.com/rushu570/",
};

const socialMediaLinks = [
  // github: "https://github.com/rushu570/",
  // linkedin: "https://www.linkedin.com/in/rushank-jain/",
  // gmail: "rushankjain833@gmail.com",
  // facebook: "https://www.facebook.com/people/Rushank-Jain/100008103107950",
  // twitter: "https://twitter.com/rushu570",
  // instagram: "https://www.instagram.com/rushank_jain/"

  {
    name: "Github",
    link: "https://github.com/rushu570/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rushank-jain/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:rushankjain833@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/rushu570/",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/people/Rushank-Jain/100008103107950",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rushank_jain/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning and Web Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision",
        "⚡ Developing highly scalable production ready models for various use cases such as flight delay prediction.",
        "⚡ Experience in working with various deeplearning libraries.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/AP18110010557?hr_r=1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/the_night_king/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/The_Night_King/",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#323754",
      },
      profileLink: "https://leetcode.com/rushu570/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SRM University-AP",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "SRMAP-Logo-2.png",
      alt_name: "srmap",
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning and Machine learning.",
      ],
      website_link: "https://srmap.edu.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Problem Solving (Basic)",
      subtitle: "- HackerRank",
      logo_path: "logo-new-white-green-a5cb16e0ae.svg",
      certificate_link: "https://www.hackerrank.com/certificates/d62a90d7e989",
      alt_name: "HackerRank",
      color_code: "#1F70C199",
    },
    {
      title: "Python Basic",
      subtitle: "- HackerRank",
      logo_path: "logo-new-white-green-a5cb16e0ae.svg",
      certificate_link: "https://www.hackerrank.com/certificates/fcd79b8b227e",
      alt_name: "HackerRank",
      color_code: "#1F70C199",
    },
    {
      title:
        "Open Source Tools for Data Science (IBM Data Science Professional Certificate)",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/RYJUBKY5D6F6",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title:
        "Data Science Methodology (IBM Data Science Professional Certificate)",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9KGFEFRLX9KM",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title:
        "Python for Data Science (IBM Data Science Professional Certificate)",
      subtitle: "- Joseph Santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/3DNFUJ76E5KA",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title:
        "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning (Tensorflow Specialization)",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/E2NAXY9WGBVF",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Python Data Structures (Python for Everybody Specialization)",
      subtitle: "- Charles Severance",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9HRGP2EVGTPT",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/3e4f0dcc-3019-4727-ac40-4820f8726c8c",
      alt_name: "GCP",
      color_code: "#4285F499",
    },

    {
      title: "Google Cloud Essentials",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/3e4f0dcc-3019-4727-ac40-4820f8726c8c",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Getting Started: Create and Manage Cloud Resources(SKILL)",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/3e4f0dcc-3019-4727-ac40-4820f8726c8c",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Baseline: Infrastructure",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/3e4f0dcc-3019-4727-ac40-4820f8726c8c",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/3e4f0dcc-3019-4727-ac40-4820f8726c8c",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Open to New Opportunities.I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Syndicate McCarthy Lab and Board Member",
          company: "Next Tech Lab AP",
          company_url: "https://srmap.edu.in/next-tech-lab%E2%80%A8-2/",
          logo_path: "0.png",
          duration: "July 2018 - PRESENT",
          location: "Vijaywada, Andhra Pradesh",
          description:
            "Member of AI Lab, which focuses on application of Artificial Intelligence using Machine Learning with an in-depth focus on computer vision.Led various projects in the realm of Machine Learning, Image Processing, chatbot development.",
          color: "#0879bf",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "April 2020 - PRESENT",
          location: "Vijaywada, Andhra Pradesh",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised workshop to teach concepts like Decentralized AI to students.",
          color: "#D83B01",
        },
        {
          title: "Program Committee head",
          company: " IEEE STUDENT BRANCH",
          company_url: "https://www.linkedin.com/company/ieee-srmap/mycompany/",
          logo_path: "muffito_logo.png",
          duration: "Oct 2018 - PRESENT",
          location: "Vijaywada, Andhra Pradesh",
          description:
            "• Founding Member of the IEEE student chapter at SRM Unviersity Amaravati. Organized, Addressed and resolved technical, financial and operational concerns for various events.",
          color: "#9b1578",
        },
        {
          title: "Fellowship Recipent",
          company: "IncubateIND",
          company_url: "https://www.incubateind.com/",
          logo_path: "freecopy_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Vijaywada, Andhra Pradesh",
          description:
            "INCIND Technology Fellowship is a unique and exclusive program for the coders, hackers, designers and innovators of tomorrow. As part of this fellowship, you will get an opportunity to develop your skills through working with senior technology leaders and industry experts.",
          color: "#fc1f20",
        },
        {
          title: "Organizer",
          company: "GirlScript Summer of Code",
          company_url: "https://www.gssoc.tech/",
          logo_path: "freecopy_logo.png",
          duration: "Dec 2019 - June 2020",
          location: "Vijaywada, Andhra Pradesh",
          description: "Member of Design Team at GirlScript Summer of Code",
          color: "#fc1f20",
        },
        {
          title: "Executive Board Member",
          company: "Ennovab",
          company_url: "https://ennovab.tech/",
          logo_path: "freecopy_logo.png",
          duration: "Aug 2018 - PRESENT",
          location: "Vijaywada, Andhra Pradesh",
          description:
            "Monitoring and Managing Financial Resources and Organizational Planning. Mentored over 150 students to develop their skills in Entrepreneurship and Startup Management.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Achievement",
      experiences: [
        {
          title: "Winner (2nd Runner-up)",
          company: "HackBout",
          company_url: "https://hackbout.devfolio.co/",
          logo_path: "delhivery_logo.png",
          duration: "March 2020",
          location: "Nitte Meenakshi Institute of Technology, Bangalore.",
          description:
            "Won a prize 25,000. We built 'Nurture' which is a decentralized urban farming platform where individuals could lease empty spaces like backyards or basements to produce food using urban farming methods. Our platform incentivizes urban population into farming by providing them a decentralized market place to sell their fresh produce directly to consumers in their neighborhoods. We are focusing on impact track and our product meets the following UN Sustainable Development Goals:",
          color: "#ee3c26",
        },
        {
          title: "Winner (1st Runner-up)",
          company: " CodeBreak 1.0",
          company_url: "https://codebreak2019.devfolio.co/",
          logo_path: "intel_logo.jpg",
          duration: "Dec 2019",
          location: "MIT ADT University, Pune",
          description:
            "Won a prize of 25,000. We built iONE which provides a Virtual Reality Experience of the MIT ADT Campus. The can user have a enriched experience of the campus without even being there physically. iONE can be used to create simulation for first time visitors which will provide them an easy and hustle free experience of any location like airports, stations, malls and many more. It will act as a virtual guide.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects which predicts and classify data ",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI and CP",
  },
  blogSection: {
    title: "LinkedIn",
    subtitle:
      "If you have a project to discuss then what you are waiting for? ",
    link: "https://www.linkedin.com/in/rushank-jain/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "325 Bank Colony Yadav Nagar Nagpur",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/dir//Yadav+Nagar,+Ekta+Colony,+Nagpur,+Maharashtra+440002/@21.1782973,79.1181262,18.82z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3bd4c6d11d8d8daf:0x31ab182e59b2c3d9!2m2!1d79.1181136!2d21.1783428!3e2",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7382573961",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
