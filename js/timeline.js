document.addEventListener("DOMContentLoaded", function () {
  const timelineData = {
      "timeline": [
          {
              "title": "College Graduation",
              "from": "2006",
              "to": "2010",
              "description": "Graduated with a Computer Science degree from XYZ University.",
              "type": "achievement"
          },
          {
              "title": "First Job - Software Engineer",
              "from": "2010",
              "to": "2014",
              "description": "Worked at ABC Tech as a Software Engineer.",
              "type": "job"
          },
          {
              "title": "Promotion - Senior Software Engineer",
              "from": "2014",
              "to": "2017",
              "description": "Promoted to Senior Software Engineer at ABC Tech.",
              "type": "job"
          },
          {
              "title": "Award for Best Performance",
              "from": "2017",
              "to": "2018",
              "description": "Received the Best Employee award for outstanding contributions.",
              "type": "achievement"
          },
          {
              "title": "Lead Developer at DEF Corp",
              "from": "2018",
              "to": "2022",
              "description": "Worked as a Lead Developer handling major projects.",
              "type": "job"
          }
      ]
  };

  const timelineContainer = document.getElementById("timeline");

  timelineData.timeline.forEach((item, index) => {
      // Determine icon based on type
      let icon = item.type === "job" 
          ? '<i class="fa-solid fa-suitcase icon"></i>' 
          : '<i class="fa-solid fa-trophy icon"></i>';

      // Determine left or right placement
      let positionClass = index % 2 === 0 ? "left" : "right";

      // Create timeline item
      let timelineItem = document.createElement("div");
      timelineItem.classList.add("timeline-item", positionClass);

      timelineItem.innerHTML = `
          <div class="timeline-content">
              <h2>${icon} ${item.from} - ${item.to}</h2>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
          </div>
      `;

      timelineContainer.appendChild(timelineItem);
  });
});
