const skillsData = {
  "Sections": [
    {
      "Section": "Programming",
      "Skills": {
        "C#": 4,
        "Java": 4,
        "JavaScript": 3
      }
    },
    {
      "Section": "Tools",
      "Skills": {
        "UFT": 4,
        "Selenium": 5,
        "JMeter": 4
      }
    },
    {
      "Section": "Database",
      "Skills": {
        "SQL": 5,
        "PostgreSQL": 4,
        "MongoDB": 3
      }
    },
    {
      "Section": "Cloud",
      "Skills": {
        "AWS": 4,
        "Azure": 3,
        "Google Cloud": 2
      }
    },
    {
      "Section": "DevOps",
      "Skills": {
        "Docker": 4,
        "Kubernetes": 3,
        "Jenkins": 4
      }
    },
    {
      "Section": "Version Control",
      "Skills": {
        "Git": 5,
        "SVN": 4
      }
    },
    {
      "Section": "Automation",
      "Skills": {
        "TestNG": 4,
        "JUnit": 3,
        "Appium": 3
      }
    }
  ]
};
function displaySkills() {
  const container = document.getElementById("allSkills");
  container.innerHTML = ""; // Clear existing content

  skillsData.Sections.forEach(section => {
      let sectionDiv = document.createElement("div");
      sectionDiv.classList.add("skill-section");

      let sectionTitle = document.createElement("h2");
      sectionTitle.textContent = section.Section;
      sectionDiv.appendChild(sectionTitle);

      let skillGroup = document.createElement("div");
      skillGroup.classList.add("skill-group");

      for (let skill in section.Skills) {
          let skillDiv = document.createElement("div");
          skillDiv.classList.add("skill");

          let skillName = document.createElement("span");
          skillName.textContent = skill;

          let stars = document.createElement("span");
          stars.classList.add("stars");
          stars.innerHTML = "★".repeat(section.Skills[skill]) + "☆".repeat(5 - section.Skills[skill]);

          skillDiv.appendChild(skillName);
          skillDiv.appendChild(stars);
          skillGroup.appendChild(skillDiv);
      }

      sectionDiv.appendChild(skillGroup);
      container.appendChild(sectionDiv);
  });

  document.getElementById("skillsPage").style.display = "block";
}

// Call displaySkills() when needed
