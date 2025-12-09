document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const container = document.getElementById('project-detail-container');

    if (!projectId || !container || typeof projects === 'undefined') {
        container.innerHTML = '<div class="error-message">Project not found. <a href="index.html">Back to Portfolio</a></div>';
        return;
    }

    const projectIndex = projects.findIndex(p => p.id === projectId);
    const project = projects[projectIndex];

    if (!project) {
        container.innerHTML = '<div class="error-message">Project not found. <a href="index.html">Back to Portfolio</a></div>';
        return;
    }

    document.title = `${project.title} | Mutakin Portfolio`;

    // Navigation logic
    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    const tagsHtml = project.technologies ?
        `<div class="tech-stack-grid">
            ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>` : '';

    const featuresHtml = project.features ?
        `<div class="detail-block">
            <h3>Key Features</h3>
            <ul class="feature-list">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>` : '';

    const linksHtml = `
        <div class="project-links">
            ${project.link ? `<a href="${project.link}" target="_blank" class="btn-primary">View Live Project</a>` : ''}
            ${project.repo ? `<a href="${project.repo}" target="_blank" class="btn-secondary">View Code</a>` : ''}
        </div>
    `;

    const galleryHtml = project.gallery && project.gallery.length > 0 ?
        `<div class="gallery-section">
            <div class="section-header" data-aos="fade-up">
                <h2>Project <span>Gallery</span></h2>
            </div>
            <div class="gallery-carousel-container">
                <div class="carousel-wrapper">
                    <div class="carousel-track" id="track">
                        ${project.gallery.map(img => `
                            <div class="carousel-slide">
                                <img src="${img}" alt="${project.title} screenshot" loading="lazy">
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <button class="carousel-btn prev" id="prevBtn">&#10094;</button>
                <button class="carousel-btn next" id="nextBtn">&#10095;</button>
                
                <div class="carousel-indicators" id="indicators">
                    ${project.gallery.map((_, index) => `
                        <div class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
                    `).join('')}
                </div>
            </div>
        </div>` : '';

    const navigationHtml = `
        <div class="project-navigation">
            ${prevProject ? `<a href="project-detail.html?id=${prevProject.id}" class="nav-btn prev">
                <span class="nav-label">Previous Project</span>
                <span class="nav-title">← ${prevProject.title}</span>
            </a>` : '<div></div>'}
            ${nextProject ? `<a href="project-detail.html?id=${nextProject.id}" class="nav-btn next">
                <span class="nav-label">Next Project</span>
                <span class="nav-title">${nextProject.title} →</span>
            </a>` : '<div></div>'}
        </div>
    `;

    container.innerHTML = `
        <div class="detail-hero" data-aos="fade-up">
            <div class="hero-content">
                <span class="project-type">${project.type || 'Project'}</span>
                <h1 class="project-title">${project.title}</h1>
                
                <div class="project-meta-strip">
                     <span class="meta-item"><i class="icon-role"></i> ${project.role}</span>
                     <span class="meta-separator">•</span>
                     <span class="meta-item">${project.year}</span>
                     <span class="meta-separator">•</span>
                     <span class="meta-item">${project.team || 'Solo'}</span>
                     <span class="meta-separator">•</span>
                     <span class="meta-item">${project.duration || 'N/A'}</span>
                </div>
            </div>
        </div>

        <div class="detail-main-image" data-aos="zoom-in" data-aos-delay="100">
            <img src="${project.image}" alt="${project.title} Main Interface">
        </div>

        <div class="detail-content-grid">
            <div class="main-content" data-aos="fade-up" data-aos-delay="200">
                <div class="detail-block">
                    <h3>Overview</h3>
                    <p>${project.longDescription.replace(/\n\n/g, '</p><p>')}</p>
                </div>

                ${project.challenge ? `
                <div class="detail-block">
                    <h3>The Challenge</h3>
                    <p>${project.challenge}</p>
                </div>` : ''}

                ${project.solution ? `
                <div class="detail-block">
                    <h3>The Solution</h3>
                    <p>${project.solution}</p>
                </div>` : ''}

                ${project.impact ? `
                <div class="detail-block">
                    <h3>Impact & Results</h3>
                    <p>${project.impact}</p>
                </div>` : ''}
                
                ${galleryHtml}
            </div>

            <div class="sidebar-content" data-aos="fade-left" data-aos-delay="300">
                <div class="sidebar-card">
                    <h3>Technologies</h3>
                    ${tagsHtml}
                </div>

                <div class="sidebar-card">
                    ${featuresHtml}
                </div>

                <div class="sidebar-card">
                    <h3>Links</h3>
                    ${linksHtml}
                </div>
            </div>
        </div>

        ${navigationHtml}
    `;

    // Initialize Carousel if gallery exists
    if (project.gallery && project.gallery.length > 0) {
        initCarousel();
    }

    function initCarousel() {
        const track = document.getElementById('track');
        const slides = Array.from(track.children);
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const dots = document.getElementById('indicators').children;

        let currentIndex = 0;
        let autoSlideInterval;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Update dots
            Array.from(dots).forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        function startAutoSlide() {
            stopAutoSlide(); // Clear any existing interval
            autoSlideInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Event Listeners
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoSlide(); // Reset timer on interaction
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoSlide(); // Reset timer on interaction
        });

        Array.from(dots).forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                goToSlide(index);
                startAutoSlide(); // Reset timer on interaction
            });
        });

        // Pause on hover
        const container = document.querySelector('.gallery-carousel-container');
        container.addEventListener('mouseenter', stopAutoSlide);
        container.addEventListener('mouseleave', startAutoSlide);

        // Start auto-slide
        startAutoSlide();
    }
});
