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
                "title": "Beyond The Call Of Duty Award",
                "from": "2023",
                "to": "",
                "description": "Recognized for bringing in new ideas and recommendations to the Quality team.",
                "type": "achievement"
            },
            {
                "title": "Quarterly Block Star Award",
                "from": "2023",
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
                "title": "Senior Test Automation Consultant",
                "company": "H&R Block",
                "from": "Mar 2020",
                "to": "May 2021",
                "description": "Developed automated testing solutions and improved software reliability.",
                "type": "job"
            },
            {
                "title": "Consultant: Senior Automation Engineer",
                "company": "IBS Software",
                "from": "Sep 2017",
                "to": "Feb 2019",
                "description": "Worked on automation strategies using UFT and Selenium.",
                "type": "job"
            },
            {
                "title": "Test Automation Engineer",
                "company": "SE Mentor Solutions",
                "from": "Mar 2015",
                "to": "Mar 2018",
                "description": "Developed test automation frameworks for various applications.",
                "type": "job"
            }
        ]
    };
    

    const timelineContainer = document.getElementById("timeline");

    timelineData.timeline.forEach((item, index) => {
        // Determine icon based on type
        let iconClass = item.type === "job" ? "fa-suitcase" : "fa-trophy";
        let positionClass = index % 2 === 0 ? "left" : "right";

        // Create timeline item
        let timelineItem = document.createElement("div");
        // timelineItem.classList.add("timeline-item", positionClass);

        if(item.type === "achievement") {
            timelineItem.classList.add("timeline-item", "right");
            timelineItem.innerHTML = `
            <div class="timeline-content">
                <h2><i class="fa-solid ${iconClass} icon"></i> ${item.from}</h2>
                <h2>${item.title}</h2>
                
                <p>${item.description}</p>
            </div>
        `;
        }
        else {
            timelineItem.classList.add("timeline-item", "left");
            timelineItem.innerHTML = `
            <div class="timeline-content">
                <h2><i class="fa-solid ${iconClass} icon"></i> ${item.from} - ${item.to}</h2>
                <h2>${item.title}</h2>
                <h3>${item.company}</h3>
                <p>${item.description}</p>
            </div>
        `;
        }

        // timelineItem.innerHTML = `
        //     <div class="timeline-content">
        //         <h2><i class="fa-solid ${iconClass} icon"></i> ${item.from} - ${item.to}</h2>
        //         <h2>${item.title}</h2>
        //         <h3>${item.company}</h3>
        //         <p>${item.description}</p>
        //     </div>
        // `;

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
