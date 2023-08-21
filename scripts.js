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
        title: "Master Thesis | Cybersecurity for Automotive",
        company: "Leonardo",
        location: "L'Aquila, Italy",
        date: "July 2023 - Present",
        description: "My work revolves around ensuring the Cybersecurity of vehicles, encompassing the protection...",
    },
    {
        title: "Intern | Core System Application Integration",
        company: "Volvo Cars Corporation",
        location: "Göteborg, Sweden",
        date: "January 2023 - May 2023",
        description: "I worked with further development of test activities to enable test automation...",
    },
    {
        title: "ICT Internship",
        company: "Vantea Spa",
        location: "Rome, Italy",
        date: "April 2021 - July 2021",
        description: "Main goals:\n- Project and realization of specific Software solutions with languages of scripting...",
    },
    // Add more work experiences here
];

const timeline = document.querySelector(".timeline");

workExperiences.forEach((experience) => {
  const timelineItem = document.createElement("div");
  timelineItem.classList.add("timeline-item");

  timelineItem.innerHTML = `
    <div class="timeline-item-content">
        <h4>${experience.title}</h4>
        <p class="timeline-item-subtitle">${experience.company} | ${experience.location}</p>
        <p class="timeline-item-date">${experience.date}</p>
        <p>${experience.description}</p>
    </div>
  `;

  timeline.appendChild(timelineItem);
});
