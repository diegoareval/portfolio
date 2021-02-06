const header = {
    name: "Diego Arévalo",
}


const section2title = "About Me"
const about = {
    paragraph: "I'm FullStack Developer, i love to code for different platforms as Web, Mobile, Desktop, etc. Using differents Programming languages as Javascript, Python, Java, Ruby, etc"
}

const skillsBar = [
    {
        name: "Angular",
        value: 50
    },{
        name: "Ruby on Rails",
        value: 65
    },{
        name: "Javascript",
        value: 85
    },{
        name: "React",
        value: 90
    },{
        name: "Node",
        value: 80
    },{
        name: "Mongo",
        value: 70
    },{
        name: "Python",
        value: 75
    },
]
const section3Title = "Past Projects"
const projects = [
    {
        id: "project1",
        name: "Enterprise Landing Page",
        skills: ["HTML, CSS, JS, React"],
        url: "https://github.com/diegoareval"
    },
    {
        id: "project2",
        name: "E-Learning Platform",
        skills: ["Java, Spring Boot, MySql"],
        url: "https://github.com/diegoareval"
    },
    {
        id: "project3",
        name: "Restaurant System Management",
        skills: ["HTML, CSS, JS, Java"],
        url: "https://github.com/diegoareval"
    },
    {
        id: "project4",
        name: "Ecommerce Project",
        skills: ["Node, React, Mongo"],
        url: "https://github.com/diegoareval"
    },
    {
        id: "project5",
        name: "Languages E-Learning Platform",
        skills: ["Ruby on Rails, React Js, PostgreSQL"],
        url: "https://github.com/diegoareval"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "E-commerce   Mobile Practice",
        skills: ["Node, React Native, JS, MongoDB"],
        url: "https://github.com/diegoareval"
    },
]
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous"
const miscellaneous = [
    {
        // Add image in './styles/images.css' in #misc1
        id: "misc1",
        name: "Miscellaneous 1",
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #misc2        
        id: "misc2",
        name: "Miscellaneous 2",
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #misc3
        id: "misc3",
        name: "Miscellaneous 3",
        url: "https://github.com/kaustubhai"
    },
]

const section5Title = "Get in Touch"
const contact = {
    pitch: "Let's Keep in youch, will be a pleasure to help you",
    copyright: "Diego Arevalo",
    contactUrl: 'https://formspree.io/mgepqppo'
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: 'https://github.com/diegoareval',
    facebook: 'https://www.facebook.com/profile.php?id=100013796223607',
    linkedin: 'linkedin.com/in/diego-enrique-arevalo-avelar-31a59a170',
   // resume: 'https://novoresume.com/'
}

export { header, about, skillsBar, projects, miscellaneous, contact, social, section2title, section3Title, section4Title, section5Title }