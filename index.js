const menu = document.querySelector('#menu');

const navLinks = document.querySelector('#nav-links-mobile');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navLinks?.classList.toggle('active');
})

const projectsContainer = document.getElementById('projects-container');

if (projectsContainer && typeof projects !== 'undefined') {
    // Store all project elements
    const allProjectElements = [];

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.setAttribute('data-aos', 'fade-up');
        projectElement.setAttribute('data-aos-delay', project.aosDelay);

        // Add data attributes for filtering
        projectElement.setAttribute('data-technologies', JSON.stringify(project.technologies));

        let imageContent;
        // Link to internal detail page instead of external link directly
        imageContent = `<a href="project-detail.html?id=${project.id}"><img src="${project.image}" alt="${project.title}"></a>`;

        const tagsHtml = project.tags ?
            `<div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>` : '';

        const metaHtml = (project.role || project.year) ?
            `<div class="project-meta">
                ${project.role ? `<span>${project.role}</span>` : ''}
                ${(project.role && project.year) ? '<span class="separator">•</span>' : ''}
                ${project.year ? `<span>${project.year}</span>` : ''}
            </div>` : '';

        projectElement.innerHTML = `
            <div class="project-image">
                ${imageContent}
            </div>
            <div class="project-content">
                <h3 class="project-title"><a href="project-detail.html?id=${project.id}">${project.title}</a></h3>
                ${metaHtml}
                <p class="project-description">${project.description}</p>
                ${tagsHtml}
            </div>
        `;

        projectsContainer.appendChild(projectElement);
        allProjectElements.push(projectElement);
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            allProjectElements.forEach(projectEl => {
                const technologies = JSON.parse(projectEl.getAttribute('data-technologies'));

                if (filter === 'all') {
                    projectEl.style.display = 'flex';
                    setTimeout(() => {
                        projectEl.style.opacity = '1';
                        projectEl.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Check if any technology matches the filter
                    const matches = technologies.some(tech =>
                        tech.toLowerCase().includes(filter.toLowerCase())
                    );

                    if (matches) {
                        projectEl.style.display = 'flex';
                        setTimeout(() => {
                            projectEl.style.opacity = '1';
                            projectEl.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        projectEl.style.opacity = '0';
                        projectEl.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            projectEl.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // Add transition styles to project elements
    allProjectElements.forEach(el => {
        el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
}

// Certificates rendering
const certificatesContainer = document.getElementById('certificates-container');

if (certificatesContainer && typeof certificates !== 'undefined') {
    certificates.forEach((cert, index) => {
        const certElement = document.createElement('div');
        certElement.classList.add('certificate');
        certElement.setAttribute('data-aos', 'fade-up');
        certElement.setAttribute('data-aos-delay', (index + 1) * 100);

        const skillsHtml = cert.skills ?
            `<div class="certificate-skills">
                ${cert.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>` : '';

        const linkHtml = cert.credentialUrl ?
            `<a href="${cert.credentialUrl}" target="_blank" class="cert-link">View Credential →</a>` : '';

        certElement.innerHTML = `
            <div class="certificate-content">
                <div class="certificate-header">
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-issuer">${cert.issuer}</p>
                    <p class="certificate-date">${cert.date}</p>
                </div>
                <p class="certificate-description">${cert.description}</p>
                ${skillsHtml}
                ${linkHtml}
            </div>
        `;

        certificatesContainer.appendChild(certElement);
    });
}