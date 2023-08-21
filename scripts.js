document.addEventListener("DOMContentLoaded", function () {
    // Fetch project data from your GitHub repository
    fetch("https://api.github.com/users/omarmoukawim/repos")
        .then((response) => response.json())
        .then((data) => {
            const projectList = document.getElementById("project-list");

            data.forEach((repo) => {
                const projectCard = document.createElement("div");
                projectCard.classList.add("col-md-4", "project-card");

                projectCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available."}</p>
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

