document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const container = document.getElementById('project-detail-container');

    if (!projectId || !container || typeof projects === 'undefined') {
        container.innerHTML = '<p class="error-message">Project not found.</p>';
        return;
    }

    const project = projects.find(p => p.id === projectId);

    if (!project) {
        container.innerHTML = '<p class="error-message">Project not found.</p>';
        return;
    }

    document.title = `${project.title} | Mutakin Portfolio`;

    const tagsHtml = project.technologies ?
        `<div class="detail-tags">
            ${project.technologies.map(tech => `<span class="detail-tag">${tech}</span>`).join('')}
        </div>` : '';

    const featuresHtml = project.features ?
        `<div class="detail-features">
            <h3>Key Features</h3>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>` : '';

    const linkHtml = project.link ?
        `<div class="detail-actions">
            <a href="${project.link}" target="_blank" class="action-btn-filled">View Live Project</a>
        </div>` : '';

    container.innerHTML = `
        <div class="detail-header" data-aos="fade-up">
            <div class="detail-meta">
                <span class="detail-role">${project.role}</span>
                <span class="detail-year">${project.year}</span>
            </div>
            <h1 class="detail-title">${project.title}</h1>
            ${tagsHtml}
        </div>

        <div class="detail-image" data-aos="zoom-in" data-aos-delay="200">
            <img src="${project.image}" alt="${project.title}">
        </div>

        <div class="detail-content" data-aos="fade-up" data-aos-delay="300">
            <div class="detail-description">
                <h3>Overview</h3>
                <p>${project.longDescription.replace(/\n\n/g, '</p><p>')}</p>
            </div>
            
            <div class="detail-sidebar">
                ${featuresHtml}
                ${linkHtml}
            </div>
        </div>
    `;
});
