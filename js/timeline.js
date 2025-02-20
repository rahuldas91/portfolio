document.addEventListener("DOMContentLoaded", function () {
    const timelineData = {
        "timeline": [
            {
                "title": "Test Analyst",
                "company": "H&R Block India",
                "from": "Apr 2023",
                "to": "Present",
                "description": "Specialized in Framework Development, C#, Microsoft Azure, and Solution Architecture.",
                "type": "job"
            },
            {
                "title": "Quarterly Block Star Award",
                "from": "2025",
                "to": "",
                "description": "Recognized for hard work and dedication towards projects.",
                "type": "achievement"
            },
            {
                "title": "Beyond The Call Of Duty Award",
                "from": "2024",
                "to": "",
                "description": "Recognized for bringing in new ideas and recommendations to the Quality team.",
                "type": "achievement"
            },
            {
                "title": "Quarterly Block Star Award",
                "from": "2024",
                "to": "",
                "description": "Recognized for hard work and dedication towards projects.",
                "type": "achievement"
            },
            {
                "title": "Test Lead",
                "company": "EY",
                "from": "May 2021",
                "to": "Apr 2023",
                "description": "Led test automation projects, ensuring high-quality deliveries.",
                "type": "job"
            },
            {
                "title": "Pursuing Innovation",
                "from": "2023",
                "type": "achievement"
            },
            {
                "title": "Spot Award",
                "from": "2023",
                "type": "achievement"
            },
            {
                "title": "EY Cloud - Bronze",
                "from": "2022",
                "type": "badge"
            },
            {
                "title": "EY Innovation - Bronze",
                "from": "2022",
                "type": "badge"
            },
            {
                "title": "Lifelong Learning - CertiProf",
                "from": "2022",
                "type": "certificate"
            },
            {
                "title": "Scrum Foundation Professional Certification - SFPC™ ! - CertiProf",
                "from": "2022",
                "type": "certificate"
            },
            {
                "title": "Microsoft Certified: Azure Fundamentals",
                "from": "2021",
                "type": "certificate"
            },
            {
                "title": "Senior Test Automation Consultant",
                "company": "H&R Block",
                "from": "2020",
                "to": "021",
                "description": "Developed automated testing solutions and improved software reliability.",
                "type": "job"
            },
            {
                "title": "Consultant: Senior Automation Engineer",
                "company": "IBS Software",
                "from": "2019",
                "to": "2020",
                "description": "Worked on automation strategies using UFT and Selenium.",
                "type": "job"
            },
            {
                "title": "Consultant: Senior Automation Engineer",
                "company": "Lenovo",
                "from": "018",
                "to": "2019",
                "description": "Worked on automation strategies using UFT and Selenium.",
                "type": "job"
            },
            {
                "title": "Consultant: UFT Test Automation",
                "company": "Allianz Technology",
                "from": "2017",
                "to": "2018",
                "description": "Worked on automation strategies using UFT and Selenium.",
                "type": "job"
            },
            {
                "title": "Consultant: Test Automation Engineer",
                "company": "RM Education Solutions",
                "from": "2017",
                "to": "2017",
                "description": "Worked on automation strategies using UFT and Selenium.",
                "type": "job"
            },
            {
                "title": "Consultant: Test Automation Engineer",
                "company": "Xerox",
                "from": "Mar 2015",
                "to": "Mar 2017",
                "description": "Developed test automation frameworks for various applications.",
                "type": "job"
            },
            {
                "title": "Test Automation Engineer",
                "company": "SE Mentor Solutions",
                "from": "Mar 2014",
                "to": "Mar 2021",
                "description": "Developed test automation frameworks for various applications.",
                "type": "job"
            }
        ]
    };


    const timelineContainer = document.getElementById("timeline");

    timelineData.timeline.forEach((item, index) => {

        let positionClass = index % 2 === 0 ? "left" : "right";

        // Create timeline item
        let timelineItem = document.createElement("div");

        if (item.type === "achievement") {
            timelineItem.classList.add("timeline-item", "right");
            timelineItem.innerHTML = `
            <div class="timeline-content">
                <h2>${item.title}</h2>
                <h2><i class="fa-solid fa-trophy icon"></i> ${item.from}</h2>
            </div>
        `;
        }
        if (item.type === "job") {
            timelineItem.classList.add("timeline-item", "left");
            timelineItem.innerHTML = `
            <div class="timeline-content">
                <h2><i class="fa-solid fa-suitcase icon"></i>${item.title}</h2>
                <h3> ${item.from} - ${item.to}</h3>
                <h3>${item.company}</h3>
                <p>${item.description}</p>
            </div>
        `;
        }

        if (item.type === "badge") {
            timelineItem.classList.add("timeline-item", "right");
            timelineItem.innerHTML = `
        <div class="timeline-content">
            <h2>${item.title}</h2>
            <h2><i class="fa-solid fa-award icon"></i> ${item.from}</h2>
        </div>
    `;
        }

        if (item.type === "certificate") {
            timelineItem.classList.add("timeline-item", "right");
            timelineItem.innerHTML = `
        <div class="timeline-content">
            <h2>${item.title}</h2>
            <h2><i class="fa-solid fa-graduation-cap icon"></i> ${item.from}</h2>
        </div>
    `;
        }

        // Add hover effect
        timelineItem.addEventListener("mouseenter", function () {
            timelineItem.querySelector(".icon").classList.add("fa-bounce");
        });

        timelineItem.addEventListener("mouseleave", function () {
            timelineItem.querySelector(".icon").classList.remove("fa-bounce");
        });

        timelineContainer.appendChild(timelineItem);
    });
});
