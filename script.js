/* =========================================
   HR ANALYTICS USING XAI
   COMPLETE JAVASCRIPT
========================================= */


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageId, clickedButton) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });


    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Remove active class from navigation
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.classList.remove("active");
    });


    // Add active class
    if (clickedButton) {
        clickedButton.classList.add("active");
    }


    // Update page title
    const pageName = document.getElementById("pageName");
    const pageTitle = document.getElementById("pageTitle");


    const pageTitles = {

        dashboard: "Dashboard",

        employees: "Employees",

        attrition: "Attrition Prediction",

        recruitment: "Recruitment Analytics",

        performance: "Performance Analytics",

        reports: "Reports"

    };


    if (pageName) {

        pageName.innerText =
            pageTitles[pageId] || "Dashboard";

    }


    if (pageTitle) {

        if (pageId === "dashboard") {

            pageTitle.innerHTML =
                'Good morning, HR Admin <span>✦</span>';

        } else {

            pageTitle.innerHTML =
                pageTitles[pageId] || "HR Analytics";

        }

    }

}


/* =========================================
   CHART CONFIGURATION
========================================= */

let workforceChart;

let riskChart;


/* =========================================
   INITIALIZE CHARTS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    createWorkforceChart();

    createRiskChart();

});


/* =========================================
   WORKFORCE CHART
========================================= */

function createWorkforceChart() {

    const canvas =
        document.getElementById("workforceChart");


    if (!canvas) return;


    const ctx = canvas.getContext("2d");


    workforceChart = new Chart(ctx, {

        type: "line",


        data: {

            labels: [

                "Jan",

                "Feb",

                "Mar",

                "Apr",

                "May",

                "Jun",

                "Jul",

                "Aug",

                "Sep",

                "Oct",

                "Nov",

                "Dec"

            ],


            datasets: [

                {

                    label: "Employees",

                    data: [

                        1040,

                        1075,

                        1090,

                        1110,

                        1145,

                        1160,

                        1180,

                        1195,

                        1210,

                        1220,

                        1235,

                        1248

                    ],


                    borderColor: "#5ba7ff",

                    backgroundColor:
                        "rgba(91, 167, 255, 0.08)",


                    borderWidth: 2,

                    fill: true,

                    tension: 0.4,

                    pointRadius: 3,

                    pointBackgroundColor:
                        "#5ba7ff"

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            plugins: {

                legend: {

                    display: false

                }

            },


            scales: {

                x: {

                    grid: {

                        display: false

                    },

                    ticks: {

                        color: "#75869b",

                        font: {

                            size: 9

                        }

                    }

                },


                y: {

                    grid: {

                        color:
                            "rgba(255,255,255,0.06)"

                    },

                    ticks: {

                        color: "#75869b",

                        font: {

                            size: 9

                        }

                    }

                }

            }

        }

    });

}


/* =========================================
   CHANGE WORKFORCE CHART
========================================= */

function changeChart(type) {

    if (!workforceChart) return;


    if (type === "headcount") {

        workforceChart.data.datasets[0].data = [

            1040,

            1075,

            1090,

            1110,

            1145,

            1160,

            1180,

            1195,

            1210,

            1220,

            1235,

            1248

        ];

        workforceChart.data.datasets[0].label =
            "Employees";

    }


    if (type === "engagement") {

        workforceChart.data.datasets[0].data = [

            69,

            70,

            71,

            73,

            72,

            74,

            75,

            76,

            75,

            77,

            78,

            78.4

        ];

        workforceChart.data.datasets[0].label =
            "Engagement";

    }


    if (type === "performance") {

        workforceChart.data.datasets[0].data = [

            7.4,

            7.6,

            7.7,

            7.8,

            8.0,

            8.1,

            8.2,

            8.3,

            8.4,

            8.5,

            8.5,

            8.6

        ];

        workforceChart.data.datasets[0].label =
            "Performance";

    }


    workforceChart.update();

}


/* =========================================
   RISK DOUGHNUT CHART
========================================= */

function createRiskChart() {

    const canvas =
        document.getElementById("riskChart");


    if (!canvas) return;


    const ctx = canvas.getContext("2d");


    riskChart = new Chart(ctx, {

        type: "doughnut",


        data: {

            labels: [

                "High Risk",

                "Medium Risk",

                "Low Risk"

            ],


            datasets: [

                {

                    data: [

                        87,

                        246,

                        915

                    ],


                    backgroundColor: [

                        "#ff7181",

                        "#f6c85f",

                        "#54d49a"

                    ],


                    borderWidth: 0,

                    hoverOffset: 7

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            cutout: "76%",


            plugins: {

                legend: {

                    display: false

                }

            }

        }

    });

}


/* =========================================
   ATTRITION PREDICTION
========================================= */

function predictAttrition() {

    const name =
        document.getElementById("predName").value;


    const engagement =
        Number(
            document.getElementById("engagementInput").value
        );


    const workload =
        document.getElementById("workloadInput").value;


    const yearsSincePromotion =
        Number(
            document.getElementById("promotionInput").value
        );


    const satisfaction =
        document.getElementById("satisfactionInput").value;


    if (!name.trim()) {

        alert("Please enter employee name.");

        return;

    }


    let riskScore = 0;


    let factors = [];


    /*
        XAI LOGIC

        Low engagement
        High workload
        Long time since promotion
        Low satisfaction

        increase attrition risk.
    */


    if (engagement < 40) {

        riskScore += 30;

        factors.push({

            name: "Low Engagement",

            value: 88,

            impact: "High"

        });

    }


    else if (engagement < 65) {

        riskScore += 18;

        factors.push({

            name: "Moderate Engagement",

            value: 60,

            impact: "Medium"

        });

    }


    else {

        factors.push({

            name: "Good Engagement",

            value: 28,

            impact: "Low"

        });

    }


    if (workload === "high") {

        riskScore += 27;

        factors.push({

            name: "High Workload",

            value: 82,

            impact: "High"

        });

    }


    else if (workload === "medium") {

        riskScore += 12;

        factors.push({

            name: "Medium Workload",

            value: 55,

            impact: "Medium"

        });

    }


    else {

        factors.push({

            name: "Low Workload",

            value: 25,

            impact: "Low"

        });

    }


    if (yearsSincePromotion >= 3) {

        riskScore += 25;

        factors.push({

            name: "No Recent Promotion",

            value: 78,

            impact: "High"

        });

    }


    else if (yearsSincePromotion >= 2) {

        riskScore += 15;

        factors.push({

            name: "Promotion Gap",

            value: 50,

            impact: "Medium"

        });

    }


    else {

        factors.push({

            name: "Recent Career Growth",

            value: 20,

            impact: "Low"

        });

    }


    if (satisfaction === "low") {

        riskScore += 20;

        factors.push({

            name: "Low Job Satisfaction",

            value: 75,

            impact: "High"

        });

    }


    else if (satisfaction === "medium") {

        riskScore += 10;

        factors.push({

            name: "Moderate Satisfaction",

            value: 45,

            impact: "Medium"

        });

    }


    else {

        factors.push({

            name: "High Job Satisfaction",

            value: 18,

            impact: "Low"

        });

    }


    /*
        Add engagement bonus
        if employee is highly engaged.
    */


    if (engagement >= 80) {

        riskScore -= 12;

    }


    riskScore = Math.max(

        5,

        Math.min(98, riskScore)

    );


    let riskLevel;


    if (riskScore >= 60) {

        riskLevel = "HIGH";

    }


    else if (riskScore >= 35) {

        riskLevel = "MEDIUM";

    }


    else {

        riskLevel = "LOW";

    }


    renderPredictionResult(

        name,

        riskScore,

        riskLevel,

        factors

    );

}


/* =========================================
   RENDER XAI RESULT
========================================= */

function renderPredictionResult(

    name,

    score,

    riskLevel,

    factors

) {


    const result =
        document.getElementById("predictionResult");


    let riskColor;


    if (riskLevel === "HIGH") {

        riskColor = "#ff7181";

    }


    else if (riskLevel === "MEDIUM") {

        riskColor = "#f6c85f";

    }


    else {

        riskColor = "#54d49a";

    }


    const factorHTML = factors.map(factor => {

        return `

            <div class="factor">

                <div class="factor-name">

                    ${factor.name}

                </div>


                <div class="factor-bar">

                    <span

                        style="

                            width:${factor.value}%;

                            background:${riskColor};

                        "

                    ></span>

                </div>


                <div

                    class="factor-value"

                    style="color:${riskColor}"

                >

                    ${factor.impact}

                </div>

            </div>

        `;

    }).join("");


    let recommendations;


    if (riskLevel === "HIGH") {

        recommendations = [

            "Career growth discussion",

            "Review current workload",

            "Provide learning opportunities",

            "Consider retention support"

        ];

    }


    else if (riskLevel === "MEDIUM") {

        recommendations = [

            "Monitor engagement regularly",

            "Discuss career development",

            "Review workload balance"

        ];

    }


    else {

        recommendations = [

            "Continue current engagement practices",

            "Recognize employee contributions",

            "Support future career growth"

        ];

    }


    const recommendationHTML =
        recommendations.map(item => {

            return `<li>✓ ${item}</li>`;

        }).join("");


    result.innerHTML = `

        <div class="xai-result">


            <div class="xai-result-header">


                <div>

                    <p class="eyebrow">

                        XAI PREDICTION RESULT

                    </p>


                    <h3>

                        ${name}

                    </h3>

                </div>


                <div class="risk-score">

                    <strong

                        style="color:${riskColor}"

                    >

                        ${score}%

                    </strong>


                    <span>

                        ATTRITION PROBABILITY

                    </span>

                </div>


            </div>


            <div

                class="risk-banner"

                style="

                    background:${riskColor}12;

                    border-color:${riskColor}35;

                "

            >

                <b style="color:${riskColor}">

                    ${riskLevel} ATTRITION RISK

                </b>


                <p>

                    AI predicts a ${riskLevel.toLowerCase()}

                    probability of employee attrition.

                </p>

            </div>


            <div class="factor-title">

                WHY DID THE AI MAKE THIS PREDICTION?

            </div>


            ${factorHTML}


            <div class="recommendation-box">

                <h4>

                    ✦ RECOMMENDED HR ACTIONS

                </h4>


                <ul>

                    ${recommendationHTML}

                </ul>

            </div>


        </div>

    `;

}


/* =========================================
   RECRUITMENT EVALUATION
========================================= */

function evaluateCandidate() {


    const name =
        document.getElementById("candidateName").value;


    const python =
        Number(
            document.getElementById("pythonSkill").value
        );


    const database =
        Number(
            document.getElementById("databaseSkill").value
        );


    const experience =
        Number(
            document.getElementById("experience").value
        );


    if (!name.trim()) {

        alert("Please enter candidate name.");

        return;

    }


    let experienceScore =
        Math.min(experience * 10, 100);


    let score = Math.round(

        python * 0.4 +

        database * 0.3 +

        experienceScore * 0.3

    );


    let matchLevel;


    if (score >= 80) {

        matchLevel = "Excellent Match";

    }


    else if (score >= 60) {

        matchLevel = "Good Match";

    }


    else {

        matchLevel = "Needs Development";

    }


    const result =
        document.getElementById("candidateResult");


    result.innerHTML = `

        <div class="xai-result">


            <div class="xai-result-header">


                <div>

                    <p class="eyebrow">

                        EXPLAINABLE CANDIDATE ANALYSIS

                    </p>


                    <h3>

                        ${name}

                    </h3>

                </div>


                <div class="risk-score">

                    <strong

                        style="color:#54d49a"

                    >

                        ${score}%

                    </strong>


                    <span>

                        JOB MATCH SCORE

                    </span>

                </div>


            </div>


            <div

                class="risk-banner"

                style="

                    background:rgba(84,212,154,0.08);

                    border-color:rgba(84,212,154,0.2);

                "

            >

                <b style="color:#54d49a">

                    ${matchLevel}

                </b>


                <p>

                    Candidate suitability is calculated

                    using explainable contributing factors.

                </p>

            </div>


            <div class="factor-title">

                CONTRIBUTING FACTORS

            </div>


            <div class="factor">

                <div class="factor-name">

                    Python Skill

                </div>


                <div class="factor-bar">

                    <span

                        style="

                            width:${python}%;

                            background:#5ba7ff;

                        "

                    ></span>

                </div>


                <div class="factor-value">

                    ${python}%

                </div>

            </div>


            <div class="factor">

                <div class="factor-name">

                    Database Skill

                </div>


                <div class="factor-bar">

                    <span

                        style="

                            width:${database}%;

                            background:#a68cff;

                        "

                    ></span>

                </div>


                <div class="factor-value">

                    ${database}%

                </div>

            </div>


            <div class="factor">

                <div class="factor-name">

                    Experience

                </div>


                <div class="factor-bar">

                    <span

                        style="

                            width:${experienceScore}%;

                            background:#54d49a;

                        "

                    ></span>

                </div>


                <div class="factor-value">

                    ${experience} yrs

                </div>

            </div>


            <div class="recommendation-box">

                <h4>

                    ✦ RECRUITMENT RECOMMENDATION

                </h4>


                <ul>

                    <li>

                        ✓ Skills match analyzed

                    </li>


                    <li>

                        ✓ Experience contribution evaluated

                    </li>


                    <li>

                        ✓ Final decision should include human review

                    </li>

                </ul>

            </div>


        </div>

    `;

}


/* =========================================
   ADD EMPLOYEE MODAL
========================================= */

function openAddEmployee() {

    document

        .getElementById("employeeModal")

        .classList.add("show");

}


function closeModal() {

    document

        .getElementById("employeeModal")

        .classList.remove("show");

}


/* =========================================
   ADD EMPLOYEE
========================================= */

function addEmployee() {


    const name =
        document.getElementById("newName").value;


    const department =
        document.getElementById("newDepartment").value;


    const role =
        document.getElementById("newRole").value;


    if (!name.trim() || !role.trim()) {

        alert("Please complete all fields.");

        return;

    }


    const initials =
        name

            .split(" ")

            .map(word => word[0])

            .join("")

            .substring(0, 2)

            .toUpperCase();


    const table =
        document.getElementById("employeeTableBody");


    const row =
        document.createElement("tr");


    row.dataset.department = department;


    row.innerHTML = `

        <td>

            <div class="employee">

                <div class="mini-avatar avatar-blue">

                    ${initials}

                </div>


                <div>

                    <b>${name}</b>

                    <small>

                        EMP-${Math.floor(

                            1000 +

                            Math.random() * 8999

                        )}

                    </small>

                </div>

            </div>

        </td>


        <td>

            ${department}

        </td>


        <td>

            ${role}

        </td>


        <td>

            <div class="progress">

                <span style="width:70%"></span>

            </div>

            70%

        </td>


        <td>

            8.0 / 10

        </td>


        <td>

            <span class="risk-tag medium-risk">

                MEDIUM

            </span>

        </td>


        <td>

            <button

                class="view-btn"

                onclick="viewEmployee('${name}')"

            >

                View

            </button>

        </td>

    `;


    table.appendChild(row);


    closeModal();


    document.getElementById("newName").value = "";

    document.getElementById("newRole").value = "";


    alert(

        "Employee successfully added to HR Analytics system."

    );

}


/* =========================================
   SEARCH EMPLOYEES
========================================= */

function searchEmployees() {


    const searchInput =
        document

            .getElementById("employeeSearch")

            .value

            .toLowerCase();


    const rows =
        document.querySelectorAll(

            "#employeeTableBody tr"

        );


    rows.forEach(row => {


        const text =
            row.innerText.toLowerCase();


        if (text.includes(searchInput)) {

            row.style.display = "";

        }


        else {

            row.style.display = "none";

        }

    });

}


/* =========================================
   DEPARTMENT FILTER
========================================= */

function filterDepartment(department) {


    const rows =
        document.querySelectorAll(

            "#employeeTableBody tr"

        );


    rows.forEach(row => {


        if (

            department === "all" ||

            row.dataset.department === department

        ) {

            row.style.display = "";

        }


        else {

            row.style.display = "none";

        }

    });

}


/* =========================================
   VIEW EMPLOYEE
========================================= */

function viewEmployee(name) {


    alert(

        `Employee Profile: ${name}\n\n` +

        `HR Analytics Summary:\n` +

        `• Engagement Score: 78%\n` +

        `• Performance: 8.6/10\n` +

        `• Attrition Risk: Medium\n` +

        `• XAI Analysis: Available`

    );

}


/* =========================================
   GLOBAL SEARCH
========================================= */

function globalSearch(value) {


    if (!value.trim()) return;


    const query =
        value.toLowerCase();


    if (query.includes("employee")) {

        const button =
            document.querySelectorAll(

                ".nav-item"

            )[1];


        showPage("employees", button);

    }


    else if (

        query.includes("attrition") ||

        query.includes("risk")

    ) {

        const button =
            document.querySelectorAll(

                ".nav-item"

            )[2];


        showPage("attrition", button);

    }


    else if (

        query.includes("recruitment") ||

        query.includes("candidate")

    ) {

        const button =
            document.querySelectorAll(

                ".nav-item"

            )[3];


        showPage("recruitment", button);

    }


    else if (

        query.includes("performance")

    ) {

        const button =
            document.querySelectorAll(

                ".nav-item"

            )[4];


        showPage("performance", button);

    }

}


/* =========================================
   AI ASSISTANT
========================================= */

function openAI() {

    document

        .getElementById("aiModal")

        .classList.add("show");

}


function closeAIModal() {

    document

        .getElementById("aiModal")

        .classList.remove("show");

}


function askAI() {


    const question =
        document

            .getElementById("aiQuestion")

            .value

            .toLowerCase();


    const answer =
        document.getElementById("aiAnswer");


    if (!question.trim()) {

        answer.innerHTML =

            "Please ask a question.";

        return;

    }


    let response;


    if (

        question.includes("attrition") ||

        question.includes("leave")

    ) {

        response = `

            <b>AI Insight:</b><br><br>

            Attrition risk is mainly influenced by

            low engagement, high workload and limited

            career growth opportunities.

            <br><br>

            <b>Recommended Action:</b>

            Review workload and discuss career growth

            with high-risk employees.

        `;

    }


    else if (

        question.includes("performance")

    ) {

        response = `

            <b>AI Insight:</b><br><br>

            Performance is influenced by skills,

            training, engagement and role clarity.

            <br><br>

            <b>Recommended Action:</b>

            Provide targeted learning opportunities

            and regular feedback.

        `;

    }


    else if (

        question.includes("recruitment") ||

        question.includes("candidate")

    ) {

        response = `

            <b>AI Insight:</b><br><br>

            Candidate fit can be evaluated using skills,

            experience and role requirements.

            <br><br>

            XAI helps recruiters understand why a

            candidate received a particular score.

        `;

    }


    else {

        response = `

            <b>AI Insight:</b><br><br>

            Based on current HR analytics, employee

            engagement and career growth are important

            factors in workforce decision-making.

            <br><br>

            AI provides insights, but final HR decisions

            should always include human review.

        `;

    }


    answer.innerHTML = response;

}


/* =========================================
   REPORT GENERATION
========================================= */

function generateReport() {


    alert(

        "Report generated successfully!\n\n" +

        "The report includes:\n" +

        "• AI Predictions\n" +

        "• Key Contributing Factors\n" +

        "• Risk Analysis\n" +

        "• HR Recommendations\n" +

        "• Explainability Insights"

    );

}


/* =========================================
   MODAL OUTSIDE CLICK
========================================= */

window.addEventListener(

    "click",

    function (event) {


        const employeeModal =
            document.getElementById(

                "employeeModal"

            );


        const aiModal =
            document.getElementById(

                "aiModal"

            );


        if (

            event.target === employeeModal

        ) {

            closeModal();

        }


        if (

            event.target === aiModal

        ) {

            closeAIModal();

        }

    }

);