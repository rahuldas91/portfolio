const skillsData = {
  "Sections": [
    {
      "Section": "Programming",
      "Skills": {
        "JAVA 8": 5,
        "VBScript": 3,
        "JavaScript": 4,
        "Python": 4,
        "C#": 5,
        "AutoIt3": 3,
        "TypeScript": 4,
        "HTML": 5
      }
    },
    {
      "Section": "Bug Tracking Tools",
      "Skills": {
        "Mantis 1.2.8": 3,
        "Team Foundation Server": 4
      }
    },
    {
      "Section": "Automation Tools",
      "Skills": {
        "Selenium Web Driver": 5,
        "UFT 11.5": 4,
        "Coded UI": 3,
        "AutoIT": 4
      }
    },
    {
      "Section": "Performance Testing",
      "Skills": {
        "JMeter": 5,
        "WAPT Pro": 4,
        "Blaze Meter": 3
      }
    },
    {
      "Section": "Security Testing",
      "Skills": {
        "Acunetix": 4,
        "OWASP ZAP": 5,
        "Burp Suite": 4
      }
    },
    {
      "Section": "Project Management Tools",
      "Skills": {
        "Microsoft Test Manager": 4,
        "Git": 5,
        "VSTS": 3,
        "TFS": 4,
        "JIRA": 5,
        "BitBucket": 4,
        "Confluence": 3,
        "SVN": 4,
        "Azure": 5
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
    },
    {
      "Section": "Web Development",
      "Skills": {
        "HTML": 5,
        "CSS": 4,
        "React": 4
      }
    },
    {
      "Section": "Security",
      "Skills": {
        "OWASP": 4,
        "Burp Suite": 3,
        "Nessus": 4
      }
    },
    {
      "Section": "Mobile Development",
      "Skills": {
        "Android": 4,
        "iOS": 3,
        "Flutter": 2
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

          let rating = section.Skills[skill]; // Rating out of 5

          // Generate stars dynamically
          for (let i = 0; i < 5; i++) {
              let star = document.createElement("i");

              if (i < rating) {
                  star.classList.add("fa-solid", "fa-star","fa-2xs"); // Filled star
              } else {
                  star.classList.add("fa-regular", "fa-star", "fa-2xs"); // Fading effect for unfilled stars
              }

              stars.appendChild(star);
          }

          skillDiv.appendChild(skillName);
          skillDiv.appendChild(stars);
          skillGroup.appendChild(skillDiv);
      }

      sectionDiv.appendChild(skillGroup);
      container.appendChild(sectionDiv);
  });

  document.getElementById("skillsPage").style.display = "block";
}

