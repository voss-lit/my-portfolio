const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"]
const skillList = document.getElementById("skills-list")
skills.forEach(function(skill){
    const skillElements = document.createElement("p")
    skillElements.textContent = skill
    skillList.appendChild(skillElements)
})

const projects =[
    {
        title: "Calculator",
        description: "A responsive calculator web application that allows users to perform basic mathematical calculations through an interactive and easy-to-use interface.",
        tech: "HTML, CSS, javascript"

    },

    {
        title: "fintense",
        description: "A fitness community web application that allows users to connect, share their fitness journey, and stay motivated while working toward their health and fitness goals.",
        tech: "HTML, CSS, javascript"
    }
]

const projectsList = document.getElementById("projectList")
projects.forEach(function(project) {
    const projectCard = document.createElement("div")

    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <P>Technologies: ${project.tech}</p>
        
    `

    projectsList.appendChild(projectCard)
})