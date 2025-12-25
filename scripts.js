document.addEventListener("DOMContentLoaded", async function () {
    
    // --- 1. Populate Work Experience ---
    // Questi dati sono statici per assicurarsi che il titolo sia corretto
    const workExperiences = [
        {
            date: "Jun 2025 – Present",
            role: "Cybersecurity Engineer",
            company: "Leonardo SpA",
            location: "Chieti, Italy",
            description: `
                <ul>
                    <li>Coordinating technical development within a cross-functional team for a new cyber platform.</li>
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
                    <li>Contributed to Red Team innovation initiatives, focusing on adversarial simulations.</li>
                    <li>Developed <strong>AI security services</strong> for LLMs, performing risk assessments and testing.</li>
                    <li>Conducted Vulnerability Assessments (VAS), DAST/SAST analysis, and Web Application Penetration Tests.</li>
                </ul>
            `
        },
        {
            date: "Jan 2023 – May 2023",
            role: "Core System Application Integration",
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
    
    // Build the timeline HTML
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

    // --- 2. Fetch GitHub Projects (Integration with Actions) ---
    const projectList = document.getElementById("project-list");
    
    if (projectList) {
        try {
            const response = await fetch("repos.json");
            if (!response.ok) throw new Error("repos.json not found");
            
            const repos = await response.json();
            
            // Clear loading spinner
            projectList.innerHTML = "";
            
            // Show first 6 projects
            repos.slice(0, 6).forEach(repo => {
                const col = document.createElement("div");
                col.className = "col-md-6 col-lg-4";
                
                let desc = repo.description || "No description available.";
                if (desc.length > 120) desc = desc.substring(0, 117) + "...";

                col.innerHTML = `
                    <div class="project-card">
                        <a href="${repo.html_url}" target="_blank" class="project-title">
                            ${repo.name} <i class="fas fa-external-link-alt fa-xs ms-1"></i>
                        </a>
                        <p class="project-desc">${desc}</p>
                        <div class="project-meta">
                            <i class="fas fa-code me-1"></i> Public Repository
                        </div>
                    </div>
                `;
                projectList.appendChild(col);
            });
        } catch (error) {
            console.error("Error loading projects:", error);
            projectList.innerHTML = `
                <div class="col-12 text-center text-secondary">
                    <p>Could not load projects (repos.json not found or fetch error).</p>
                </div>
            `;
        }
    }
});