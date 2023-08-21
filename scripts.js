document.addEventListener("DOMContentLoaded", function () {
  // Fetch project data from your GitHub repository
  fetch("https://api.github.com/users/omarmoukawim/repos")
    .then((response) => response.json())
    .then((data) => {
      const projectList = document.getElementById("project-list");

      data.forEach(async (repo) => {
        const repoResponse = await fetch(repo.url); // Fetch individual repo details
        const repoData = await repoResponse.json();

        const projectCard = document.createElement("div");
        projectCard.classList.add("col-md-4", "project-card");

        projectCard.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repoData.description || "No description available."}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;

        projectList.appendChild(projectCard);
      });
    })
    .catch((error) => console.error("Error fetching project data:", error));
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


// Populate work experiences in the timeline section
const workExperienceTimeline = document.querySelector("#work-experience .timeline");

workExperiences.forEach(experience => {
    const timelineItem = document.createElement("div");
    timelineItem.classList.add("timeline-item");

    timelineItem.innerHTML = `
        <div class="timeline-item-content">
            <h4>${experience.position}</h4>
            <p class="timeline-item-subtitle">${experience.company} | ${experience.location}</p>
            <p class="timeline-item-date">${experience.date}</p>
            <p>${experience.description}</p>
        </div>
    `;

    workExperienceTimeline.appendChild(timelineItem);
});

