document.addEventListener("DOMContentLoaded", function () {
  // Fetch project data from your GitHub repository
  fetch("https://api.github.com/users/your-username/repos")
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
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
