const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"]
const skillLists = document.getElementById("skills-list")
skills.forEach(function(skill){
    const skillElements = document.createElement("p")
    skillElements.textContent = skill
    skillLists.appendChild(skillElements)
})