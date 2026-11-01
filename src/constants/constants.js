import {
    linkedin,
    GitHub_Outline,
    Instagram,
    Mail,
    Code_Image,
    Timeline_Tag,
    ML_DL,
    Challenges,
    Commercial,
} from "../assets";

const navbarLinks = [
    {
        name: "Artifacts",
        id: "artifacts",
    },
    {
        name: "Contact",
        id: "contact",
    },
];

const jobDetails = {
    Collins: {
        year: "Jan 2023 - Present",
        title: "Software Engineer 2",
        name: "Collins Aerospace",
        desc: [
            "I work on a large-scale, AI-driven Testing-as-a-Service platform built with Python and Vue.js, focused on automatically generating exhaustive test scenarios from user-defined requirements. My work centers on a genetic-algorithm–based test generation engine that explores complex input spaces and produces high-coverage test cases at scale.",
            "A key contribution was re-architecting the numeric equation solver within the test generation algorithm using libraries like SymPy and NumPy, reducing end-to-end computation time from ~90 minutes to ~7 minutes while improving numerical accuracy and precision.",
            "I also designed a graphical visualization of interrelated requirements in the Vue.js frontend, helping users better understand data flow and dependencies. This feature has been widely adopted and positively received by multiple teams.",
            "Beyond core features, I extend the engine to support increasingly complex requirements driven from evolving use cases, fix bugs based on user feedback, and help onboard and support other developers working on the platform.",
        ],
        skills: [
            "Python",
            "Vue.js",
            "TypeScript",
            "Quasar",
            "JavaScript",
            "React",
            "Automation",
            "Frontend Development",
            "Backend Development",
        ],
        link: "https://www.collinsaerospace.com/",
    },
    Itential: {
        year: "May 2022 - Aug 2022",
        title: "Software Engineer Co-op",
        name: "Itential",
        desc: [
            "I collaborated with the R&D tools team on data analysis and the development of automation tools to improve internal engineering workflows.",
            "I led the creation of a CI/CD automation tool using Bash and Node.js that leveraged the GitLab API to automatically update over 180 open-source adapters. What previously required months of manual effort from senior engineers was reduced to a few hours of review, significantly accelerating migration timelines.",
            "I also built a Node.js-based documentation automation tool that converted JavaScript and JSON source data into structured Markdown documentation, turning previously undocumented adapters into clearly documented and easily accessible components.",
        ],
        skills: ["Node.js", "Bash", "CI/CD Automation", "Data Analysis"],
        link: "https://www.itential.com/",
    },
    CloudCheckr: {
        year: "May 2020 - Dec 2020",
        title: "Software Engineer Intern",
        name: "CloudCheckr",
        desc: [
            "I worked on the CloudCheckr CMx application as part of the software development team, contributing to core product enhancements using React.",
            "I implemented complex features and developed multiple pages while collaborating closely with designers and engineers to ensure the UI matched project requirements and design specifications.",
            "I also worked on automated testing in Python using Robot Framework to reduce reliance on manual testing, cutting testing effort by roughly 70% and improving overall software quality through earlier issue detection.",
        ],
        skills: ["React", "Python", "Frontend Development", "QA Testing"],
        link: "https://www.flexera.com/products/cloudcheckr",
    },
};

const educationDetails = {
    Masters_2: {
        year: "Jan 2026 - Present",
        college: "Indiana Wesleyan University",
        degree: "Masters of Science in Artificial Intelligence",
        specialization: "Specialization in Data Analytics",
        link: "https://www.indwes.edu/",
    },
    Masters_1: {
        year: "Aug 2018 - Dec 2022",
        college: "Rochester Institute of Technology",
        degree: "Masters of Science in Computer Science",
        gpa: "3.78/4.00",
        specialization: "Specialization in Computer Graphics",
        achievement: "Magna Cum Laude",
        link: "https://www.rit.edu/",
    },
    Bachelors: {
        year: "Aug 2018 - Dec 2022",
        college: "Rochester Institute of Technology",
        degree: "Bachelors of Science in Computer Science",
        gpa: "3.78/4.00",
        specialization: "Minor in Mathematics",
        achievement: "Magna Cum Laude",
        link: "https://www.rit.edu/",
    },
};

const hardSkills = [
    "Python",
    "JavaScript",
    "React",
    "Vue.js",
    "HTML",
    "CSS",
    "C++",
    "Java",
    "Ada",
    "LangGraph",
    "Quasar",
    "Git",
    "Node.js",
];

const softSkills = ["Teamwork", "Communication", "Problem Solving", "Agile"];

const artifacts = [
    // {
    //     name: "CoursePilot (ChatBot)",
    //     definition:
    //         "A chatbot assistant capable of answering questions about Workshop One could help address this problem by providing quick, clear explanations.",
    //     objective:
    //         "The primary objective of the chatbot is to help students understand the requirements for Workshop One in the AIML-500 course. The assistant provides guidance about assignments, grading rubrics, deadlines, and submission instructions. By offering quick answers to common questions, the chatbot helps students stay organised and reduces confusion about assignment expectations.",
    //     process: [
    //         "Goal: We established the primary goal of the project as helping students quickly obtain answers related to their workshop details. Instead of requiring students to open multiple lengthy documents and manually search through them, the objective was to provide a chatbot that allows students to ask questions directly and receive accurate, relevant information instantly.",
    //         "Experimentation: During the development phase, we experimented with multiple available tools to determine the most suitable platform for building the chatbot. These tools included Mizou.com, ChatGPT, and Chatbase.co. Each platform was tested to evaluate its capabilities, ease of use, and effectiveness in handling the project requirements.",
    //         "Tool Selection: After testing the different platforms, we decided to proceed with Chatbase.co. The decision was based on the flexibility it provided in managing content sources and updating prompts, which made it more suitable for our use case compared to the other tools.",
    //         "Prompt Engineering: Once the tool was finalized, we initially used the default prompt provided by the platform to test the chatbot. However, the responses were not sufficiently accurate or aligned with the intended use case. We therefore iteratively refined and engineered the prompt through multiple rounds of testing and adjustments until the chatbot consistently produced accurate and relevant responses.",
    //         "Personality: After ensuring that the chatbot was able to answer questions accurately, we focused on improving the interaction experience by giving the bot a distinct personality. The prompt was updated to make the chatbot respond in a cheerful, playful, and slightly sarcastic tone, making interactions more engaging and preventing the responses from feeling overly robotic.",
    //         "Design: After the chatbot's functionality and personality were finalized, we focused on the visual design. The chatbot interface was designed to reflect the aesthetic and branding of IWU, ensuring that the look and feel of the chatbot aligned with the institution it was built to support.",
    //     ],
    //     tools: "ChatBase.co",
    //     value_proposition:
    //         "Through the development of the IWU Workshop Chatbot, I demonstrated my ability to identify a real user need and build a practical AI-driven solution. By experimenting with different tools, selecting the most suitable platform, and refining prompts, I created a chatbot that provides accurate information in an engaging and user-friendly way. This project highlights my skills in problem solving, prompt engineering, tool evaluation, and designing solutions that simplify complex information for users.",
    //     source_link: "https://www.chatbase.co/YiqLVcp82YHBitv_Kg9Kf/help",
    //     in_page_link: "artifactOne",
    //     image: Code_Image,
    // },
    // {
    //     name: "AI & ML Timeline",
    //     definition:
    //         "This project presents a timeline of Artificial Intelligence, highlighting key milestones and developments from its origins in the 1950s to modern advancements. It shows how AI has evolved into a powerful technology impacting many industries today.",
    //     objective:
    //         "The primary objective of this timeline is to illustrate the evolution of Artificial Intelligence (AI) from the 1950s to the present day. It highlights key milestones, technological breakthroughs, and influential developments that have shaped the field over time. The timeline also reflects important historical phases, including periods of rapid progress, setbacks such as the AI winters, and modern advancements driven by deep learning and large-scale computing. Overall, the project demonstrates how AI has grown from early theoretical concepts into a transformative technology impacting industries such as healthcare, business, and scientific research.",
    //     process: [
    //         "Goal: The primary objective was to illustrate the progression of Artificial Intelligence across decades, from the 1950s to the present, emphasizing key advancements and how the field has evolved over time.",
    //         "Experimentation: Various digital tools, including Lucidchart, Canva, and Prezi, were explored to determine the most effective platform for creating a visually engaging and informative presentation.",
    //         "Tool Selection: After evaluating these options, Prezi was selected due to its user-friendly interface, dynamic templates, and integrated chatbot support, which facilitated efficient content creation and enhanced visual design.",
    //         "Design: Once the template was generated, team members collaboratively contributed by adding researched content for each decade. The information was then consolidated and refined, resulting in a cohesive and comprehensive presentation.",
    //     ],
    //     tools: "Prezi and Powerpoint Presentation",
    //     value_proposition:
    //         "This project demonstrates my ability to research and synthesize complex technical information into a clear, structured, and visually engaging format. It highlights my skills in using modern digital tools to design professional presentations, collaborate effectively within a team, and communicate the evolution and real-world impact of Artificial Intelligence across different time periods.",
    //     source_link: "https://prezi.com/view/yhiQJ3yqHt5MFC2dFr82/",
    //     in_page_link: "artifactTwo",
    //     image: Timeline_Tag,
    //     references: [
    //         "ChatGPT 5.2 (Used for research, image generation and text formatting)",
    //     ],
    // },
    // {
    //     name: "Machine Learning vs Deep Learning",
    //     definition:
    //         "This assignment presents a comparison of machine learning and deep learning by selecting one example of each and applying them to real-world use cases. It explains the differences between the two approaches, including how machine learning depends on manually selected features and how deep learning automatically learns features from raw data. This assignment also justifies why each approach was suitable for its problem and why the alternative approach was less appropriate.",
    //     objective:
    //         "The primary objective of this assignment is to compare machine learning and deep learning by analyzing real-world examples of each, explaining how their differences in feature extraction, data requirements, and complexity make them suitable for different types of problems.",
    //     process: [
    //         "Goal: Compare machine learning and deep learning using real-world examples.",
    //         "Research 1: Key differences between ML and DL, focusing on how each approach works, what kind of data it uses, and what types of problems it solves best.",
    //         "Research 2: Specific examples of each type, such as a traditional machine learning application and a deep learning application, to connect the concepts to real-world use cases.",
    //         "Document: Organized my findings and wrote everything down in a clear response that explained the examples, their suitability, and why the other approach was not the best fit.",
    //     ],
    //     tools: "ChatGPT 5.2 and Academic Writer",
    //     value_proposition:
    //         "Through completing the Machine Learning vs. Deep Learning assignment, I strengthened my ability to distinguish between two major AI approaches and evaluate which one is most appropriate for a specific real-world problem. I learned how traditional machine learning relies on human-selected features and works well for structured problems with smaller datasets, while deep learning can automatically extract patterns from raw data and is better suited for complex tasks such as image recognition or natural language processing. This assignment improved my ability to connect theory to practice, justify technical decisions, and think critically about how AI solutions are designed for different business and industry needs.",
    //     source_link: null,
    //     in_page_link: "artifactThree",
    //     image: ML_DL,
    //     references: [
    //         "ChatGPT 5.2 (Used for research, image generation and text formatting)",
    //     ],
    // },
    // {
    //     name: "Adapting to Challenges",
    //     definition:
    //         "This assignment presents a reflection on a current challenge I am facing in my leadership role and consider how I can seek God's guidance to adjust my approach. It also requires me to identify a situation where I need to take a significant risk or make a tough decision.",
    //     objective:
    //         "The objective of this assignment is for me to evaluate my current leadership challenges, seek God-centered guidance to improve my approach, and develop the courage and strategic thinking needed to make difficult decisions by drawing inspiration from Esther's example.",
    //     process: [
    //         "Goal: Strengthen my leadership by addressing current challenges with greater clarity and confidence, seeking God's wisdom to guide my decisions,",
    //         "Research 1: Reflect on my personal leadership experiences, identify specific challenges I am facing, and evaluate how my current approach can be improved.",
    //         "Research 2: Study Esther's story to understand how she demonstrated courage, wisdom, and strategic decision-making, and then apply those insights to my own situation.",
    //         "Research 3: Practical ways to seek guidance—such as reflection, prayer, and thoughtful planning—to ensure my approach aligns with my values and leadership goals.",
    //         "Document: I will document my reflections, insights, and action steps clearly, organizing them into a structured response that shows my thought process, learning, and how I plan to apply these principles in my leadership.",
    //     ],
    //     tools: "ChatGPT 5.2 and Academic Writer",
    //     value_proposition:
    //         "This assignment provides me with the opportunity to grow as a more thoughtful and intentional leader by helping me reflect on real challenges I am facing and align my decisions with my core values. By integrating faith-based guidance with practical leadership strategies, I can develop greater clarity, courage, and wisdom in my decision-making. Ultimately, this process equips me to lead more effectively, communicate more clearly, and make balanced, strategic choices that positively impact my team and organization.",
    //     source_link: null,
    //     in_page_link: "artifactFour",
    //     image: Challenges,
    //     references: [
    //         "ChatGPT 5.2 (Used for text formatting and image generation)",
    //     ],
    // },
    // {
    //     name: "Commerical Applications of AI: Newsletter",
    //     definition:
    //         "This assignment focused on researching recent commercial AI applications across multiple industries and analyzing how these tools are transforming business processes and decision-making. The project examined real-world AI products in retail, healthcare, and logistics, highlighting how organizations are using AI to improve customer service, automate administrative workflows, and optimize operations.",
    //     objective:
    //         "The objective of this assignment was to evaluate current AI innovations and communicate their business impact in a clear, professional newsletter format. By completing this project, I strengthened my ability to research emerging AI trends, connect technical developments to practical workplace use cases, and present complex AI concepts in a way that is accessible to a non-technical audience.",
    //     process: [
    //         "Goal: Create a newsletter that focused on the recent commercial AI applications across three different industres.",
    //         "Choosing the industies: I decided to focus on three industries where AI is currently having a strong business impact: retail/customer experience, healthcare operations, and logistics/supply chain.",
    //         "Research Recent AI Updates: I researched recent AI product updates and gathered information about specific AI tools, including Home Depot's AI voice agent, Ulta AI, Infinitus Studio, and FarEye PILOT AI Dispatcher.",
    //         "Analyzing Business Impact: I looked at how each AI product could improve business processes, such as customer service, product recommendations, healthcare administration, delivery routing, and decision-making.",
    //         "Document: I organized the information into a newsletter format with a title, introduction, industry overview, individual sections, visual summary, conclusion, and sources.",
    //     ],
    //     tools: "ChatGPT 5.2",
    //     value_proposition:
    //         "This assignment helped me strengthen my ability to connect current AI innovations to real business needs. By researching recent AI applications in retail, healthcare, and logistics, I learned how artificial intelligence is being used to improve customer service, automate administrative tasks, and support faster decision-making. This helped me see AI not only as a technical tool, but also as a practical solution for improving everyday business processes.",
    //     source_link: null,
    //     in_page_link: "artifactFive",
    //     image: Commercial,
    //     references: [
    //         "ChatGPT 5.2 (Used for newsletter creation and text formatting)",
    //         "FarEye. (2026, April 24). FarEye launches agentic AI dispatcher for last-mile logistics. Supply & Demand Chain Executive.",
    //         "Infinitus. (2026, April 23). Introducing Infinitus Studio: Healthcare's no-code AI agent builder.",
    //         "The Home Depot. (2026, April 22). The Home Depot delivers customer store phone support four times faster using Google Cloud's Gemini Enterprise for Customer Experience.",
    //         "TOI Tech Desk. (2026, April 24). FarEye launches PILOT AI dispatcher, claims up to 90% faster logistics workflows. The Times of India.",
    //         "Ulta Beauty. (2026, April 22). Ulta Beauty and Google introduce Gemini-enabled shopping experiences that streamline beauty discovery and purchase.",
    //     ],
    // },
    {
        name: "Machine Learning Algorithm Map",
        definition:
            "An interactive infographic that classifies 9 machine learning algorithms by learning type (supervised or unsupervised), application domain (tabular data, computer vision, NLP, generative AI), real-world use cases and a short explanation of how each one works.",
        in_page_link: "artifactOne",
        image: ML_DL,
    },
];

const projects = [
    {
        name: "Haptic2FA",
        description:
            "Contributed to research with a team of UX researchers to develop an android application using Java, tailored for a two-factor authentication system, with focus on enhancing accessibility for blind and low vision users.",
        skills: [
            "Java",
            "Android Studio",
            "App Development",
            "Something",
            "Nothing",
            "Maybe Something after all",
        ],
        source_code_link:
            "https://github.com/ShivangBokolia/Haptic-Application",
    },
    {
        name: "Rendering volumetric videos in real time",
        description:
            "Engineered the software architecture encompassing data capture, processing and rendering of volumetric point cloud data and synchronized audio into a virtual reality environment in real-time.",
        skills: ["C++", "Unreal Engine"],
        source_code_link: "https://github.com/",
    },
    {
        name: "Ray Tracer",
        description:
            "Implemented a ray tracer in C++, employing the Turner Whitted algorithm to craft high-definition images.",
        skills: ["C++"],
        source_code_link:
            "https://github.com/ShivangBokolia/RayTracer-from-Scratch",
    },
    {
        name: "Rendering volumetric videos in real time",
        description:
            "Engineered the software architecture encompassing data capture, processing and rendering of volumetric point cloud data and synchronized audio into a virtual reality environment in real-time.",
        skills: ["C++", "Unreal Engine"],
        source_code_link: "https://github.com/",
    },
    {
        name: "Rendering volumetric videos in real time",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh..",
        skills: ["C++", "Unreal Engine"],
        source_code_link: "https://github.com/",
    },
];

const connect = [
    {
        name: "LinkedIn",
        desc: "Connect professionally",
        img: linkedin,
        link: "https://www.linkedin.com/in/sb-info",
    },
    {
        name: "GitHub",
        desc: "View my projects",
        img: GitHub_Outline,
        link: "https://github.com/ShivangBokolia",
    },
    {
        name: "Instagram",
        desc: "Follow me on social",
        img: Instagram,
        link: "https://www.instagram.com/shivangboko/",
    },
    {
        name: "Email",
        desc: "sbokolia@gmail.com",
        img: Mail,
        link: "mailto:sbokolia@gmail.com",
    },
];

export {
    navbarLinks,
    jobDetails,
    educationDetails,
    hardSkills,
    softSkills,
    projects,
    connect,
    artifacts,
};
