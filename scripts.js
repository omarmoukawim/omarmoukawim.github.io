document.addEventListener("DOMContentLoaded", async function () {
    try {
      const response = await fetch("repos.json");
      const data = await response.json();
      const projectList = document.getElementById("project-list");
  
      data.forEach((repo) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("col-md-4", "project-card");
  
        projectCard.innerHTML = `
          <h3>${repo.name}</h3>
          <button class="btn btn-primary toggle-description">Toggle Description</button>
          <div class="timeline-item-description">${marked.parse(repo.readme) || "No README content available."}</div>
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
    } catch (error) {
      console.error("Error:", error);
    }
  });
  

// Populate work experience timeline
const workExperiences = [
    {
        date: "04/03/2024 – Present",
        location: "Chieti, Italy",
        position: "CYBERSECURITY ENGINEER - RED TEAM | FULL-TIME",
        company: "LEONARDO",
        description: "Consistently conducting detailed Vulnerability Assessments on client systems, our team employs a comprehensive approach that includes implementing DAST, SAST, and WAPTs methodologies. Through these efforts, we fortify our clients' systems against the ever-evolving landscape of cyber threats. Furthermore, our expertise extends to executing thorough WAPT initiatives, where we try to unveil previously undetected vulnerabilities, ultimately enhancing the overall security posture of our clients' projects.",
        logo:"leonardo"
    },
    {
        date: "1/07/2023 – 31/12/2023",
        location: "L'Aquila, Italy",
        position: "CYBERSECURITY FOR AUTOMOTIVE | MASTER THESIS ",
        company: "LEONARDO",
        description: "My work revolves around ensuring the Cybersecurity of vehicles,\
        encompassing the protection of the entire ecosystem, from onboard systems to remote\
        infrastructures used for management and updates. I am currently collaborating with\
        my university and Leonardo Spa to introduce intrusion analysis into vehicle fleets through\
        the development of a novel technology.",
        logo:"leonardo"
    },
    {
        date: "23/01/2023 – 26/05/2023",
        location: "Göteborg, Sweden",
        position: "CORE SYSTEM APPLICATION INTEGRATION | INTERN",
        company: "VOLVO CARS CORPORATION",
        description: "I worked with further development of test activities to enable test automation\
        and Continuous Integration (CI) for Volvo Cars ECUs. I was engaged with the entire process from \
        design of test infrastructure to analyze test results when the HIL rigs are up and running in the CI environment.\
        We developed as a team tool chains for test automation and test cases to verify the ECU SW in Python, Robot Framework or CAPL.\
        Moreover, I got experience with SW version control (Git/Gerrit), CANoe and got the occasion to further deepen my knowledge in \
        Simulink. As an intern in an Agile development team I not only gained a broad understanding of Volvo Cars vehicle systems and electrical\
        functions but also about SAFe and all the Scrum cerimonies (Sprint Planning, Daily Standups, Sprint retrospectives, Sprint Demos, Story Grooming ecc..).",
        logo:"volvo"
    },

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

                <img src="${experience.logo}.png" alt="${experience.company} Logo" class="company-logo">
            
            
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
            grade:"Final grade : 110 cum laude/110",
            description: "The 'Control System Engineering 'curriculum is aimed at developing skills for modeling,\
             identification, analysis, control and optimization of systems, in complex contexts, such as that of robotics \
             or dedicated electronic devices (or 'embedded'), in order to design, manage and supervise automated control systems.\
             <br><br><strong>Thesis title:</strong> A Security Information and Event Management (SIEM) architecture for connected vehicles\
             <br><br><strong>Thesis description:</strong> Developed a robust and scalable SIEM system for cybersecurity in Connected Autonomous Vehicles\
             (CAVs), utilizing Splunk and 5G technology."
        },
        {
            date: "09/2018-07/2021",
            location: "L'Aquila, Italy",
            position: "BACHELOR’S DEGREE IN INFORMATION ENGINEERING - AUTOMATION CURRICULUM",
            company: "University of L'Aquila",
            grade:"Final grade : 110/110",
            description: "The preparation allows you to understand the operating principles of modern electronic (both analog and digital),\
             robotics, control, information processing and telecommunication systems. Following the automation branch gave me the opportunity\
             to learn particularly about Industrial Robotics, Electric Machines, Control Systems and Power Electronics\
             <br><br><strong>Thesis title:</strong> Design and Implementation of a Digital Control System for the Autonomous Cooperation of Multi–UAVs.\
             <br><br><strong>Thesis description:</strong> Developed a leaderless consensus-based sampled-data control strategy for UAV formation flight and simulated it on Simulink."
        },
        {
            date: "10/2022-11/2022",
            location: "L'Aquila, Italy",
            position: "HUAWEI SEEDS FOR THE FUTURE",
            company: "Huawei",
            description: "Seeds for the Future is Huawei's flagship global CSR program.\n It aims to develop the best 50 skilled Italian\
            ICT talents and bridge communications between countries and cultures. The program covers exclusive courses in AI, 5G, Cloud \
            Computing and Leadership as well as insights of China's culture."
        },
        {
            date: "09/2013-07/2018",
            location: "L'Aquila, Italy",
            position: "HIGH SCHOOL SCIENTIFIC DIPLOMA",
            company: "Liceo Scientifico A.Bafile",
            description: "Graduated from Liceo Scientifico in Italy, gaining a strong foundation in mathematics and the natural sciences.\
            Developed critical thinking and analytical skills through a rigorous curriculum, preparing for future academic and professional challenges."
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
        <p class="timeline-item-subtitle">${item.company} | ${item.location} ${item.grade ? `| <strong>${item.grade}</strong>` : ''}</p>
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
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("back-to-top-button");

    // Add an event listener for the button click
    backToTopButton.addEventListener("click", function() {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Detect scrolling to show/hide the button
    window.addEventListener("scroll", function() {
        if (window.scrollY >= 300) {
            // Show the button when scrolled down
            backToTopButton.style.display = "block";
        } else {
            // Hide the button when near the top
            backToTopButton.style.display = "none";
        }
    });
});




  



