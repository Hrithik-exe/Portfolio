let experiences = [];
let projects = [];
let achievements = [];
let softSkills = [];
let education = [];
let certifications = [];

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
        achievements = data.achievements || [];
        softSkills = data.softSkills || [];
        education = data.education || [];
        certifications = data.certifications || [];
        
        renderExperiences();
        renderProjects();
        renderAchievements();
        renderSoftSkills();
        renderEducation();
        renderCertifications();
        
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
    
    achievements = [
        {
            title: 'Vice President - AI/ML Society',
            description: 'Leading the AI/ML Society at Kristu Jayanti University, conducting 5+ technical events and workshops to promote AI education and innovation among students.'
        },
        {
            title: 'IT Quiz Winner 2025',
            description: 'Won the college-level IT Quiz competition in 2025, demonstrating strong technical knowledge and problem-solving abilities.'
        },
        {
            title: 'Class Representative 2025',
            description: 'Served as Class Representative, effectively managing class affairs and bridging communication between students and faculty.'
        }
    ];
    
    softSkills = [
        {
            title: 'Leadership',
            description: 'Proven track record as Vice President of AI/ML Society and Class Representative'
        },
        {
            title: 'Punctuality',
            description: 'Consistently meet deadlines and maintain high standards of time management'
        },
        {
            title: 'Dedication',
            description: 'Fully committed to every project and responsibility undertaken'
        },
        {
            title: 'Team Management',
            description: 'Skilled in coordinating teams and facilitating productive group discussions'
        },
        {
            title: 'Communication',
            description: 'Excellent verbal communication and presentation skills'
        },
        {
            title: 'Ethics',
            description: 'Strong moral principles and professional integrity in all endeavors'
        }
    ];
    
    education = [
        {
            date: '2022 – 2025',
            title: 'B.Sc. in Data Science',
            institution: 'Kristu Jayanti University',
            description: 'Focused on statistical analysis, machine learning, and data visualization techniques.'
        },
        {
            date: '2025 – 2027',
            title: 'Master of Computer Applications (MCA)',
            institution: 'Kristu Jayanti University',
            description: 'Specializing in advanced software development, AI/ML, and data science applications.'
        }
    ];
    
    certifications = [
        {
            title: 'Microsoft Certified: Azure Fundamentals',
            issuer: 'Microsoft',
            date: 'September 2025'
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
    renderAchievements();
    renderSoftSkills();
    renderEducation();
    renderCertifications();
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
        projects: projects,
        achievements: achievements,
        softSkills: softSkills,
        education: education,
        certifications: certifications
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

function addAchievement() {
    achievements.push({
        title: '',
        description: ''
    });
    renderAchievements();
}

function removeAchievement(index) {
    achievements.splice(index, 1);
    renderAchievements();
}

function renderAchievements() {
    const container = document.getElementById('achievementsList');
    container.innerHTML = achievements.map((ach, index) => `
        <div class="list-item">
            <div class="form-group">
                <label>Title</label>
                <input type="text" value="${ach.title}" onchange="achievements[${index}].title = this.value" placeholder="Achievement Title">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea onchange="achievements[${index}].description = this.value" placeholder="Achievement description...">${ach.description}</textarea>
            </div>
            <button class="remove-btn" onclick="removeAchievement(${index})">Remove</button>
        </div>
    `).join('');
}

function addSoftSkill() {
    softSkills.push({
        title: '',
        description: ''
    });
    renderSoftSkills();
}

function removeSoftSkill(index) {
    softSkills.splice(index, 1);
    renderSoftSkills();
}

function renderSoftSkills() {
    const container = document.getElementById('softSkillsList');
    container.innerHTML = softSkills.map((skill, index) => `
        <div class="list-item">
            <div class="form-group">
                <label>Skill Name</label>
                <input type="text" value="${skill.title}" onchange="softSkills[${index}].title = this.value" placeholder="Leadership, Communication, etc.">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea onchange="softSkills[${index}].description = this.value" placeholder="Skill description...">${skill.description}</textarea>
            </div>
            <button class="remove-btn" onclick="removeSoftSkill(${index})">Remove</button>
        </div>
    `).join('');
}

function addEducation() {
    education.push({
        date: '',
        title: '',
        institution: '',
        description: ''
    });
    renderEducation();
}

function removeEducation(index) {
    education.splice(index, 1);
    renderEducation();
}

function renderEducation() {
    const container = document.getElementById('educationList');
    container.innerHTML = education.map((edu, index) => `
        <div class="list-item">
            <div class="form-group">
                <label>Date</label>
                <input type="text" value="${edu.date}" onchange="education[${index}].date = this.value" placeholder="2020 – 2023">
            </div>
            <div class="form-group">
                <label>Degree/Title</label>
                <input type="text" value="${edu.title}" onchange="education[${index}].title = this.value" placeholder="B.Sc. in Data Science">
            </div>
            <div class="form-group">
                <label>Institution</label>
                <input type="text" value="${edu.institution}" onchange="education[${index}].institution = this.value" placeholder="University Name">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea onchange="education[${index}].description = this.value" placeholder="Education description...">${edu.description}</textarea>
            </div>
            <button class="remove-btn" onclick="removeEducation(${index})">Remove</button>
        </div>
    `).join('');
}

function addCertification() {
    certifications.push({
        title: '',
        issuer: '',
        date: ''
    });
    renderCertifications();
}

function removeCertification(index) {
    certifications.splice(index, 1);
    renderCertifications();
}

function renderCertifications() {
    const container = document.getElementById('certificationsList');
    container.innerHTML = certifications.map((cert, index) => `
        <div class="list-item">
            <div class="form-group">
                <label>Certification Title</label>
                <input type="text" value="${cert.title}" onchange="certifications[${index}].title = this.value" placeholder="Microsoft Certified: Azure Fundamentals">
            </div>
            <div class="form-group">
                <label>Issuer</label>
                <input type="text" value="${cert.issuer}" onchange="certifications[${index}].issuer = this.value" placeholder="Microsoft">
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="text" value="${cert.date}" onchange="certifications[${index}].date = this.value" placeholder="September 2025">
            </div>
            <button class="remove-btn" onclick="removeCertification(${index})">Remove</button>
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
        projects: projects,
        achievements: achievements,
        softSkills: softSkills,
        education: education,
        certifications: certifications
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
            <a href="#" class="logo">HR<span class="full-name">ithik R</span></a>
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

    <section id="education" class="education">
        <div class="container">
            <h2 class="section-title">Education</h2>
            <div class="timeline">
                ${data.education.map(edu => `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${edu.date}</div>
                        <h3 class="timeline-title">${edu.title}</h3>
                        <h4 class="timeline-company">${edu.institution}</h4>
                        <p class="timeline-description">${edu.description}</p>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <section id="certifications" class="certifications">
        <div class="container">
            <h2 class="section-title">Certifications</h2>
            <div class="certifications-grid">
                ${data.certifications.map(cert => `
                <div class="certification-card">
                    <h3 class="certification-title">${cert.title}</h3>
                    <p class="certification-issuer">${cert.issuer}</p>
                    <p class="certification-date">${cert.date}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <section id="achievements" class="achievements">
        <div class="container">
            <h2 class="section-title">Major Achievements</h2>
            <div class="achievements-grid">
                ${data.achievements.map(ach => `
                <div class="achievement-card">
                    <h3 class="achievement-title">${ach.title}</h3>
                    <p class="achievement-description">${ach.description}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <section id="soft-skills" class="soft-skills">
        <div class="container">
            <h2 class="section-title">Soft Skills</h2>
            <div class="soft-skills-grid">
                ${data.softSkills.map(skill => `
                <div class="soft-skill-item">
                    <h3>${skill.title}</h3>
                    <p>${skill.description}</p>
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
                <form class="contact-form" action="https://formspree.io/f/xanyqbvg" method="POST">
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
