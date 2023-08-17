document.addEventListener('DOMContentLoaded', function() {
//     // About Me section
//     const aboutParagraph = document.getElementById('about-paragraph');
//     const aboutText = "Your 'About Me' paragraph goes here.";
//     aboutParagraph.textContent = aboutText;

//     // Projects section
    const projectsList = document.getElementById('projects-list');
    const projects = [
        { name: 'Dev-Room', description: 'A platform for developers to collaborate and share ideas.', link: 'https://github.com/Hri-tha/WebChat' },
        { name: 'ChatApp', description: 'Real-time chat application built with WebSocket technology.', link: 'https://github.com/Hri-tha/Dev-Room' },
        { name: 'Portfolio', description: 'My personal portfolio website to showcase my work.', link: 'https://github.com/your-username/portfolio' }
        // Add more project entries here
    ];

    projects.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `<strong>${project.name}:</strong> ${project.description} (<a href="${project.link}" target="_blank">GitHub</a>)`;
        projectsList.appendChild(projectItem);
    });
});






