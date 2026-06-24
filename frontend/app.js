const profile = {
    name: "Makanaka Kaguda",
    shortTitle: "Cloud Computing & IoT Student",
    title: "Cloud Computing & IoT Student",
    headline: "Building practical cloud, IoT, and full-stack projects.",
    supportLine: "I build practical cloud-connected systems using Azure, IoT devices, Python, Java, React, Node.js, and MySQL.",
    homeIntro: "I am a Cloud Computing and Internet of Things student at the University of Zimbabwe with a growing interest in cloud engineering, IoT systems, software development, and practical problem-solving. I enjoy building projects that connect devices, data, and applications, while strengthening my skills in Azure, Python, Java, React, Node.js, and MySQL.",
    intro: "I am a University of Zimbabwe student developing skills in Azure, IoT systems, Python, Java, React, Node.js, and databases.",
    opportunityLine: "I am currently seeking internship opportunities in cloud engineering, IoT platforms, backend development, and related technology roles.",
    location: "Zimbabwe",
    university: "University of Zimbabwe",
    email: "kagudamakanaka@gmail.com",
    emailUrl: "mailto:kagudamakanaka@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/makanaka-kaguda-a9abb6247?trk=contact-info",
    githubUrl: "https://github.com/SunshineXoxo",
    whatsAppPrimary: {
        label: "+263 78 754 6335",
        url: "https://wa.me/263787546335",
    },
    whatsAppSecondary: {
        label: "+263 71 038 4113",
        url: "https://wa.me/263710384113",
    },
    cvUrl: "/Makanaka-Kaguda-CV.pdf",
    profileImageUrl: "/images/WhatsApp Image 2026-04-22 at 14.11.55.jpeg",
    heroImageUrl: "/images/GLP_0732 (1).jpg.jpeg",
    aboutImageUrl: "/images/about-portrait.jpeg",
    galleryImages: [
        "/images/GLP_0745.jpg.jpeg",
        "/images/GLP_0793.jpg.jpeg",
        "/images/GLP_0722.jpg.jpeg",
    ],
};

const routes = [
    { id: "home", path: "/", label: "Home", icon: "home" },
    { id: "about", path: "/about", label: "About", icon: "user" },
    { id: "projects", path: "/projects", label: "Projects", icon: "folder" },
    { id: "cloudJourney", path: "/cloud-journey", label: "Cloud Journey", icon: "cloud" },
    { id: "contact", path: "/contact", label: "Contact", icon: "mail" },
];

const featuredProject = {
    title: "Azure IoT Smart Agriculture Monitoring System",
    status: "In progress",
    statusDetail: "Portfolio build",
    description: "A cloud-connected agriculture monitoring project for sensor readings, storage, dashboards, and alerts.",
    problem: "Farmers and agricultural workers need a way to monitor environmental conditions such as soil moisture, temperature, humidity, and water levels remotely.",
    solution: "This project simulates IoT sensor data and sends it to Microsoft Azure for processing, storage, monitoring, dashboard display, and alerting.",
    architecture: [
        { label: "Python Sensor Simulator", icon: "terminal" },
        { label: "Azure IoT Hub", icon: "network" },
        { label: "Azure Functions", icon: "bolt" },
        { label: "Cloud Database", icon: "database" },
        { label: "Web Dashboard", icon: "dashboard" },
        { label: "Alerts", icon: "bell" },
    ],
    stack: ["Azure IoT Hub", "Azure Functions", "Python", "Cloud database", "Azure Monitor"],
    skills: [
        "Azure IoT Hub",
        "Serverless computing",
        "Cloud database storage",
        "IoT telemetry",
        "Python scripting",
        "Backend API development",
        "Monitoring and alerting",
        "Cloud architecture documentation",
    ],
    repoUrl: "https://github.com/SunshineXoxo",
};

const skillGroups = [
    {
        title: "Cloud & Azure",
        icon: "cloud",
        items: [
            "Microsoft Azure",
            "Azure IoT Hub",
            "Azure Functions",
            "Azure App Service",
            "Azure Monitor",
            "Cloud databases",
            "Cloud deployment",
        ],
    },
    {
        title: "Programming",
        icon: "code",
        items: [
            "Java",
            "Python",
            "JavaScript",
            "React",
            "Node.js",
            "REST APIs",
            "Backend development",
            "Object-oriented programming",
        ],
    },
    {
        title: "IoT & Systems",
        icon: "radio",
        items: [
            "Sensor data",
            "Telemetry",
            "Device-to-cloud communication",
            "MQTT basics",
            "Data monitoring",
            "Alerts",
        ],
    },
    {
        title: "Databases & Tools",
        icon: "wrench",
        items: [
            "MySQL",
            "SQL",
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "Docker basics",
        ],
    },
];

const learningPath = [
    {
        title: "Azure Fundamentals",
        description: "Learning core Azure services, pricing, regions, identities, and the shared responsibility model.",
        icon: "book",
    },
    {
        title: "IoT Cloud Architecture",
        description: "Understanding IoT Hub, device connectivity, telemetry, MQTT basics, and device-to-cloud patterns.",
        icon: "radio",
    },
    {
        title: "Serverless Computing",
        description: "Building event-driven workflows using Azure Functions and cloud triggers.",
        icon: "bolt",
    },
    {
        title: "Cloud Databases",
        description: "Working with Azure SQL and Cosmos DB for scalable data storage.",
        icon: "database",
    },
    {
        title: "Deployment & DevOps",
        description: "Deploying apps using Azure App Service, Docker basics, and GitHub workflows.",
        icon: "rocket",
    },
    {
        title: "Monitoring & Security",
        description: "Using Azure Monitor, alerts, IAM basics, and cloud security best practices.",
        icon: "shield",
    },
];

const focusAreas = [
    { title: "Microsoft Azure", icon: "azure" },
    { title: "Cloud engineering fundamentals", icon: "cloud" },
    { title: "IoT cloud platforms", icon: "radio" },
    { title: "Serverless computing", icon: "bolt" },
    { title: "Cloud databases", icon: "database" },
    { title: "Monitoring and alerting", icon: "bell" },
    { title: "Cloud deployment", icon: "rocket" },
];

const buildingItems = [
    {
        title: "Azure IoT Smart Agriculture Monitoring System",
        description: "An end-to-end Azure IoT project using IoT Hub, Azure Functions, a cloud database, dashboarding, and alerts.",
        icon: "leaf",
    },
    {
        title: "Java/Python backend projects",
        description: "REST APIs, data processing, device simulators, and automation tools that support cloud application development.",
        icon: "code",
    },
    {
        title: "Cloud-hosted applications",
        description: "Serverless and scalable applications designed to be deployed, monitored, and improved on Microsoft Azure.",
        icon: "cloud",
    },
];

const roleInterests = [
    "Cloud Engineering Intern",
    "Azure Cloud Intern",
    "Cloud Support Intern",
    "IoT Cloud Intern",
    "Backend Developer Intern with cloud exposure",
    "Junior DevOps / Cloud Infrastructure Intern",
];

const foundationProjects = [
    {
        title: "Employee Management System API",
        language: "Java",
        status: "Backend project",
        description: "A Java backend project for managing employee records, business logic, and database-backed application workflows.",
        cloudAngle: "Future improvement: deploy to Azure App Service with Azure SQL Database.",
        stack: ["Java", "REST API", "MySQL", "Backend architecture"],
        repoUrl: "https://github.com/SunshineXoxo",
    },
    {
        title: "Portfolio Contact Backend",
        language: "Java",
        status: "Live project",
        description: "A portfolio site with a Java HTTP server, contact form handling, and a clean frontend presentation.",
        cloudAngle: "Future improvement: host the frontend and API through Azure App Service with cloud-based message storage.",
        stack: ["Java", "HTML", "CSS", "JavaScript"],
        repoUrl: "https://github.com/SunshineXoxo",
    },
    {
        title: "Python Automation Practice",
        language: "Python",
        status: "Learning lab",
        description: "Python scripting practice for automation, data processing, and repeatable cloud engineering tasks.",
        cloudAngle: "Future improvement: run automation tasks as Azure Functions or scheduled cloud jobs.",
        stack: ["Python", "Automation", "Data processing", "Cloud tasks"],
        repoUrl: "https://github.com/SunshineXoxo",
    },
];

const contactTopics = [
    "Cloud Engineering Internship",
    "Azure Cloud Support",
    "IoT Cloud Platforms",
    "Backend Development",
    "Project Collaboration",
];

const appRoot = document.getElementById("root");
let submitState = { status: "idle", message: "", mailtoUrl: "" };
let appTheme = getInitialTheme();

applyTheme(appTheme);
renderApp();
window.addEventListener("popstate", renderApp);

function renderApp() {
    const pageId = getCurrentPageId();

    appRoot.innerHTML = `
        <div class="site-shell">
            ${renderNavbar(pageId)}
            <main id="main-content" class="page-frame">
                ${renderPage(pageId)}
            </main>
            ${renderFooter()}
        </div>
    `;

    bindNavigation();
    bindThemeToggle();
    bindContactForm();
    bindDisabledButtons();
}

function getCurrentPageId() {
    const normalizedPath = window.location.pathname.replace(/\/$/, "") || "/";
    const route = routes.find((item) => item.path === normalizedPath);
    return route ? route.id : "home";
}

function renderPage(pageId) {
    if (pageId === "about") {
        return renderAboutPage();
    }

    if (pageId === "projects") {
        return renderProjectsPage();
    }

    if (pageId === "cloudJourney") {
        return renderCloudJourneyPage();
    }

    if (pageId === "contact") {
        return renderContactPage();
    }

    return renderHomePage();
}

function renderNavbar(activePageId) {
    return `
        <header class="site-header">
            <a class="brand" href="/" data-route>
                <span class="brand-mark" aria-hidden="true">${icon("cloudCircuit")}</span>
                <span class="brand-copy">
                    <strong>${escapeHtml(profile.name)}</strong>
                    <span>${escapeHtml(profile.shortTitle)}</span>
                </span>
            </a>
            <button class="menu-button" type="button" aria-label="Main navigation">
                ${icon("menu")}
            </button>
            <nav class="topnav" aria-label="Main navigation">
                ${routes.map((route) => `
                    <a class="topnav-link ${route.id === activePageId ? "is-active" : ""}" href="${route.path}" data-route>
                        ${escapeHtml(route.label)}
                    </a>
                `).join("")}
                <button class="theme-toggle" id="theme-toggle" type="button" title="Switch theme" aria-label="Switch between dark and light theme">
                    ${icon(appTheme === "dark" ? "moon" : "sun")}
                    <span>${appTheme === "dark" ? "Dark" : "Light"}</span>
                </button>
            </nav>
        </header>
    `;
}

function renderHomePage() {
    return `
        <section class="hero-section">
            <div class="hero-copy">
                <p class="eyebrow">${escapeHtml(profile.shortTitle)}</p>
                <h1>${escapeHtml(profile.name)}</h1>
                <p class="hero-title">${escapeHtml(profile.headline)}</p>
                <p class="hero-lede">${escapeHtml(profile.homeIntro)}</p>
                <div class="action-row">
                    ${routeButton("View Projects", "/projects", "folder", "primary")}
                    ${downloadButton("Download CV", profile.cvUrl, "download")}
                </div>
            </div>
            <div class="hero-media">
                ${renderHeroPortrait()}
            </div>
        </section>

        <section class="content-band">
            <div class="section-heading">
                <span class="section-kicker">Featured Projects</span>
                <h2>Practical projects in cloud, IoT, and backend development.</h2>
            </div>
            <div class="foundation-grid">
                ${[featuredProject, ...foundationProjects].slice(0, 3).map(renderSimpleProjectCard).join("")}
            </div>
        </section>

        <section class="content-band">
            <div class="section-heading">
                <span class="section-kicker">Skills</span>
                <h2>Technology areas I am building with.</h2>
            </div>
            ${renderSkillSnapshot()}
        </section>

        <section class="section-grid two-columns align-start">
            ${renderLearningPathCompact()}
            <article class="panel">
                <span class="section-kicker">Internship Focus</span>
                <h2>Looking for practical cloud and software roles.</h2>
                <p>${escapeHtml(profile.opportunityLine)}</p>
                <div class="role-grid">
                    ${roleInterests.slice(0, 4).map((role) => `<span>${escapeHtml(role)}</span>`).join("")}
                </div>
            </article>
        </section>

        <section class="content-band split-band about-preview">
            <div>
                <span class="section-kicker">About</span>
                <h2>A serious cloud and IoT student building real project experience.</h2>
                <p>${escapeHtml(profile.intro)}</p>
                <p>I am focusing on projects that connect software, devices, data, and cloud platforms in practical ways.</p>
                ${routeButton("Read About Me", "/about", "arrowRight", "secondary")}
            </div>
            <div class="photo-strip" aria-label="Portfolio photos">
                ${[profile.aboutImageUrl, ...profile.galleryImages.slice(0, 2)].map((imageUrl, index) => `
                    <img src="${escapeAttribute(imageUrl)}" alt="${escapeAttribute(profile.name + " portfolio photo " + (index + 1))}">
                `).join("")}
            </div>
        </section>
    `;
}

function renderFeaturedProjectPreview() {
    return `
        <article class="panel featured-preview">
            <div class="panel-title-row">
                <span class="section-kicker">${icon("star")} Featured Project</span>
                ${statusPill(featuredProject.status)}
            </div>
            <h2>${escapeHtml(featuredProject.title)}</h2>
            <p>${escapeHtml(featuredProject.description)}</p>
            ${renderArchitectureFlow(featuredProject.architecture)}
            <div class="pill-row">
                ${featuredProject.stack.slice(0, 5).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
            <div class="action-row compact">
                ${routeButton("View Case Study", "/projects", "folder", "primary")}
                ${externalButton("GitHub Repo", featuredProject.repoUrl, "github")}
            </div>
        </article>
    `;
}

function renderLearningPathCompact() {
    return `
        <article class="panel learning-panel">
            <span class="section-kicker">${icon("map")} Current Cloud Learning Path</span>
            <ol class="learning-list">
                ${learningPath.map((item, index) => `
                    <li>
                        <span class="step-number">${index + 1}</span>
                        <div>
                            <strong>${escapeHtml(item.title)}</strong>
                            <p>${escapeHtml(item.description)}</p>
                        </div>
                    </li>
                `).join("")}
            </ol>
        </article>
    `;
}

function renderAboutPage() {
    return `
        <section class="page-hero about-hero">
            <div>
                <span class="section-kicker">${icon("user")} About Me</span>
                <h1>Cloud Computing & IoT Student focused on <span>Azure Cloud Engineering</span></h1>
                <p>
                    I am a Cloud Computing and IoT student at the University of Zimbabwe with a strong interest in Microsoft Azure and cloud engineering. My degree introduced me to the connection between internet-connected devices, cloud platforms, data processing, and scalable systems.
                </p>
                <p>
                    I am now focusing on building practical Azure-based projects that help me understand how real cloud solutions are designed, deployed, monitored, and maintained.
                </p>
            </div>
            <figure class="about-photo">
                <img src="${escapeAttribute(profile.aboutImageUrl)}" alt="${escapeAttribute(profile.name + " portrait")}">
            </figure>
        </section>

        <section class="section-grid two-columns align-start">
            <article class="panel text-panel">
                <h2>My Foundation</h2>
                <p>
                    I have experience with Java and Python, which gives me a strong programming foundation for cloud development. I use these languages to build backend services, APIs, device simulators, automation scripts, and cloud-connected applications.
                </p>
                <p>
                    My current goal is to grow into a Cloud Engineer role, especially in areas such as Azure infrastructure, IoT platforms, backend cloud services, cloud support, and serverless application development.
                </p>
                <div class="identity-facts">
                    <span>${icon("graduation")} Student: Cloud Computing & IoT, University of Zimbabwe</span>
                    <span>${icon("code")} Languages: Java, Python</span>
                    <span>${icon("cloud")} Focus: Azure Cloud Engineering</span>
                </div>
            </article>
            <article class="panel journey-panel">
                <span class="section-kicker">${icon("map")} My Journey</span>
                <div class="vertical-timeline">
                    <div>
                        <span>${icon("graduation")}</span>
                        <strong>Degree</strong>
                        <p>Studying Cloud Computing and IoT at the University of Zimbabwe.</p>
                    </div>
                    <div>
                        <span>${icon("azure")}</span>
                        <strong>Learning Azure</strong>
                        <p>Building skills in cloud services, serverless, IoT, databases, and monitoring.</p>
                    </div>
                    <div>
                        <span>${icon("briefcase")}</span>
                        <strong>Goal</strong>
                        <p>Secure an internship and keep growing toward a Cloud Engineer role.</p>
                    </div>
                </div>
            </article>
        </section>

        <section class="content-band">
            <div class="section-heading">
                <span class="section-kicker">${icon("target")} What I Am Focused On</span>
                <h2>Learning the services and habits behind useful cloud systems.</h2>
            </div>
            <div class="focus-grid">
                ${focusAreas.map((item) => `
                    <article class="focus-card">
                        <span aria-hidden="true">${icon(item.icon)}</span>
                        <strong>${escapeHtml(item.title)}</strong>
                    </article>
                `).join("")}
            </div>
        </section>

        <section class="section-grid two-columns align-start">
            <article class="panel">
                <span class="section-kicker">${icon("terminal")} What I Am Building</span>
                <div class="stacked-list">
                    ${buildingItems.map((item) => `
                        <div class="stacked-item">
                            <span aria-hidden="true">${icon(item.icon)}</span>
                            <div>
                                <strong>${escapeHtml(item.title)}</strong>
                                <p>${escapeHtml(item.description)}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </article>
            <article class="panel">
                <span class="section-kicker">${icon("briefcase")} Roles I Am Interested In</span>
                <div class="role-grid">
                    ${roleInterests.map((role) => `
                        <span>${escapeHtml(role)}</span>
                    `).join("")}
                </div>
            </article>
        </section>

        <section class="cta-band">
            <div>
                <span class="section-kicker">Current Direction</span>
                <h2>Building practical cloud, IoT, and full-stack project experience.</h2>
            </div>
            <div class="action-row compact">
                ${routeButton("View Projects", "/projects", "folder", "primary")}
                ${downloadButton("Download CV", profile.cvUrl, "download")}
            </div>
        </section>
    `;
}

function renderProjectsPage() {
    return `
        <section class="page-hero projects-hero">
            <div>
                <span class="section-kicker">Projects</span>
                <h1>Practical work that supports my cloud and IoT learning journey.</h1>
                <p>Each project is focused on useful skills: backend logic, databases, cloud-connected systems, automation, and clean presentation.</p>
            </div>
        </section>

        <section class="content-band">
            <div class="section-heading">
                <span class="section-kicker">Selected Work</span>
                <h2>Simple project cards with tools and next steps.</h2>
            </div>
            <div class="foundation-grid">
                ${[featuredProject, ...foundationProjects].map(renderSimpleProjectCard).join("")}
            </div>
        </section>

        <section class="notice-band">
            <p>More cloud experiments, case studies, and deployment notes will be added as these projects progress.</p>
        </section>
    `;
}

function renderSimpleProjectCard(project) {
    return `
        <article class="foundation-card project-card">
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.description)}</p>
            <div class="pill-row">
                ${project.stack.slice(0, 5).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
            <div class="action-row compact">
                ${externalButton("View GitHub", project.repoUrl, "github")}
            </div>
        </article>
    `;
}

function renderFoundationProject(project) {
    return `
        <article class="foundation-card">
            <div class="panel-title-row">
                <span class="project-language">${escapeHtml(project.language)}</span>
                <span class="project-status">${escapeHtml(project.status)}</span>
            </div>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.description)}</p>
            <div class="cloud-angle">
                <strong>${icon("cloud")} Cloud Angle</strong>
                <span>${escapeHtml(project.cloudAngle)}</span>
            </div>
            <div class="pill-row">
                ${project.stack.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
            <div class="action-row compact">
                ${routeButton("View Case Study", "/projects", "folder", "secondary")}
                ${externalButton("GitHub", project.repoUrl, "github")}
            </div>
        </article>
    `;
}

function renderCloudJourneyPage() {
    return `
        <section class="page-hero journey-hero">
            <div>
                <span class="section-kicker">${icon("cloud")} Cloud Journey</span>
                <h1>Learning Microsoft Azure and growing toward a cloud engineering career.</h1>
                <p>
                    I am interested in cloud engineering because it combines infrastructure, networking, software, automation, security, and real-world problem solving.
                </p>
                <p>
                    Since my degree focuses on Cloud Computing and IoT, I am especially interested in how cloud platforms support connected devices, data processing, monitoring, and scalable applications.
                </p>
            </div>
            ${renderJourneyGraphic()}
        </section>

        <section class="section-grid two-columns align-start">
            <article class="panel">
                <span class="section-kicker">${icon("target")} Current Focus</span>
                <div class="focus-grid compact-grid">
                    ${focusAreas.map((item) => `
                        <article class="focus-card">
                            <span aria-hidden="true">${icon(item.icon)}</span>
                            <strong>${escapeHtml(item.title)}</strong>
                        </article>
                    `).join("")}
                </div>
            </article>
            <article class="panel certification-panel">
                <span class="section-kicker">${icon("award")} Certification Goal</span>
                <div class="cert-card">
                    <span aria-hidden="true">${icon("award")}</span>
                    <div>
                        <h2>Microsoft Azure Fundamentals (AZ-900)</h2>
                        <strong>Preparing</strong>
                        <p>Building a strong foundation in cloud concepts, Azure services, security, privacy, compliance, and pricing.</p>
                    </div>
                </div>
                <div class="current-project-mini">
                    <span aria-hidden="true">${icon("leaf")}</span>
                    <div>
                        <strong>${escapeHtml(featuredProject.title)}</strong>
                        <p>Goal: build and document a complete Azure IoT portfolio project demonstrating cloud engineering skills.</p>
                    </div>
                </div>
            </article>
        </section>

        <section class="content-band">
            <div class="section-heading">
                <span class="section-kicker">${icon("map")} Learning Path</span>
                <h2>From foundations to deployment and monitoring.</h2>
            </div>
            <div class="path-timeline">
                ${learningPath.map((item, index) => `
                    <article class="path-step">
                        <span class="path-number">${index + 1}</span>
                        <span class="path-icon" aria-hidden="true">${icon(item.icon)}</span>
                        <h3>${escapeHtml(item.title)}</h3>
                        <p>${escapeHtml(item.description)}</p>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}

function renderContactPage() {
    return `
        <section class="page-hero contact-hero">
            <div>
                <span class="section-kicker">Contact</span>
                <h1>Let's connect about internships, projects, or collaboration.</h1>
                <p>${escapeHtml(profile.opportunityLine)}</p>
            </div>
        </section>

        <section class="section-grid two-columns align-start">
            <form class="panel contact-form" id="contact-form">
                <span class="section-kicker">Start an Email</span>
                <div class="form-grid">
                    ${inputField("Name", "name", "text", "Enter your name", true)}
                    ${inputField("Email", "email", "email", "Enter your email", true)}
                    <label class="form-field full-span">
                        <span>Subject</span>
                        <select name="subject" required>
                            <option value="">Choose a topic</option>
                            ${contactTopics.map((topic) => `<option value="${escapeAttribute(topic)}">${escapeHtml(topic)}</option>`).join("")}
                        </select>
                    </label>
                    <label class="form-field full-span">
                        <span>Message</span>
                        <textarea name="message" rows="7" placeholder="Write your message here..." required></textarea>
                    </label>
                </div>
                <button class="button primary" id="submit-button" type="submit">
                    ${icon("mail")} Open Email Draft
                </button>
                <div class="form-status-container" id="form-status-container"></div>
            </form>
            <div class="contact-side">
                <article class="panel contact-info">
                    <span class="section-kicker">Contact Information</span>
                    ${contactItem("Email", profile.email, profile.emailUrl, "mail")}
                    ${contactItem("LinkedIn", "linkedin.com/in/makanaka-kaguda", profile.linkedInUrl, "linkedin")}
                    ${contactItem("GitHub", "github.com/SunshineXoxo", profile.githubUrl, "github")}
                    ${contactItem("WhatsApp", profile.whatsAppPrimary.label, profile.whatsAppPrimary.url, "whatsapp")}
                    ${contactItem("WhatsApp", profile.whatsAppSecondary.label, profile.whatsAppSecondary.url, "whatsapp")}
                    ${contactItem("Location", profile.location, "", "pin")}
                    ${downloadButton("Download CV", profile.cvUrl, "download")}
                </article>
                <article class="open-card">
                    <span class="status-dot" aria-hidden="true"></span>
                    <div>
                        <h2>Open to Internship Opportunities</h2>
                        <p>${escapeHtml(profile.opportunityLine)}</p>
                    </div>
                </article>
            </div>
        </section>
    `;
}

function renderSkillSnapshot() {
    return `
        <div class="skill-grid">
            ${skillGroups.map((group) => `
                <article class="skill-column">
                    <h3>${icon(group.icon)} ${escapeHtml(group.title)}</h3>
                    <ul>
                        ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                    </ul>
                </article>
            `).join("")}
        </div>
    `;
}

function renderArchitectureFlow(nodes) {
    return `
        <div class="architecture-flow">
            ${nodes.map((node) => `
                <div class="architecture-node">
                    <span aria-hidden="true">${icon(node.icon)}</span>
                    <strong>${escapeHtml(node.label)}</strong>
                </div>
            `).join("")}
        </div>
    `;
}

function renderCloudNetwork() {
    return `
        <div class="cloud-visual" aria-label="Cloud connected IoT architecture illustration">
            <div class="grid-glow" aria-hidden="true"></div>
            <svg class="cloud-graphic" viewBox="0 0 680 420" role="img" aria-label="Cloud connecting IoT devices and services">
                <defs>
                    <linearGradient id="cloudLine" x1="0" x2="1">
                        <stop offset="0" stop-color="#27f1ff"/>
                        <stop offset="1" stop-color="#2684ff"/>
                    </linearGradient>
                </defs>
                <path class="cloud-shape" d="M294 167c12-48 54-82 106-82 61 0 111 50 111 111h11c39 0 71 32 71 71s-32 71-71 71H233c-48 0-87-39-87-87 0-44 33-81 76-86 15-34 49-58 88-58 40 0 74 24 89 60z"/>
                <path class="data-line" d="M340 302 C285 348 212 348 151 314"/>
                <path class="data-line" d="M421 302 C428 352 471 373 537 356"/>
                <path class="data-line" d="M382 304 L382 382"/>
                <circle class="data-dot" cx="340" cy="302" r="4"/>
                <circle class="data-dot" cx="421" cy="302" r="4"/>
                <circle class="data-dot" cx="382" cy="304" r="4"/>
            </svg>
            <div class="cloud-center">
                ${icon("cloudLarge")}
                <div>
                    <strong>Azure Cloud</strong>
                    <span>IoT | Functions | Database | Monitor</span>
                </div>
            </div>
            <div class="visual-node node-left">${icon("leaf")}<span>Farm sensors</span></div>
            <div class="visual-node node-mid">${icon("database")}<span>Cloud data</span></div>
            <div class="visual-node node-right">${icon("dashboard")}<span>Dashboard</span></div>
        </div>
    `;
}

function renderHeroPortrait() {
    return `
        <figure class="hero-portrait-card">
            <img src="${escapeAttribute(profile.profileImageUrl)}" alt="${escapeAttribute(profile.name + " profile photo")}">
        </figure>
    `;
}

function renderJourneyGraphic() {
    return `
        <div class="journey-graphic" aria-label="Cloud learning path illustration">
            ${learningPath.slice(0, 5).map((item, index) => `
                <div class="journey-point" style="--i: ${index}">
                    <span aria-hidden="true">${icon(item.icon)}</span>
                    <strong>${escapeHtml(item.title)}</strong>
                </div>
            `).join("")}
        </div>
    `;
}

function routeButton(label, path, iconName, variant) {
    return `
        <a class="button ${escapeAttribute(variant)}" href="${escapeAttribute(path)}" data-route>
            ${icon(iconName)} ${escapeHtml(label)}
        </a>
    `;
}

function anchorButton(label, href, iconName, variant) {
    return `
        <a class="button ${escapeAttribute(variant)}" href="${escapeAttribute(href)}">
            ${icon(iconName)} ${escapeHtml(label)}
        </a>
    `;
}

function downloadButton(label, href, iconName) {
    return `
        <a class="button primary" href="${escapeAttribute(href)}" download>
            ${icon(iconName)} ${escapeHtml(label)}
        </a>
    `;
}

function externalButton(label, href, iconName) {
    if (!href) {
        return `
            <button class="button secondary is-disabled" type="button" data-disabled-message="GitHub link pending">
                ${icon(iconName)} ${escapeHtml(label)}
            </button>
        `;
    }

    return `
        <a class="button secondary" href="${escapeAttribute(href)}" target="_blank" rel="noreferrer">
            ${icon(iconName)} ${escapeHtml(label)}
        </a>
    `;
}

function statusPill(label) {
    return `
        <span class="status-pill">
            <span class="status-dot" aria-hidden="true"></span>
            ${escapeHtml(label)}
        </span>
    `;
}

function inputField(label, name, type, placeholder, required) {
    return `
        <label class="form-field">
            <span>${escapeHtml(label)}</span>
            <input
                type="${escapeAttribute(type)}"
                name="${escapeAttribute(name)}"
                placeholder="${escapeAttribute(placeholder)}"
                ${required ? "required" : ""}
            >
        </label>
    `;
}

function contactItem(label, value, url, iconName) {
    const content = `
        <span aria-hidden="true">${icon(iconName)}</span>
        <div>
            <strong>${escapeHtml(label)}</strong>
            <p>${escapeHtml(value)}</p>
        </div>
    `;

    if (!url) {
        return `<div class="contact-item">${content}</div>`;
    }

    return `
        <a class="contact-item" href="${escapeAttribute(url)}" target="${url.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">
            ${content}
        </a>
    `;
}

function quickInfo(title, text, iconName) {
    return `
        <article class="quick-card">
            <span aria-hidden="true">${icon(iconName)}</span>
            <strong>${escapeHtml(title)}</strong>
            <p>${escapeHtml(text)}</p>
        </article>
    `;
}

function bindNavigation() {
    document.querySelectorAll("[data-route]").forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = event.currentTarget;
            const url = new URL(target.getAttribute("href"), window.location.origin);

            if (url.origin !== window.location.origin) {
                return;
            }

            event.preventDefault();
            window.history.pushState({}, "", url.pathname);
            submitState = { status: "idle", message: "", mailtoUrl: "" };
            renderApp();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
}

function bindThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        return;
    }

    themeToggle.addEventListener("click", () => {
        appTheme = appTheme === "dark" ? "light" : "dark";
        applyTheme(appTheme);
        renderApp();
    });
}

function bindContactForm() {
    const form = document.getElementById("contact-form");

    if (!form) {
        return;
    }

    form.addEventListener("submit", handleContactSubmit);
    renderSubmitState();
}

function bindDisabledButtons() {
    document.querySelectorAll("[data-disabled-message]").forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.add("is-shaking");
            window.setTimeout(() => button.classList.remove("is-shaking"), 360);
        });
    });
}

function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
        name: (formData.get("name") || "").toString().trim(),
        email: (formData.get("email") || "").toString().trim(),
        phone: "",
        service: (formData.get("subject") || "").toString().trim(),
        message: (formData.get("message") || "").toString().trim(),
    };
    const mailtoUrl = createMailtoUrl(payload);

    if (!payload.name || !payload.email || !payload.service || !payload.message) {
        setSubmitState({
            status: "error",
            message: "Please complete the required fields before opening an email draft.",
            mailtoUrl: "",
        });
        return;
    }

    form.reset();
    setSubmitState({
        status: "success",
        message: "Your email draft is ready. If it did not open automatically, use the link below.",
        mailtoUrl,
    });
    window.location.href = mailtoUrl;
}

function setSubmitState(nextState) {
    submitState = nextState;
    renderSubmitState();
}

function renderSubmitState() {
    const submitButton = document.getElementById("submit-button");
    const container = document.getElementById("form-status-container");

    if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = `${icon("mail")} Open Email Draft`;
    }

    if (!container) {
        return;
    }

    if (!submitState.message) {
        container.innerHTML = "";
        return;
    }

    container.innerHTML = `
        <div class="form-status ${escapeAttribute(submitState.status)}">
            <p>${escapeHtml(submitState.message)}</p>
            ${submitState.mailtoUrl ? `<a href="${escapeAttribute(submitState.mailtoUrl)}">Open email draft</a>` : ""}
        </div>
    `;
}

function createMailtoUrl(formData) {
    const subject = "Portfolio message - " + (formData.service || "Cloud opportunity");
    const body = [
        "Name: " + formData.name,
        "Email: " + formData.email,
        "Topic: " + formData.service,
        "",
        "Message:",
        formData.message,
    ].join("\n");

    return "mailto:" + profile.email
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(body);
}

function getInitialTheme() {
    try {
        const savedTheme = window.localStorage.getItem("portfolio-theme");
        if (savedTheme === "dark" || savedTheme === "light") {
            return savedTheme;
        }
    } catch (error) {
        console.warn("Unable to read saved theme.", error);
    }

    return "light";
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    try {
        window.localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
        console.warn("Unable to save theme.", error);
    }
}

function emphasizeAzure(text) {
    return escapeHtml(text).replace("Azure Cloud Engineering", "<span>Azure Cloud Engineering</span>");
}

function renderFooter() {
    return `
        <footer class="footer">
            <p>${escapeHtml(profile.name)} | ${escapeHtml(profile.title)}</p>
            <p>Building practical cloud, IoT, and full-stack projects from ${escapeHtml(profile.location)}.</p>
            <p><a href="${escapeAttribute(profile.githubUrl)}" target="_blank" rel="noreferrer">GitHub</a> | <a href="${escapeAttribute(profile.linkedInUrl)}" target="_blank" rel="noreferrer">LinkedIn</a> | <a href="${escapeAttribute(profile.emailUrl)}">Email</a></p>
        </footer>
    `;
}

function icon(name) {
    const attrs = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';

    const icons = {
        home: `<svg ${attrs}><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h5v-5h4v5h5v-9.5"/></svg>`,
        user: `<svg ${attrs}><circle cx="12" cy="8" r="4"/><path d="M4 21c1.7-4 4.4-6 8-6s6.3 2 8 6"/></svg>`,
        folder: `<svg ${attrs}><path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H10l2 2h6.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5z"/></svg>`,
        cloud: `<svg ${attrs}><path d="M17.5 18H8a5 5 0 0 1-.9-9.9 6 6 0 0 1 11.5 1.9h.4a4 4 0 0 1 0 8z"/></svg>`,
        mail: `<svg ${attrs}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,
        menu: `<svg ${attrs}><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
        download: `<svg ${attrs}><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>`,
        github: `<svg ${attrs}><path d="M15 22v-4a4 4 0 0 0-1-3c3 0 6-2 6-6 .1-1.5-.4-2.9-1.4-4 .2-1.2.1-2.4-.4-3.5 0 0-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.9 0C5 1.2 3.9 1.5 3.9 1.5c-.5 1.1-.6 2.3-.4 3.5A5.7 5.7 0 0 0 2 9c0 4 3 6 6 6a4 4 0 0 0-1 3v4"/><path d="M9 18c-4.5 2-5-2-7-2"/></svg>`,
        linkedin: `<svg ${attrs}><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4V9h4v2"/><rect x="2" y="9" width="4" height="11"/><circle cx="4" cy="4" r="2"/></svg>`,
        whatsapp: `<svg ${attrs}><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L4 20l1-3.7a8.5 8.5 0 1 1 15.5-4.6z"/><path d="M9.5 8.8c.2-.5.4-.6.7-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.6 1.1 1.4 1.9 2.6 2.5l.6-.5c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.6v.4c0 .4-.2.7-.5.9-.4.3-1 .5-1.7.4-3.2-.5-5.6-2.8-6.2-6 0-.6.1-1.1.2-1.5z"/></svg>`,
        arrowRight: `<svg ${attrs}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`,
        star: `<svg ${attrs}><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/></svg>`,
        spark: `<svg ${attrs}><path d="M13 2 8 13l-5 2 5 2 5 5 1-6 7-3-6-2z"/></svg>`,
        map: `<svg ${attrs}><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3z"/><path d="M9 3v15M15 6v15"/></svg>`,
        terminal: `<svg ${attrs}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m8 9 3 3-3 3"/><path d="M13 15h3"/></svg>`,
        network: `<svg ${attrs}><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="12" cy="13" r="2"/><path d="M12 7v4M10.4 14.2 6.6 17.8M13.6 14.2l3.8 3.6"/></svg>`,
        bolt: `<svg ${attrs}><path d="M13 2 4 14h7l-1 8 10-13h-7z"/></svg>`,
        database: `<svg ${attrs}><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/></svg>`,
        dashboard: `<svg ${attrs}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 15v-3M12 15V9M16 15v-5"/><path d="M7 18h10"/></svg>`,
        bell: `<svg ${attrs}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>`,
        book: `<svg ${attrs}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>`,
        radio: `<svg ${attrs}><rect x="7" y="9" width="10" height="10" rx="2"/><path d="M10 13h.01M14 13h.01M12 9V6"/><path d="M8.5 4.5a5 5 0 0 1 7 0"/><path d="M5.5 2a9 9 0 0 1 13 0"/></svg>`,
        code: `<svg ${attrs}><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></svg>`,
        wrench: `<svg ${attrs}><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.6 2.6-3-3z"/></svg>`,
        rocket: `<svg ${attrs}><path d="M4.5 16.5c-1 1-1.5 3-1.5 3s2-.5 3-1.5"/><path d="M9 15 6 12c2-5 6-8 13-9-1 7-4 11-9 13z"/><path d="M15 9h.01"/><path d="M9 15l-1 4 4-1"/></svg>`,
        shield: `<svg ${attrs}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-5"/></svg>`,
        azure: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.6 3 5.2 19.8h6.6l1.2-3.5H8.6l5.1-13.3zm1.8 4.3-3.1 8.6 5.4 0 1.6 3.9h5.1z"/></svg>`,
        graduation: `<svg ${attrs}><path d="m22 10-10-5-10 5 10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/></svg>`,
        briefcase: `<svg ${attrs}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>`,
        target: `<svg ${attrs}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>`,
        leaf: `<svg ${attrs}><path d="M4 20c8 0 16-8 16-16C12 4 4 12 4 20z"/><path d="M4 20c3-5 7-8 12-10"/></svg>`,
        warning: `<svg ${attrs}><path d="m12 3 10 18H2z"/><path d="M12 9v5M12 17h.01"/></svg>`,
        check: `<svg ${attrs}><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>`,
        award: `<svg ${attrs}><circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-2 8 5.5-3 5.5 3-2-8"/></svg>`,
        send: `<svg ${attrs}><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>`,
        pin: `<svg ${attrs}><path d="M12 22s7-5.4 7-12a7 7 0 0 0-14 0c0 6.6 7 12 7 12z"/><circle cx="12" cy="10" r="2"/></svg>`,
        info: `<svg ${attrs}><circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7h.01"/></svg>`,
        clock: `<svg ${attrs}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
        cloudCircuit: `<svg ${attrs}><path d="M17.5 18H8a5 5 0 0 1-.9-9.9 6 6 0 0 1 11.5 1.9h.4a4 4 0 0 1 0 8z"/><path d="M7 20v2M12 18v4M17 20v2"/><path d="M7 22h.01M12 22h.01M17 22h.01"/></svg>`,
        cloudLarge: `<svg ${attrs}><path d="M17.5 18H8a5 5 0 0 1-.9-9.9 6 6 0 0 1 11.5 1.9h.4a4 4 0 0 1 0 8z"/><path d="M9 13h.01M12 13h.01M15 13h.01"/></svg>`,
        mailLarge: `<svg ${attrs}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/><path d="M12 19v3M8 22h8"/></svg>`,
        moon: `<svg ${attrs}><path d="M21 12.7A8.5 8.5 0 1 1 11.3 3a6.5 6.5 0 0 0 9.7 9.7z"/></svg>`,
        sun: `<svg ${attrs}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
    };

    return icons[name] || icons.spark;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
    return escapeHtml(value);
}
