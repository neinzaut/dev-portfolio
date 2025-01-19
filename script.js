const projectsData = [
    { title: 'Project One', description: 'Description of project one.' },
    { title: 'Project Two', description: 'Description of project two.' },
    { title: 'Project Three', description: 'Description of project three.' },
    { title: 'Project Four', description: 'Description of project four.' },
    { title: 'Project Five', description: 'Description of project five.' }
];

// Function to populate projects
function populateProjects() {
    const projectsContainer = document.querySelector('.projects-container');
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectsContainer.appendChild(card);
    });
}

// Call functions to populate sections
populateTimeline();
populateProjects();
