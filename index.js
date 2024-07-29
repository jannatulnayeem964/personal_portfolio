const typedTextSpan = document.querySelector("#typed-text");
const textArray = ["PROGRAMMER", "DEVELOPER", "ENGINEER", "ENTHUSIAST", "PROBLEM-SOLVER."];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        if (textArrayIndex === textArray.length - 1) {
            return;
        }
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
    
    // Create a new div for the tilting background
    const backgroundTilt = document.createElement('div');
    backgroundTilt.classList.add('background-tilt');
    document.querySelector('.header-container').prepend(backgroundTilt);
    
    // Paradox tilt effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        const tiltX = (mouseY - 0.5) * 4; // Adjust for more or less tilt
        const tiltY = (mouseX - 0.5) * -4; // Adjust for more or less tilt
        
        backgroundTilt.style.transform = `translate(${tiltY}%, ${tiltX}%)`;
    });
});

const projectsData = [
    {
        title: "Lord of the Rings Calculator",
        description: "Calculates the price, volume, and size of ring based on Lord of the Rings",
        image: "/images/project2.png",
        technologies: ["Python"],
        github: "https://github.com/jannatulnayeem964/lord_of_rings_calculator.git",
    },
    // Add more project objects here
];

function createProjectCards() {
    const projectsContainer = document.querySelector('.projects-container');
    
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank">GitHub</a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', createProjectCards);
const experienceData = {
    leadership: [
        {
            title: "Fellow",
            organization: "BreakThrough Tech AI",
            date: "2024 - Present",
            description: "Contributed to a 12-month long program including Machine Learning Certificate with Cornell faculty, experiential learning experiences, and mentorship from industry professionals."
        },
        {
            title: "Tech Fellow",
            organization: "Codepath",
            date: "Spring 2024",
            description:"Guided approximately 200 students in navigating points of confusion surrounding CSS, Javascript,and HTML via Zoom and Slack, resulting in clarified understanding and improved proficiency in these area"
        },
        {
            title: "Panhellenic Delegate",
            organization: "George Mason University",
            date: "2022 - 2023",
            description: "Overseeded and implemented communication between sorority sub-chapter and mason panhellenic. Led events to facilitate community and communication between the two groups."
        }
        
    ],
    work: [
        {
            title: "Behavior Technician",
            company: "ProudMoments ABA",
            date: "2023 - Present",
            description: "Implemented behavioral plans for children with developmental disabilities designed by a Board Certified Behavior Analyst, collected data to monitor progress and effectiveness of individualized treatment plans, reported progress, and supported BCBA in training families on plan implementation."
        },
        {
            title: "Patient Safety Associate",
            company: "Metropolitan Healthcare Services",
            date: "2020-2023",
            description: "Provided 1 on 1 supervision and appropriate diversional activities to assigned patient under Nurse supervision and direction"
        }
        
    ],
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "George Mason University",
            date: "2020-2025",
            description: "Focused on software engineering and artificial intelligence."
        },
        {
            degree: "Machine Learning Foundations Certificate, Break Through Tech AI",
            school: "Cornell University",
            date: "Summer 2024",
            description: "Focused on machine learning and artificial intelligence."
        },
        
    ]
};

function createExperienceItems(category) {
    const container = document.getElementById(category);
    container.innerHTML = ''; // Clear existing content

    experienceData[category].forEach(item => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';

        let content = `<h3>${item.title || item.degree}</h3>`;
        content += `<p><strong>${item.organization || item.company || item.school}</strong></p>`;
        content += `<p>${item.date}</p>`;
        content += `<p>${item.description}</p>`;

        experienceItem.innerHTML = content;
        container.appendChild(experienceItem);
    });
}

function initializeExperience() {
    const sidebarButtons = document.querySelectorAll('.sidebar-button');
    const experienceCategories = document.querySelectorAll('.experience-category');

    sidebarButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Update active button
            sidebarButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update active category
            experienceCategories.forEach(cat => cat.classList.remove('active'));
            document.getElementById(category).classList.add('active');

            // Create experience items for the selected category
            createExperienceItems(category);
        });
    });

    // Initialize with leadership category
    createExperienceItems('leadership');
}

document.addEventListener('DOMContentLoaded', initializeExperience);