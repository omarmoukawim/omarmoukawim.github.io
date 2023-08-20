// Function to fetch data from GitHub API and generate project cards
async function generateProjectCards() {
    const projectList = document.getElementById("project-list");

    try {
        const response = await fetch("https://api.github.com/users/your-username/repos");
        const repos = await response.json();

        repos.forEach(repo => {
            if (!repo.fork) { // Exclude forked repositories
                const projectCard = document.createElement("div");
                projectCard.className = "col-md-6";

                const cardContent = `
                    <div class="project-card">
                        <h5>${repo.name}</h5>
                        <p>${repo.description || "No description available."}</p>
                        <a href="${repo.html_url}" target="_blank">View Project</a>
                    </div>
                `;

                projectCard.innerHTML = cardContent;
                projectList.appendChild(projectCard);
            }
        });
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
    }
}

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
