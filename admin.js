let experiences = [];
let projects = [];

function loadData() {
    const saved = localStorage.getItem('portfolioData');
    if (saved) {
        const data = JSON.parse(saved);
        
        document.getElementById('name').value = data.name || '';
        document.getElementById('title').value = data.title || '';
        document.getElementById('description').value = data.description || '';
        document.getElementById('about1').value = data.about1 || '';
        document.getElementById('about2').value = data.about2 || '';
        document.getElementById('about3').value = data.about3 || '';
        document.getElementById('skillsLanguages').value = data.skillsLanguages || '';
        document.getElementById('skillsWeb').value = data.skillsWeb || '';
        document.getElementById('skillsDatabases').value = data.skillsDatabases || '';
        document.getElementById('skillsAI').value = data.skillsAI || '';
        document.getElementById('skillsOther').value = data.skillsOther || '';
        document.getElementById('email').value = data.email || '';
        document.getElementById('location').value = data.location || '';
        document.getElementById('github').value = data.github || '';
        document.getElementById('linkedin').value = data.linkedin || '';
        document.getElementById('whatsapp').value = data.whatsapp || '';
        
        experiences = data.experiences || [];
        projects = data.projects || [];
        
        renderExperiences();
        renderProjects();
        
        showSuccess();
    } else {
        loadFromHTML();
    }
}

function loadFromHTML() {
    document.getElementById('name').value = 'Hrithik R';
    document.getElementById('title').value = 'Aspiring Software Developer & AI Enthusiast';
    document.getElementById('description').value = 'Passionate about building innovative applications and integrating artificial intelligence into modern workflows. Dedicated to creating scalable solutions that push the boundaries of technology and deliver exceptional user experiences.';
    document.getElementById('about1').value = 'I hold a B.Sc. in Data Science and am currently pursuing a Master of Computer Applications (MCA) from Kristu Jayanti College. My passion lies in developing AI-driven scalable solutions that solve real-world problems.';
    document.getElementById('about2').value = 'During my internship at NIELIT (May 2024 – August 2024), I built a comprehensive House Price Prediction model using supervised learning techniques. This experience enhanced my expertise in data preprocessing, feature engineering, and model evaluation.';
    document.getElementById('about3').value = 'I thrive on challenges that require innovative thinking and technical excellence. My goal is to contribute to cutting-edge projects that leverage artificial intelligence to create meaningful impact in the technology landscape.';
    document.getElementById('skillsLanguages').value = 'Python, Java, C++, R, JavaScript';
    document.getElementById('skillsWeb').value = 'HTML, CSS, Node.js';
    document.getElementById('skillsDatabases').value = 'MongoDB, SQL';
    document.getElementById('skillsAI').value = 'OpenAI, Gemini, DeepSeek, Claude Sonnet, Kiro';
    document.getElementById('skillsOther').value = 'Unity (Basic)';
    document.getElementById('email').value = 'hrithik@example.com';
    document.getElementById('location').value = 'Bangalore, India';
    document.getElementById('github').value = '#';
    document.getElementById('linkedin').value = '#';
    document.getElementById('whatsapp').value = '#';
    
    experiences = [
        {
            date: 'May 2024 – August 2024',
            title: 'AI/ML Intern',
            company: 'NIELIT',
            description: 'Developed a House Price Prediction model using supervised learning algorithms. Conducted extensive data preprocessing, feature engineering, and model evaluation to achieve optimal prediction accuracy.'
        },
        {
            date: '2023 – Present',
            title: 'Freelance Software Developer',
            company: 'Independent',
            description: 'Building custom applications for clients with a focus on AI-assisted workflows. Collaborating closely with clients to deliver tailored solutions that meet their specific business needs and technical requirements.'
        }
    ];
    
    projects = [
        {
            number: '01',
            title: 'House Price Prediction Model',
            description: 'Comprehensive machine learning model for predicting house prices using supervised learning algorithms, extensive data preprocessing, and feature engineering techniques.',
            tech: 'Python, Scikit-learn, Pandas, Regression',
            link: '#'
        },
        {
            number: '02',
            title: 'AI-Powered Task Manager',
            description: 'Intelligent task management application that leverages AI to prioritize tasks, suggest optimal scheduling, and provide productivity insights.',
            tech: 'JavaScript, Node.js, OpenAI, MongoDB',
            link: '#'
        },
        {
            number: '03',
            title: 'Data Visualization Dashboard',
            description: 'Interactive dashboard for visualizing complex datasets with real-time updates, custom charts, and comprehensive analytics capabilities.',
            tech: 'JavaScript, HTML/CSS, D3.js, SQL',
            link: '#'
        }
    ];
    
    renderExperiences();
    renderProjects();
}

function saveData() {
    const data = {
        name: document.getElementById('name').value,
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        about1: document.getElementById('about1').value,
        about2: document.getElementById('about2').value,
        about3: document.getElementById('about3').value,
        skillsLanguages: document.getElementById('skillsLanguages').value,
        skillsWeb: document.getElementById('skillsWeb').value,
        skillsDatabases: document.getElementById('skillsDatabases').value,
        skillsAI: document.getElementById('skillsAI').value,
        skillsOther: document.getElementById('skillsOther').value,
        email: document.getElementById('email').value,
        location: document.getElementById('location').value,
        github: document.getElementById('github').value,
        linkedin: document.getElementById('linkedin').value,
        whatsapp: document.getElementById('whatsapp').value,
        experiences: experiences,
        projects: projects
    };
    
    localStorage.setItem('portfolioData', JSON.stringify(data));
    showSuccess();
}

function showSuccess() {
    const msg = document.getElementById('successMessage');
    msg.style.display = 'block';
    setTimeout(() => {
        msg.style.display = 'none';
    }, 3000);
}

function addExperience() {
    experiences.push({
        date: '',
        title: '',
        company: '',
        description: ''
    });
    renderExperiences();
}

function removeExperience(index) {
    experiences.splice(index, 1);
    renderExperiences();
}

function renderExperiences() {
    const container = document.getElementById('experienceList');
    container.innerHTML = experiences.map((exp, index) => `
        <div class="list-item">
            <div class="form-group">
                <label>Date</label>
                <input type="text" value="${exp.date}" onchange="experiences[${index}].date = this.value" placeholder="May 2024 – August 2024">
            </div>
            <div class="form-group">
                <label>Title</label>
                <input type="text" value="${exp.title}" onchange="experiences[${index}].title = this.value" placeholder="AI/ML Intern">
            </div>
            <div class="form-group">
                <label>Company</label>
                <input type="text" value="${exp.company}" onchange="experiences[${index}].company = this.value" placeholder="NIELIT">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea onchange="experiences[${index}].description = this.value" placeholder="Job description...">${exp.description}</textarea>
            </div>
            <button class="remove-btn" onclick="removeExperience(${index})">Remove</button>
        </div>
    `).join('');
}

function addProject() {
    const nextNumber = String(projects.length + 1).padStart(2, '0');
    projects.push({
        number: nextNumber,
        title: '',
        description: '',
        tech: '',
        link: '#'
    });
    renderProjects();
}

function removeProject(index) {
    projects.splice(index, 1);
    projects.forEach((proj, i) => {
        proj.number = String(i + 1).padStart(2, '0');
    });
    renderProjects();
}

function renderProjects() {
    const container = document.getElementById('projectsList');
    container.innerHTML = projects.map((proj, index) => `
        <div class="list-item">
            <div class="form-group">
                <label>Project Number</label>
                <input type="text" value="${proj.number}" readonly style="background: #f5f5f5;">
            </div>
            <div class="form-group">
                <label>Title</label>
                <input type="text" value="${proj.title}" onchange="projects[${index}].title = this.value" placeholder="Project Title">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea onchange="projects[${index}].description = this.value" placeholder="Project description...">${proj.description}</textarea>
            </div>
            <div class="form-group">
                <label>Technologies (comma separated)</label>
                <input type="text" value="${proj.tech}" onchange="projects[${index}].tech = this.value" placeholder="Python, React, Node.js">
            </div>
            <div class="form-group">
                <label>Link</label>
                <input type="text" value="${proj.link}" onchange="projects[${index}].link = this.value" placeholder="https://...">
            </div>
            <button class="remove-btn" onclick="removeProject(${index})">Remove</button>
        </div>
    `).join('');
}

function exportHTML() {
    const data = {
        name: document.getElementById('name').value,
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        about1: document.getElementById('about1').value,
        about2: document.getElementById('about2').value,
        about3: document.getElementById('about3').value,
        skillsLanguages: document.getElementById('skillsLanguages').value,
        skillsWeb: document.getElementById('skillsWeb').value,
        skillsDatabases: document.getElementById('skillsDatabases').value,
        skillsAI: document.getElementById('skillsAI').value,
        skillsOther: document.getElementById('skillsOther').value,
        email: document.getElementById('email').value,
        location: document.getElementById('location').value,
        github: document.getElementById('github').value,
        linkedin: document.getElementById('linkedin').value,
        whatsapp: document.getElementById('whatsapp').value,
        experiences: experiences,
        projects: projects
    };
    
    const titleParts = data.title.split('&');
    const titleLine1 = titleParts[0].trim();
    const titleLine2 = titleParts.length > 1 ? '& ' + titleParts[1].trim() : '';
    
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="custom-cursor"></div>
    <div class="cursor-follower"></div>
    
    <div class="page-loader">
        <div class="loader-content">
            <div class="loader-text">HR</div>
        </div>
    </div>

    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="logo">HR</a>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#experience" class="nav-link">Experience</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">
                        <span class="line">${data.name}</span>
                    </h1>
                    <h2 class="hero-subtitle">
                        <span class="line">${titleLine1}</span>
                        <span class="line">${titleLine2}</span>
                    </h2>
                    <p class="hero-description">
                        ${data.description}
                    </p>
                    <div class="hero-buttons">
                        <a href="#" class="btn btn-primary">Download CV</a>
                        <a href="#contact" class="btn btn-secondary">Contact Me</a>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="image-wrapper">
                        <img src="profile.jpeg" alt="${data.name}" class="profile-image">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p class="about-paragraph">${data.about1}</p>
                    <p class="about-paragraph">${data.about2}</p>
                    <p class="about-paragraph">${data.about3}</p>
                </div>
                <div class="about-stats">
                    <div class="stat-item">
                        <div class="stat-number">2+</div>
                        <div class="stat-label">Years Experience</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">10+</div>
                        <div class="stat-label">Projects Completed</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">5+</div>
                        <div class="stat-label">Technologies</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="experience" class="experience">
        <div class="container">
            <h2 class="section-title">Experience</h2>
            <div class="timeline">
                ${data.experiences.map(exp => `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${exp.date}</div>
                        <h3 class="timeline-title">${exp.title}</h3>
                        <h4 class="timeline-company">${exp.company}</h4>
                        <p class="timeline-description">${exp.description}</p>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Skills</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3 class="skill-category-title">Languages</h3>
                    <ul class="skill-list">
                        ${data.skillsLanguages.split(',').map(s => `<li class="skill-item">${s.trim()}</li>`).join('')}
                    </ul>
                </div>
                <div class="skill-category">
                    <h3 class="skill-category-title">Web</h3>
                    <ul class="skill-list">
                        ${data.skillsWeb.split(',').map(s => `<li class="skill-item">${s.trim()}</li>`).join('')}
                    </ul>
                </div>
                <div class="skill-category">
                    <h3 class="skill-category-title">Databases</h3>
                    <ul class="skill-list">
                        ${data.skillsDatabases.split(',').map(s => `<li class="skill-item">${s.trim()}</li>`).join('')}
                    </ul>
                </div>
                <div class="skill-category">
                    <h3 class="skill-category-title">AI Platforms</h3>
                    <ul class="skill-list">
                        ${data.skillsAI.split(',').map(s => `<li class="skill-item">${s.trim()}</li>`).join('')}
                    </ul>
                </div>
                <div class="skill-category">
                    <h3 class="skill-category-title">Other</h3>
                    <ul class="skill-list">
                        ${data.skillsOther.split(',').map(s => `<li class="skill-item">${s.trim()}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">Projects</h2>
            <div class="projects-grid">
                ${data.projects.map(proj => `
                <div class="project-card">
                    <div class="project-number">${proj.number}</div>
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-description">${proj.description}</p>
                    <div class="project-tech">
                        ${proj.tech.split(',').map(t => `<span class="tech-tag">${t.trim()}</span>`).join('')}
                    </div>
                    <a href="${proj.link}" class="project-link">View Project →</a>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <p class="contact-text">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.
                    </p>
                    <div class="contact-details">
                        <div class="contact-item">
                            <span class="contact-label">Email</span>
                            <a href="mailto:${data.email}" class="contact-value">${data.email}</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-label">Location</span>
                            <span class="contact-value">${data.location}</span>
                        </div>
                    </div>
                </div>
                <form class="contact-form">
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" rows="6" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-left">
                    <p>&copy; 2024 ${data.name}. All rights reserved.</p>
                </div>
                <div class="footer-social">
                    <a href="${data.github}" class="social-link">GitHub</a>
                    <a href="${data.linkedin}" class="social-link">LinkedIn</a>
                    <a href="${data.whatsapp}" class="social-link">WhatsApp</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    a.click();
    URL.revokeObjectURL(url);
    
    alert('HTML exported! Replace your index.html with the downloaded file, then push to GitHub.');
}

window.onload = loadData;
