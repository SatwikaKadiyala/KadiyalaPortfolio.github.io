import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutSatwikaKadiyala extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "experience": <Experience/>,
            "skills": <Skills />,
            "projects": <Projects />,
            "certifications": <Certifications />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about satwika" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="satwika' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="experience" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "experience" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="satwika' experience" src="./themes/Yaru/status/experience.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="satwika' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="satwika' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="certifications" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "certifications" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="satwika' certifications" src="./themes/Yaru/status/certificate.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Certifications</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="satwika's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                
            </>
        );
    }

    render() {

        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutSatwikaKadiyala;

export const displayAboutSatwikaKadiyala = () => {
    return <AboutSatwikaKadiyala />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/Picture1.jpg" alt="Satwika Kadiyala Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Satwika Kadiyala</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Aspiring Machine Learning Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Graduate Student</span> currently pursuing Master's in Computer Science. I've completed my 7 months Internship at <u className=' cursor-pointer '> <a href="https://www.airbus.com/en" target={"_blank"}>Airbus</a> </u>, and now I'm looking for full-time roles! ( Hit me up <a className='text-underline' href='mailto:saisatwikakadiyala@gmail.com'><u>@saisatwikakadiyala@gmail.com
                    </u></a> :) )</li>
<li className="mt-3 list-building">
  I enjoy building data-driven applications and intelligent systems that solve real-world problems.
</li>
<li className="mt-3 list-time">
  When I am not working on my next project, I love exploring advancements in Deep Learning, Machine Learning, and Cloud Computing technologies.
</li>
<li className="mt-3 list-star">
  I'm passionate about Artificial Intelligence, Natural Language Processing, and Data Analytics — and hold certifications in AWS, TensorFlow, and Red Hat, reflecting my commitment to continuous learning.
</li>

            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Georgia State University
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2025 - 2027</div>
                    <div className=" text-sm md:text-base">Master's in Computer Science</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 4.0/4.0</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl mt-4 text-left font-bold leading-tight">
                    Koneru Lakshmaiah Education Foundation
                    - KLU
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2020 - 2024</div>
                    <div className=" text-sm md:text-base">Bachelor's in Computer Science and Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 8.9/10</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2018 - 2020</div>
                    <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 9/10</div>
                </li>
            </ul>
        </>
    )
}
function Experience() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-10 md:mt-12 mb-4">
                Experience
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className="w-10/12 mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">
                        Airbus Group India Private Limited
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">Intern | Development Test and Integration Responsible</div>
                    <div className="text-sm text-gray-400 mt-0.5">July 2024 - January 2025 | Bangalore, Karnataka</div>
                    <ul className="list-inside list-disc text-sm md:text-base mt-2 ml-4">
                        <li>Developed unit testing strategies in Java and Spring Boot, ensuring high-quality backend services with robust test
 coverage, improved reliability, and maintainability.</li>
                        <li>Migrated from JUnit 4 to JUnit 5 in a Spring Boot-based microservices architecture, enabling parallel test execution and
 integrating JFrog Artifactory for efficient artifact management in large-scale distributed systems.</li>
                        <li>Gained expertise in SonarQube for static code analysis, identifying vulnerabilities, enforcing best practices, and
 improving code maintainability in scalable systems.</li>
                        <li>Optimized Continuous Integration and Continuous Delivery workflows, reducing build time by 60% and enhancing
 automated testing for early issue detection in cloud-based architectures.</li>
                        <li>Transformed CI/CD pipelines into a declarative format using Groovy scripting, ensuring standardized workflows and
 maintaining detailed documentation of parallel test execution in a fault-tolerant system.</li>
                        <li> Utilized GitHub for version-controlled database scripts, optimizing PostgreSQL and Oracle SQL queries to support
 schema-per-service architecture in a distributed microservices environment.</li>
 <li>Improved Jenkins pipeline reliability by refining database scripts and optimizing automation workflows for seamless cloud
 infrastructure integration and large-scale deployments</li>
                    </ul>
                </li>

                <li className="list-disc mt-8">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">
                        Kognitiv Club, KL University
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">Technical Chair</div>
                    <div className="text-sm text-gray-400 mt-0.5">July 2022 - December 2023 | Vaddeswaram, Andhra Pradesh</div>
                    <ul className="list-inside list-disc text-sm md:text-base mt-2 ml-4">
                    <li> Worked on NLP and Machine Learning projects as part of a university club, building end-to-end pipelines using Scikit-learn and Python to extract insights from unstructured data and support real-world applications.</li>
                    <li>Explored and applied NLP techniques such as text cleaning, tokenization, and classification models to improve information retrieval and content understanding.</li>
                    <li>Designed and maintained scalable Big Data pipelines leveraging Spark, ensuring faster and more efficient processing of datasets while facilitating smooth integration into existing architectures</li>
                    <li>Achieved TensorFlow Developer Certification and mentored 40+ students in ML and Deep Learning concepts.</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Artificial Intelligence, Machine Learning & Data Science!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">

<img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="C++" />
<img className="m-1" src="https://img.shields.io/badge/python-3670A0?logo=python&logoColor=ffdd54&style=for-the-badge" alt="Python" />
<img className="m-1" src="https://img.shields.io/badge/Java-ED8B00?logo=openjdk&logoColor=white&style=for-the-badge" alt="Java" />

<img className="m-1" src="https://img.shields.io/badge/SQL-336791?logo=postgresql&logoColor=white&style=for-the-badge" alt="SQL" />

<img className="m-1" src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge" alt="GitHub" />
<img className="m-1" src="https://img.shields.io/badge/Jenkins-D24939?logo=jenkins&logoColor=white&style=for-the-badge" alt="Jenkins" />
<img className="m-1" src="https://img.shields.io/badge/docker-257bd6?logo=docker&logoColor=white&style=for-the-badge" alt="Docker" />
<img className="m-1" src="https://img.shields.io/badge/Groovy-4298B8?logo=groovy&logoColor=white&style=for-the-badge" alt="Groovy" />

<img className="m-1" src="https://img.shields.io/badge/Project-JFrog_Artifactory_Client_Java-blue" alt="JFrog Artifactory" />
<img className="m-1" src="https://img.shields.io/badge/SonarQube-black?logo=sonarqube&logoColor=4E9BCD&style=badge" alt="SonarQube" />

<a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="HTML" /></a>
                
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                    <img className="m-1" src="https://img.shields.io/badge/TensorFlow-FF3F06?logo=tensorflow&logoColor=white&style=for-the-badge" alt="TensorFlow" />
<img className="m-1" src="https://img.shields.io/badge/scikit--learn-F7931E?logo=scikit-learn&logoColor=white&style=flat-square" alt="Scikit-learn" />
<img className="m-1" src="https://img.shields.io/badge/-Pandas-333333?logo=pandas&style=flat" alt="Pandas" />
<img className="m-1" src="https://img.shields.io/badge/Numpy-777BB4?logo=numpy&logoColor=white&style=for-the-badge" alt="NumPy" />
<img className="m-1" src="https://img.shields.io/badge/-Matplotlib-000000?logo=python&style=flat" alt="Matplotlib" />
<img className="m-1" src="https://img.shields.io/badge/Seaborn-2A3A3A?logo=seaborn&logoColor=white&style=for-the-badge" alt="Seaborn" />
<img className="m-1" src="https://img.shields.io/badge/Apache_Spark-E25A1C?logo=apache-spark&logoColor=white&style=for-the-badge" alt="Apache Spark (PySpark)" />
<img className="m-1" src="https://img.shields.io/badge/NLTK-5A5A5A?logo=nltk&logoColor=white&style=for-the-badge" alt="NLTK" />
<img className="m-1" src="https://img.shields.io/badge/SpaCy-2A7B9B?logo=spacy&logoColor=white&style=for-the-badge" alt="SpaCy" />
<img className="m-1" src="https://img.shields.io/badge/OpenCV-5C3EE8?logo=opencv&logoColor=white&style=for-the-badge" alt="OpenCV" />

                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Spam Email Detection",
            date: "Jan 2025",
            link: "https://github.com/SatwikaKadiyala/Spam-Email-Detection",
            description: [
                "Developed a Machine Learning (ML) model to detect spam emails with high accuracy using Python and TensorFlow.",
            ],
            domains: ["Python", "Tensorflow", "Machine Learning"]
        },
        {
            name: "Customer Churn Prediction",
            date: "Dec 2024",
            link: "https://github.com/SatwikaKadiyala/-Customer-Churn-Prediction",
            description: [
                "Developed a Customer Churn Prediction project, leveraging tools such as Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn to analyze data, identify key churn factors, and build predictive models for improved customer retention strategies.",
            ],
            domains: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"]
        },
        {
            name: "Fraud Detection in Credit Card Transactions",
            date: "Nov 2024",
            link: "https://github.com/SatwikaKadiyala/Fraud-Detection-in-Credit-Card-Transactions",
            description: [
                "Developed a Fraud Detection in Credit Card Transactions project, utilizing tools such as Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn to analyze data, identify fraudulent patterns, and build predictive models for enhanced security measures.",
            ],
            domains: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"]
        },
        {
            name: "Data-Quality-Monitoring",
            date: "Oct 2024",
            link: "https://github.com/SatwikaKadiyala/Data-Quality-Monitoring",
            description: [
                "Developed a real-time ETL pipeline using Python, Kafka, and Spark to process and store stock data in PostgreSQL.",
            ],
            domains: ["Python", "Kafka", "Spark", "PostgreSQL"]
        },
        {
            name: "Super Store Profit",
            date: "June 2024",
            link: "https://github.com/SatwikaKadiyala/Super-Store-Profit-",
            description: [
                "This project analyzes sales and profit data from a Super Store using SQL, PySpark, and Python. The goal is to extract, transform, and load (ETL) data, then generate insights on sales trends, best-selling products, and profit analysis.",
            ],
            domains: ["SQL", "PySpark", "Python"]
        },
        {
            name: "DineIn",
            date: "August 2024",
            link: "https://github.com/SatwikaKadiyala/DineIn",
            description: [
                "Developed a web application enabling real-time restaurant reservations and order management, leveraging AWS Lambda for backend logic and scalable serverless architecture.",
            ],
            domains: ["AWS Lambda", "Django", "Python", "PostgreSQL"]
        },
        {
            name: "Medical Insights_LLM",
            date: "March 2025",
            link: "https://www.kaggle.com/code/saisatwikaaaa/medical-insights-llm",
            description: [
                "Developed an LLM Model to summarize the medical data into simple and understandable text using LangChain and OpenAI.",
            ],
            domains: ["LangChain", "OpenAI", "Python","HuggingFace"]
        },
        
        
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
// Certifications.js
function Certifications() {
    const certification_list = [
        {
            name: "AWS Certified Developer - Associate",
            date: "Jan 2025",
            link: "https://www.credly.com/badges/0d828bfc-e719-4ea2-941f-d5c3207cfe4d",
            description: [
                "Certification earned for expertise in developing and deploying applications on AWS, demonstrating proficiency in AWS services and best practices."
            ],
        },
        {
            name: "AWS Certified Cloud Practitioner",
            date: "Dec 2024",
            link: "https://www.credly.com/badges/2ed2cf62-d69e-420f-a32d-960d3177a9b1",
            description: [
                "Achieved certification for foundational knowledge of AWS cloud services, architecture, security, and billing."
            ],
        },
        {
            name: "TensorFlow Developer Certificate",
            date: "Nov 2024",
            link: "https://www.credly.com/badges/a7d2d5c5-b99e-4904-bab0-b3147f949c57",
            description: [
                "Recognized for proficiency in developing deep learning models using TensorFlow, demonstrating knowledge in neural networks, CNNs, and RNNs."
            ],
        },
        {
            name: "Red Hat Certified Enterprise Application Developer",
            date: "Oct 2024",
            link: "https://www.credly.com/badges/d435f7d1-6228-40b0-b7b0-8c812dc25b8f",
            description: [
                "Certified in developing enterprise-level applications using Red Hat's J2EE and related technologies."
            ],
        },
        {
            name: "Java J2EE Certified",
            date: "June 2024",
            link: "https://www.credly.com/badges/876bfa65-6c72-44a7-bd35-e5a1a94b7b7f",
            description: [
                "Certified in Java J2EE technologies, demonstrating expertise in building scalable and efficient enterprise applications."
            ],
        },
        {
            name: "Juniper Networking Certification",
            date: "March 2024",
            link: "https://www.juniper.net/certification/",
            description: [
                "Certified in Juniper networking technologies, focusing on network design, troubleshooting, and security."
            ],
        },
    ];

    const tag_colors = {
        "aws": "yellow-300",
        "tensorflow": "yellow-600",
        "python": "green-200",
        "java": "red-500",
        "networking": "blue-500",
        "cloud computing": "blue-300",
        "developer": "purple-500",
        "enterprise applications": "green-600",
        "deep learning": "purple-400"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Certifications
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {
                certification_list.map((certification, index) => {
                    const certNameFromLink = certification.link.split('/')
                    const certName = certNameFromLink[certNameFromLink.length - 1]
                    return (
                        <a key={index} href={certification.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{certification.name.toLowerCase()}</div>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{certification.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        certification.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (certification.domains ?
                                            certification.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}




function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Satwika_Kadiyala__Resume.pdf" title="Satwika Kadiyala Resume" frameBorder="0"></iframe>
    )
}