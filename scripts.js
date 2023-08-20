// Fetch and display project data from GitHub
const projectList = document.getElementById("project-list");

const fetchProjects = async () => {
    try {
        const response = await fetch("https://api.github.com/users/your-username/repos");
        const data = await response.json();

        const projects = data.filter(repo => !repo.fork);

        projectList.innerHTML = projects
            .map(project => `
                <div class="col-md-4">
                    <div class="project-card">
                        <h3>${project.name}</h3>
                        <p>${project.description || "No description available."}</p>
                        <a href="${project.html_url}" target="_blank">View Project</a>
                    </div>
                </div>
            `)
            .join("");
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
};

fetchProjects();



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
