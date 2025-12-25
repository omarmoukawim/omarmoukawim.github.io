document.addEventListener("DOMContentLoaded", async function () {
    
    // --- 1. Populate Work Experience ---
    const workExperiences = [
        {
            date: "Jun 2025 – Present",
            role: "Cybersecurity Engineer",
            company: "Leonardo SpA",
            location: "Chieti, Italy",
            description: `
                <ul>
                    <li>Coordinating technical development for the new cyber total security platform.</li>
                    <li>Defining technical requirements for an <strong>AI-driven, multi-agent platform</strong> to orchestrate MSSP services.</li>
                    <li>Aligning development lifecycles with project roadmaps and business requirements.</li>
                    <li>Supporting client-facing technical demonstrations and platform integration.</li>
                </ul>
            `
        },
        {
            date: "Mar 2024 – Jun 2025",
            role: "Red Team Engineer",
            company: "Leonardo SpA",
            location: "Chieti, Italy",
            description: `
                <ul>
                    <li>Contributed to Red Team innovation initiatives and adversarial simulations.</li>
                    <li>Developed <strong>AI security services</strong> for LLMs, performing risk assessments and testing.</li>
                    <li>Conducted Vulnerability Assessments (VAS), DAST/SAST analysis, and Web Application Penetration Tests.</li>
                </ul>
            `
        },
        {
            date: "Jan 2023 – May 2023",
            role: "Test Automation Engineer",
            company: "Volvo Cars",
            location: "Gothenburg, Sweden",
            description: `
                <ul>
                    <li>Participant in the Global Talent Program.</li>
                    <li>Designed and implemented test scenarios for critical vehicle systems.</li>
                    <li>Utilized SAFe and Scrum methodologies to support testing workflows.</li>
                </ul>
            `
        }
    ];

    const timelineContainer = document.getElementById("work-timeline");
    if(timelineContainer) {
        workExperiences.forEach(job => {
            const item = document.createElement("div");
            item.className = "timeline-item";
            item.innerHTML = `
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${job.date}</span>
                    <h3 class="job-role">${job.role}</h3>
                    <div class="company-name">${job.company} | ${job.location}</div>
                    <div class="job-desc">${job.description}</div>
                </div>
            `;
            timelineContainer.appendChild(item);
        });
    }

    // --- Helper: Clean Markdown ---
    function stripMarkdown(markdown) {
        if (!markdown) return "";
        let text = markdown;
        text = text.replace(/^#+\s+/gm, ''); 
        text = text.replace(/!\[.*?\]\(.*?\)/g, ''); 
        text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1'); 
        text = text.replace(/[*_]{1,2}/g, ''); 
        text = text.replace(/```[\s\S]*?```/g, ''); 
        text = text.replace(/`/g, ''); 
        return text.trim();
    }

    // --- 2. Fetch GitHub Projects (With Modal) ---
    const projectList = document.getElementById("project-list");
    
    if (projectList) {
        try {
            const response = await fetch("repos.json");
            const repos = response.ok ? await response.json() : [];

            // Clear loading spinner
            projectList.innerHTML = "";
            
            // Render top 6 projects
            repos.slice(0, 6).forEach((repo, index) => {
                const col = document.createElement("div");
                col.className = "col-md-6 col-lg-4";
                
                const rawDesc = repo.readme || repo.description || "No description available.";
                const cleanDesc = stripMarkdown(rawDesc);
                
                // Truncate for the card preview
                const shortDesc = cleanDesc.length > 110 
                    ? cleanDesc.substring(0, 107) + "..." 
                    : cleanDesc;

                col.innerHTML = `
                    <div class="project-card h-100 d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                             <a href="${repo.html_url}" target="_blank" class="project-title h5 text-decoration-none mb-0">${repo.name}</a>
                             <i class="fas fa-code text-secondary"></i>
                        </div>
                        <p class="project-desc text-secondary small flex-grow-1">
                            ${shortDesc}
                        </p>
                        <div class="mt-3">
                             <button class="btn btn-sm btn-outline-primary w-100 read-more-btn" 
                                data-index="${index}">
                                Read Detail
                             </button>
                        </div>
                    </div>
                `;
                projectList.appendChild(col);
            });

            // Modal Event Listener
            projectList.addEventListener('click', function(e) {
                if (e.target.classList.contains('read-more-btn')) {
                    const index = e.target.getAttribute('data-index');
                    const repo = repos[index];
                    const rawDesc = repo.readme || repo.description || "No description available.";
                    const cleanDesc = stripMarkdown(rawDesc);

                    document.getElementById('projectModalLabel').textContent = repo.name;
                    document.getElementById('projectModalBody').textContent = cleanDesc;
                    document.getElementById('projectModalLink').href = repo.html_url;

                    const modalElement = document.getElementById('projectModal');
                    const modal = new bootstrap.Modal(modalElement);
                    modal.show();
                }
            });

        } catch (error) {
            console.error("Error loading projects:", error);
            projectList.innerHTML = `<div class="col-12 text-center text-secondary"><p>Error loading projects.</p></div>`;
        }
    }
});