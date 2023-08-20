document.addEventListener("DOMContentLoaded", function() {
    const projectList = document.getElementById("project-list");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const projectsPerPage = 3; // Number of projects per page
    let currentPage = 0; // Current page index

    // Fetch project data from GitHub (Replace with your own API endpoint)
    async function fetchProjects() {
        try {
            const response = await fetch("https://api.github.com/users/your-username/repos");
            const projects = await response.json();
            return projects;
        } catch (error) {
            console.error("Error fetching projects:", error);
            return [];
        }
    }

    // Display projects on the page
    async function displayProjects() {
        const projects = await fetchProjects();

        // Clear existing projects
        projectList.innerHTML = "";

        // Calculate start and end index of current page
        const startIndex = currentPage * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;

        // Loop through projects for the current page
        for (let i = startIndex; i < endIndex && i < projects.length; i++) {
            const project = projects[i];

            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");

            const projectName = document.createElement("h5");
            projectName.textContent = project.name;

            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.description || "No description available.";

            const projectLink = document.createElement("a");
            projectLink.href = project.html_url;
            projectLink.target = "_blank";
            projectLink.textContent = "View Project";

            projectCard.appendChild(projectName);
            projectCard.appendChild(projectDescription);
            projectCard.appendChild(projectLink);

            projectList.appendChild(projectCard);
        }

        // Update slider buttons visibility
        prevBtn.style.display = currentPage === 0 ? "none" : "block";
        nextBtn.style.display = endIndex >= projects.length ? "none" : "block";
    }

    // Handle previous button click
    prevBtn.addEventListener("click", function() {
        if (currentPage > 0) {
            currentPage--;
            displayProjects();
        }
    });

    // Handle next button click
    nextBtn.addEventListener("click", function() {
        currentPage++;
        displayProjects();
    });

    // Initial display
    displayProjects();
});


// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Call the function to generate project cards
    generateProjectCards();
});
