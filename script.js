const promptGroups = [
    {
        id: 1,
        title: "Email Drafting & Polishing",
        description: "Professional email templates and communication strategies",
        prompts: [
            { id: 1, content: "Draft a polite follow-up email to a client who hasn't responded for a week." },
            { id: 2, content: "Write a professional thank-you email after a successful project delivery." },
            { id: 3, content: "Create an email template to request feedback from stakeholders." },
            { id: 4, content: "Rewrite this email to make it sound more concise and formal." },
            { id: 5, content: "Draft a reminder email for an upcoming deadline, keeping it firm but courteous." },
            { id: 6, content: "Create a short apology email for a delayed response to a customer." },
            { id: 7, content: "Write an email requesting approval for a budget increase." },
            { id: 8, content: "Draft a professional introduction email to a new client." },
            { id: 9, content: "Rewrite a casual internal email into a more formal one for senior leadership." },
            { id: 10, content: "Draft an email announcing a project kickoff meeting." },
            { id: 11, content: "Create a clear and polite escalation email for an unresolved issue." },
            { id: 12, content: "Write an email to request information from a colleague in another department." },
            { id: 13, content: "Draft an email confirming meeting details with an external vendor." },
            { id: 14, content: "Rewrite this email to improve tone and remove jargon." },
            { id: 15, content: "Draft an appreciation email to recognize a teammate's contribution." },
            { id: 16, content: "Create an email template for sending weekly status updates to stakeholders." },
            { id: 17, content: "Draft a polite email to request an extension for submitting deliverables." },
            { id: 18, content: "Write an email introducing yourself to a new team after a job change." },
            { id: 19, content: "Draft an announcement email for a new process rollout." },
            { id: 20, content: "Write a formal email requesting supporting documents for an audit." }
        ]
    },
    {
        id: 2,
        title: "Meeting Summaries & Notes",
        description: "Transform meetings into actionable insights and professional documentation",
        prompts: [
            { id: 21, content: "Summarize this meeting transcript into 5 key decisions and 3 action items." },
            { id: 22, content: "Create a bulleted list of follow-ups required from these meeting notes." },
            { id: 23, content: "Draft a one-paragraph summary of this meeting for executive leadership." },
            { id: 24, content: "Turn messy raw notes into a professional meeting minutes format." },
            { id: 25, content: "Extract and categorize risks, dependencies, and open questions from the notes." },
            { id: 26, content: "Create a recap email of the meeting highlights for absent participants." },
            { id: 27, content: "Identify action owners and due dates from the meeting transcript." },
            { id: 28, content: "Rewrite these notes into a professional client-facing summary." },
            { id: 29, content: "Generate a timeline of discussed milestones from the meeting content." },
            { id: 30, content: "Convert meeting notes into a structured agenda for the next call." },
            { id: 31, content: "Extract top 3 priorities discussed in the meeting." },
            { id: 32, content: "Summarize a brainstorming session into themes and next steps." },
            { id: 33, content: "Create a one-page summary of multiple meetings across a project week." },
            { id: 34, content: "Draft a \"decision log\" based on the discussions captured." },
            { id: 35, content: "Generate a list of key questions raised during the meeting." },
            { id: 36, content: "Turn meeting notes into a status report format for stakeholders." },
            { id: 37, content: "Extract who-said-what from the transcript for accountability." },
            { id: 38, content: "Rewrite informal meeting notes into a compliance-ready document." },
            { id: 39, content: "Highlight areas of disagreement and proposed resolutions from the meeting." },
            { id: 40, content: "Create a short LinkedIn-style update summarizing key meeting outcomes." }
        ]
    },
    {
        id: 3,
        title: "Project Management Support",
        description: "Essential tools and frameworks for successful project delivery",
        prompts: [
            { id: 41, content: "Create a simple 3-month project plan with key milestones and deliverables." },
            { id: 42, content: "Draft a weekly project status report template." },
            { id: 43, content: "Suggest a communication plan for stakeholders in a software project." },
            { id: 44, content: "Build a RAID log (Risks, Assumptions, Issues, Dependencies) for a new project." },
            { id: 45, content: "Generate a Gantt chart outline for a website redesign project." },
            { id: 46, content: "Create a checklist for project kickoff activities." },
            { id: 47, content: "Write a standard operating procedure for tracking project issues." },
            { id: 48, content: "Develop a project closure checklist." },
            { id: 49, content: "Suggest 5 methods to improve cross-functional collaboration in a project." },
            { id: 50, content: "Draft a risk mitigation plan for a tight deadline project." },
            { id: 51, content: "Write a project charter for a mobile app development initiative." },
            { id: 52, content: "Create a timeline for a phased software rollout across departments." },
            { id: 53, content: "Generate a stakeholder engagement plan with levels of involvement." },
            { id: 54, content: "Suggest 3 approaches to handle scope creep in an agile project." },
            { id: 55, content: "Draft an email template for escalating project delays to management." },
            { id: 56, content: "Create a sprint retrospective format with questions and sections." },
            { id: 57, content: "Provide a lessons-learned summary format for project postmortem." },
            { id: 58, content: "Outline the roles and responsibilities in a RACI matrix for a small project." },
            { id: 59, content: "Generate KPIs for measuring success of a digital transformation project." },
            { id: 60, content: "Write a 2-slide summary format for presenting project health in leadership meetings." }
        ]
    }
];

// Application state
let currentView = 'homepage';
let currentGroup = null;
let copiedPrompts = new Set();

// DOM elements
const homepage = document.getElementById('homepage');
const dashboard = document.getElementById('dashboard');
const promptDetail = document.getElementById('prompt-detail');
const toast = document.getElementById('toast');

// Navigation event listeners
document.getElementById('nav-dashboard-btn').addEventListener('click', () => showDashboard());
document.getElementById('hero-dashboard-btn').addEventListener('click', () => showDashboard());
document.getElementById('back-home-btn').addEventListener('click', () => showHomepage());
document.getElementById('back-dashboard-btn').addEventListener('click', () => showDashboard());

// Utility functions
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    currentView = pageId;
}

function showHomepage() {
    showPage('homepage');
}

function showDashboard() {
    showPage('dashboard');
    renderCategories();
}

function showPromptDetail(group) {
    currentGroup = group;
    showPage('prompt-detail');
    renderPromptDetail();
}

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = '';

    promptGroups.forEach(group => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.addEventListener('click', () => showPromptDetail(group));

        card.innerHTML = `
            <div class="category-header">
                <div class="category-badge">${group.prompts.length} prompts</div>
                <div class="category-decoration"></div>
            </div>
            <h3>${group.title}</h3>
            <p>${group.description}</p>
            <button class="btn btn-outline">Explore Prompts</button>
        `;

        grid.appendChild(card);
    });
}

function renderPromptDetail() {
    if (!currentGroup) return;

    document.getElementById('detail-category-title').textContent = currentGroup.title;
    document.getElementById('detail-category-description').textContent = currentGroup.description;

    const promptsList = document.getElementById('prompts-list');
    promptsList.innerHTML = '';

    currentGroup.prompts.forEach((prompt, index) => {
        const card = document.createElement('div');
        card.className = 'prompt-card';

        const copyBtnId = `copy-btn-${prompt.id}`;
        const isCopied = copiedPrompts.has(prompt.id);

        card.innerHTML = `
            <div class="prompt-content">
                <div class="prompt-body">
                    <div class="prompt-meta">
                        <div class="prompt-number">${index + 1}</div>
                        <span class="prompt-label">Prompt</span>
                    </div>
                    <p class="prompt-text">${prompt.content}</p>
                </div>
                <button id="${copyBtnId}" class="btn btn-outline btn-sm copy-btn ${isCopied ? 'copied' : ''}">
                    ${isCopied ? `
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Copied
                    ` : `
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                        Copy
                    `}
                </button>
            </div>
        `;

        promptsList.appendChild(card);

        // Add click event listener to copy button
        document.getElementById(copyBtnId).addEventListener('click', () => {
            copyToClipboard(prompt.content, prompt.id, copyBtnId);
        });
    });
}

async function copyToClipboard(text, promptId, buttonId) {
    try {
        await navigator.clipboard.writeText(text);
        
        // Update button state
        copiedPrompts.add(promptId);
        const button = document.getElementById(buttonId);
        button.classList.add('copied');
        button.innerHTML = `
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Copied
        `;

        // Show toast
        showToast();

        // Reset button after 2 seconds
        setTimeout(() => {
            copiedPrompts.delete(promptId);
            button.classList.remove('copied');
            button.innerHTML = `
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                Copy
            `;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
        showToast('Failed to copy text', true);
    }
}

function showToast(message = 'Prompt copied to clipboard!', isError = false) {
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    showHomepage();
});