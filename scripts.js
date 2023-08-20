const projectList = document.getElementById('project-list');


const githubUsername = 'omarmoukawim';

// Fetch and display GitHub projects
fetch('https://api.github.com/users/omarmoukawim/repos?sort=created&per_page=6')
    .then(response => response.json())
    .then(data => {
        const projectList = document.getElementById('project-list');

        data.forEach(repo => {
            // Fetch README content
            fetch(`https://api.github.com/repos/omarmoukawim/${repo.name}/readme`)
                .then(response => response.json())
                .then(readmeData => {
                    const card = document.createElement('div');
                    card.classList.add('col-md-4', 'project-card');
                    card.innerHTML = `
                        <h5>${repo.name}</h5>
                        <p>${readmeData.content ? atob(readmeData.content) : 'No description available.'}</p>
                        <a href="${repo.html_url}" target="_blank" class="btn btn-dark">View Repo</a>
                    `;
                    projectList.appendChild(card);
                })
                .catch(error => console.error('Error fetching README:', error));
        });
    })
    .catch(error => console.error('Error fetching projects:', error));


// Smooth scrolling behavior for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
