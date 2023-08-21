document.addEventListener("DOMContentLoaded", async function () {
    // Fetch project data from your GitHub repository

fetch("https://api.github.com/users/omarmoukawim/repos")
    .then((response) => response.json())
    .then((data) => {
        const projectList = document.getElementById("project-list");

        data.forEach(async (repo) => {
            const readmeUrl = `https://api.github.com/repos/${repo.full_name}/readme`;
            const readmeResponse = await fetch(readmeUrl); // Fetch README content
            const readmeData = await readmeResponse.json();
            const readmeContent = atob(readmeData.content); // Decode base64 content

            const projectCard = document.createElement("div");
            projectCard.classList.add("col-md-4", "project-card");

            projectCard.innerHTML = `
              <h3>${repo.name}</h3>
              <button class="btn btn-primary toggle-description">Toggle Description</button>
              <p class="timeline-item-description">${readmeContent || "No README content available."}</p>
              <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;

            projectList.appendChild(projectCard);

            const toggleButton = projectCard.querySelector(".toggle-description");
            const description = projectCard.querySelector(".timeline-item-description");

            // Hide the description by default
            description.style.display = "none";

            // Toggle the description visibility on button click
            toggleButton.addEventListener("click", function () {
                if (description.style.display === "none") {
                    description.style.display = "block";
                } else {
                    description.style.display = "none";
                }
            });
        });
    })
    .catch((error) => console.error("Error fetching project data:", error));

    });


// Populate work experience timeline
const workExperiences = [
    {
        date: "1/07/2023 – CURRENT",
        location: "L'Aquila, Italy",
        position: "MASTER THESIS | CYBERSECURITY FOR AUTOMOTIVE",
        company: "LEONARDO",
        description: "My work revolves around ensuring the Cybersecurity of vehicles, encompassing the protection of the entire ecosystem, from onboard systems to remote infrastructures used for management and updates. I am currently collaborating with my university and Leonardo Spa to introduce intrusion analysis into vehicle fleets through the development of a novel technology."
    },
    {
        date: "23/01/2023 – 26/05/2023",
        location: "Göteborg, Sweden",
        position: "INTERN | CORE SYSTEM APPLICATION INTEGRATION",
        company: "VOLVO CARS CORPORATION",
        description: "I worked with further development of test activities to enable test automation and Continuous Integration (CI) for Volvo Cars ECUs. I was engaged with the entire process from design of test infrastructure to analyze test results when the HIL rigs are up and running in the CI environment. We developed as a team tool chains for test automation and test cases to verify the ECU SW in Python, Robot Framework or CAPL. Moreover, I got experience with SW version control (Git/Gerrit), CANoe and got the occasion to further deepen my knowledge in Simulink. As an intern in an Agile development team I not only gained a broad understanding of Volvo Cars vehicle systems and electrical functions but also about SAFe and all the Scrum cerimonies (Sprint Planning, Daily Standups, Sprint retrospectives, Sprint Demos, Story Grooming ecc..)."
    },
    {
        date: "09/04/2021 – 09/07/2021",
        location: "Rome, Italy",
        position: "ICT INTERNSHIP",
        company: "VANTEA SPA",
        description: "Main goals:\nProject and realization of specific Software solutions with languages of scripting related to specific applications\nAnalysis of the characteristics of the application to develop (structure, relations, processes)\nTest of the modules of the application that makes up the solution.\nDocumentation of the development phases and test results\nBusiness or Sector Information and communication"
    }
];

    const workExperienceSection = document.getElementById("work-experience");
    const workExperienceTimeline = workExperienceSection.querySelector(".timeline");

    workExperiences.forEach((experience) => {
        const timelineItem = document.createElement("div");
        timelineItem.classList.add("timeline-item");

        const timelineItemContent = document.createElement("div");
        timelineItemContent.classList.add("timeline-item-content");

        timelineItemContent.innerHTML = `
            <h4>${experience.position}</h4>
            <p class="timeline-item-subtitle">${experience.company} | ${experience.location}</p>
            <p class="timeline-item-date">${experience.date}</p>
            <button class="btn btn-primary toggle-description" style="background-color: #ff8000;">Toggle Description</button>
            <p class="timeline-item-description">${experience.description}</p>
        `;

        timelineItem.appendChild(timelineItemContent);
        workExperienceTimeline.appendChild(timelineItem);
        
        
        const toggleButton = timelineItemContent.querySelector(".toggle-description");
        const description = timelineItemContent.querySelector(".timeline-item-description");
        
        // Hide the description by default
        description.style.display = "none";

        // Toggle the description visibility on button click
        toggleButton.addEventListener("click", function () { 
            
            if (description.style.display === "none") {
                description.style.display = "block";
                toggleButton.style.backgroundColor = "grey";
            } else {
                description.style.display = "none";
                toggleButton.style.backgroundColor = "#ff8000";
            }
        });
    });


// Populate education timeline
    const educationItems = [
        {
            date: "09/2021-12/2023",
            location: "L'Aquila, Italy",
            position: "MASTER’S DEGREE IN INFORMATION AND AUTOMATION ENGINEERING - 'CONTROL SYSTEM ENGINEERING'  CURRICULUM",
            company: "University of L'Aquila",
            description: "The 'Control System Engineering 'curriculum is aimed at developing skills for modeling, identification, analysis, control and optimization of systems, in complex contexts, such as that of robotics or dedicated electronic devices (or 'embedded'), in order to design, manage and supervise automated control systems."
        },
        {
            date: "09/2018-07/2021",
            location: "L'Aquila, Italy",
            position: "BACHELOR’S DEGREE IN INFORMATION ENGINEERING - AUTOMATION CURRICULUM",
            company: "University of L'Aquila",
            description: "The preparation allows you to understand the operating principles of modern electronic (both analog and digital), robotics, control, information processing and telecommunication systems. Following the automation branch gave me the opportunity to learn particularly about Industrial Robotics, Electric Machines, Control Systems and Power Electronics"
        },
        {
            date: "10/2022-11/2022",
            location: "L'Aquila, Italy",
            position: "HIGH SCHOOL SCIENTIFIC DIPLOMA",
            company: "Liceo Scientifico A.Bafile",
            description: "Graduated from Liceo Scientifico in Italy, gaining a strong foundation in mathematics and the natural sciences. Developed critical thinking and analytical skills through a rigorous curriculum, preparing for future academic and professional challenges."
        },
        {
            date: "09/2013-07/2018",
            location: "L'Aquila, Italy",
            position: "HUAWEI SEEDS FOR THE FUTURE",
            company: "Huawei",
            description: "Seeds for the Future is Huawei's flagship global CSR program.\n It aims to develop the best 50 skilled Italian ICT talents and bridge communications between countries and cultures. The program covers exclusive courses in AI, 5G, Cloud Computing and Leadership as well as insights of China's culture."
        },




        // Add more education items here
    ];
    
    const educationSection = document.getElementById("education");
    const educationTimeline = educationSection.querySelector(".timeline");
    
    educationItems.forEach((item) => {
        const timelineItem = document.createElement("div");
        timelineItem.classList.add("timeline-item");
    
        const timelineItemContent = document.createElement("div");
        timelineItemContent.classList.add("timeline-item-content");
    
        timelineItemContent.innerHTML = `
            <h4>${item.position}</h4>
            <p class="timeline-item-subtitle">${item.company} | ${item.location}</p>
            <p class="timeline-item-date">${item.date}</p>
            <button class="btn btn-primary toggle-description" style="background-color: #ff8000;">Toggle Description</button>
            <p class="timeline-item-description">${item.description}</p>
        `;
    
        timelineItem.appendChild(timelineItemContent);
        educationTimeline.appendChild(timelineItem);
    
        const toggleButton = timelineItemContent.querySelector(".toggle-description");
        const description = timelineItemContent.querySelector(".timeline-item-description");
    
        // Hide the description by default
        description.style.display = "none";
    
        // Toggle the description visibility on button click
        toggleButton.addEventListener("click", function () {
            if (description.style.display === "none") {
                description.style.display = "block";
                toggleButton.style.backgroundColor = "grey";
            } else {
                description.style.display = "none";
                toggleButton.style.backgroundColor = "#ff8000";
            }
        });
    });

// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Smooth scrolling for navigation links and timeline anchors
document.querySelectorAll('a.nav-link, a.timeline-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        document.querySelector('html, body').animate({
            scrollTop: target.offsetTop - 100 // Adjust as needed for header height
        }, 1000);
    });
});





  



