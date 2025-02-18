const projects = [
  {
    "Project": "BlockWorks Legacy",
    "Client": "HR Block",
    "Role": "Sr. UFT Automation Consultant",
    "Tool": "UFT 14",
    "Description": "BlockWorks is the most widely used income tax return application used in the United States Of America. Using this application, tax professionals can create IT returns for individuals. Individuals approach tax professionals, who use this desktop application to complete the returns.",
    "Responsibilities": [
      "Executing the script",
      "Updating the results in ADO",
      "Maintaining the script for the new builds",
      "Creating the test scripts for the new user stories",
      "Reviewing the test scripts"
    ]
  },
  {
    "Project": "RapidTest",
    "Client": "IBS Software Services",
    "Role": "Senior Test Automation Consultant",
    "Tool": "Angular 7, Spring framework, PostgreSQL, TestNG, Selenium",
    "Description": "RapidTest is an automation framework developed by IBS for automating Web and mobile applications. It has a custom-built result viewer for viewing execution results.",
    "Responsibilities": [
      "Setting up the environment - tool installation",
      "Designing framework architecture",
      "Writing wrapper class for test case creation",
      "Designing database table for test result storing",
      "Designing dashboard of RapidTest report Viewer",
      "Implementing execution priority externalization"
    ]
  },
  {
    "Project": "Load Control System (LCS)",
    "Client": "IBS Software Services",
    "Role": "Senior Test Automation Consultant",
    "Tool": "RapidTest, Java",
    "Description": "IBS is a leading global provider of new generation IT solutions to the Travel, Transportation, and Logistics industries. LCS is the application used to manage the Centre of Gravity (CG), and it is used by All Nippon Airways, a leading airline in Japan.",
    "Responsibilities": [
      "Setting up the environment - tool installation",
      "Designing framework",
      "Creating reusable functions",
      "Create test scripts by calling the reusable functions",
      "Insert proper verification points",
      "Update test scripts",
      "Script execution",
      "Create test suite by arranging the individual scripts in logical order",
      "Preparing bat files for executing test suites"
    ]
  },
  {
    "Project": "E Support",
    "Client": "Lenovo",
    "Role": "Senior Test Automation Consultant",
    "Tool": "UFT 11.5/VBScript",
    "Description": "Lenovo is a Chinese multinational technology company headquartered in Beijing. The E Support portal is an online tool for registering customer-bought products. The back end of the application is maintained using SAP. Customers have to register their product using the Product Name, Authentication Code, and Pin to avail warranty.",
    "Responsibilities": [
      "Creating reusable functions",
      "Create test scripts by calling the reusable functions",
      "Insert proper verification points",
      "Update test scripts",
      "Script execution"
    ]
  },
  {
    "Project": "Script Less Automation Tool Developing",
    "Client": "SE-Mentor",
    "Role": "Security/Performance Test Engineer",
    "Tool": "Java, Eclipse",
    "Description": "This tool is used for running automation scripts without knowledge of programming language. It can be easily used by a manual tester to generate automation code by providing element locators, actions, and data in an Excel file.",
    "Responsibilities": [
      "Designing the framework for implementing the tool",
      "Designing the template for specifying the action and the location",
      "Writing library files (.jar) for the tool",
      "Writing codes for generating Selenium script (Composer Function)",
      "Testing the working of the tool against a real scenario",
      "Adding features to the tool (PDF Report, Execution List in Excel, Customized Report)",
      "Setting up the component file for the tool"
    ]
  },
  {
    "Project": "SOCXO",
    "Client": "Suyati",
    "Role": "Security/Performance Test Engineer",
    "Tool": "JMeter, Blaze Meter, Acunetix, OWASP ZAP",
    "Description": "SOCXO, the all-in-one advocacy marketing platform developed by Suyati Technologies, transforms employees, customers, and partners into trusted brand advocates. It enables the workforce to curate, share, amplify, and drive thought leadership for enhancing company branding and performance.",
    "Responsibilities": [
      "Recording test script for load and performance",
      "Executing scripts",
      "Configuring systems for Distributed Testing",
      "Scanning the website for vulnerabilities",
      "Attacking the vulnerabilities using different tools",
      "Generating vulnerability analysis report",
      "Checking for all possible attacks"
    ]
  },
  {
    "Project": "iCargo (LCS)",
    "Client": "IBS Software Services",
    "Role": "Senior Test Automation Consultant",
    "Tool": "RapidTest, Java",
    "Description": "IBS is a leading global provider of new generation IT solutions to the Travel, Transportation, and Logistics industries. I Cargo is the flagship application of IBS, used by many airline companies for managing their cargo shipments.",
    "Responsibilities": [
      "Setting up the environment - tool installation",
      "Designing framework",
      "Creating reusable functions",
      "Create test scripts by calling the reusable functions",
      "Insert proper verification points",
      "Update test scripts",
      "Script execution",
      "Create test suite by arranging the individual scripts in logical order",
      "Preparing bat files for executing test suites"
    ]
  },
  {
    "Project": "Connect +",
    "Client": "RM Education Solutions India Pvt Ltd",
    "Role": "Security/Performance Test Engineer",
    "Tool": "Coded UI, Auto IT, PsExec",
    "Description": "Connect Plus enables Test Centres to deliver computer-based tests published by Awarding Bodies. Candidates may be entered for a test by the Awarding Body or by the Test Centre. Awarding Bodies monitor the progress and status of tests, and some tests are marked by the Test Centres.",
    "Responsibilities": [
      "Designing the framework",
      "Identify the test cases for automation",
      "Setting up the environment - tool installation",
      "Involved in designing framework",
      "Creating reusable functions",
      "Create test scripts by calling the reusable functions",
      "Insert proper verification points",
      "Update test scripts",
      "Script execution",
      "Create test suite by arranging the individual scripts in logical order",
      "Preparing bat files for executing test suites"
    ]
  },
  {
    "Project": "Compline",
    "Client": "Providence LLC",
    "Role": "Test Automation Engineer",
    "Tool": "Selenium WebDriver, Java",
    "Description": "Compline provides a California experience rating database to the workers' comp industry and employers. It helps underwrite risk and provides lead generation services.",
    "Responsibilities": [
      "Identify the test cases for automation",
      "Setting up the environment - tool installation",
      "Involved in designing framework",
      "Creating reusable functions",
      "Create test scripts by calling the reusable functions",
      "Insert proper verification points",
      "Update test scripts",
      "Script execution",
      "Create test suite by arranging the individual scripts in logical order",
      "Preparing bat files for executing test suites"
    ]
  }
  // Add more projects here
];
const projectContainer = document.getElementById('projects');
const projectCardsContainer = document.getElementById('project-cards');
const projectDetail = document.getElementById('project-detail');
const closeDetailButton = document.getElementById('close-detail');
const detailContent = document.getElementById('detail-content');

// Create project cards dynamically
projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  projectCard.innerHTML = `
    <h3><i class="fa-regular fa-folder fa-lg"></i>    ${project.Project}</h3>
    <p><strong>Client:</strong> ${project.Client}</p>
  `;
  
  projectCard.addEventListener('click', () => {
    showProjectDetail(project);
  });

  projectCardsContainer.appendChild(projectCard);
});

// Show project detail when a card is clicked
function showProjectDetail(project) {
  detailContent.innerHTML = `
    <h2>${project.Project}</h2>
    <p><strong>Role:</strong> ${project.Role}</p>
    <p><strong>Client:</strong> ${project.Client}</p>
    <p><strong>Tool:</strong> ${project.Tool}</p>
    <p><strong>Description:</strong> ${project.Description}</p>
  `;
  projectDetail.style.display = 'block';
  projectContainer.style.display = 'none';
}

// Close the project detail view
closeDetailButton.addEventListener('click', () => {
  projectDetail.style.display = 'none';
  projectContainer.style.display = 'block';
});

