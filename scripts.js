const projectList = document.getElementById('project-list');


const githubUsername = 'omarmoukawim';

// Fetch GitHub repository data
fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => response.json())
    .then(data => {
        const projects = data.filter(repo => !repo.fork);
        projectList.innerHTML = projects.map(project => `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${project.name}</h5>
                        <p class="card-text">${project.description || 'No description available'}</p>
                        <a href="${project.html_url}" target="_blank" class="btn btn-primary">View on GitHub</a>
                    </div>
                </div>
            </div>
        `).join('');
    })
    .catch(error => {
        console.error('Error fetching GitHub data:', error);
    });

// Smooth scrolling behavior for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
