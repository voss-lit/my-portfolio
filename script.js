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
        description: "helps in mathematical calculations",
        tech: "HTML, CSS, javascript"

    },

    {
        title: "fintense",
        description: "allows users to be part of a fitnese community",
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