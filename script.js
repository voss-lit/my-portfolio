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
        discription: "helps in mathematical functions",
        tech: "HTML, CSS, javascript"

    }
]