// Course data
const courseData = {
  "course_title": "Summer Product 101 by NSUT",
  "course_subtitle": "Course Dashboard | Summer Product 101",
  "welcome_message": "Welcome to Summer Product 101 2025! Embark on your Product Management journey.",
  "weeks": [
    {
      "week_number": 1,
      "phase": "Emerge",
      "title": "Product Management Fundamentals",
      "days": [
        {
          "day": 1,
          "description": "Get introduced to the world of Product Management and understand the core role of a Product Manager in today's tech landscape.",
          "tasks": [
            {"title": "What is Product Management?", "type": "Introduction video"},
            {"title": "Product Manager vs Project Manager", "type": "Comparison guide"},
            {"title": "Day in the Life of a PM", "type": "Case study"}
          ]
        },
        {
          "day": 2,
          "description": "Develop the essential product thinking mindset and learn how to approach problems from a product perspective.",
          "tasks": [
            {"title": "Developing Product Sense", "type": "Interactive exercise"},
            {"title": "Customer-Centric Thinking", "type": "Workshop"},
            {"title": "Product Lifecycle Basics", "type": "Reading material"}
          ]
        },
        {
          "day": 3,
          "description": "Learn the fundamentals of understanding your users and the market landscape through research and analysis.",
          "tasks": [
            {"title": "User Research Fundamentals", "type": "Tutorial"},
            {"title": "Market Analysis Basics", "type": "Assignment"},
            {"title": "Competitive Analysis", "type": "Template"}
          ]
        }
      ]
    },
    {
      "week_number": 2,
      "phase": "Emerge",
      "title": "Core Product Concepts",
      "days": [
        {
          "day": 1,
          "description": "Master the art of creating compelling product visions and translating them into actionable strategies.",
          "tasks": [
            {"title": "Crafting Product Vision", "type": "Workshop"},
            {"title": "Product Strategy Framework", "type": "Tutorial"},
            {"title": "Vision to Strategy Alignment", "type": "Exercise"}
          ]
        },
        {
          "day": 2,
          "description": "Learn systematic approaches to identify real problems and validate them before building solutions.",
          "tasks": [
            {"title": "Problem Discovery Methods", "type": "Guide"},
            {"title": "Hypothesis Formation", "type": "Workshop"},
            {"title": "Problem Validation Techniques", "type": "Case study"}
          ]
        },
        {
          "day": 3,
          "description": "Develop skills to effectively manage and communicate with various stakeholders across the organization.",
          "tasks": [
            {"title": "Identifying Stakeholders", "type": "Mapping exercise"},
            {"title": "Communication Strategies", "type": "Role-play"},
            {"title": "Managing Expectations", "type": "Best practices"}
          ]
        }
      ]
    },
    {
      "week_number": 3,
      "phase": "Evolve",
      "title": "Design & Technology",
      "days": [
        {
          "day": 1,
          "description": "Dive deep into design thinking principles and learn how to create user-centered product experiences.",
          "tasks": [
            {"title": "Design Thinking Process", "type": "Interactive module"},
            {"title": "User Experience Fundamentals", "type": "Design workshop"},
            {"title": "Working with Designers", "type": "Collaboration guide"}
          ]
        },
        {
          "day": 2,
          "description": "Understand essential technical concepts that enable effective collaboration with engineering teams.",
          "tasks": [
            {"title": "Technical Concepts for PMs", "type": "Learning path"},
            {"title": "API & Database Basics", "type": "Tutorial"},
            {"title": "Working with Engineering Teams", "type": "Best practices"}
          ]
        },
        {
          "day": 3,
          "description": "Master the art of documenting product requirements and creating clear specifications for development.",
          "tasks": [
            {"title": "Writing PRDs", "type": "Product Requirements Document"},
            {"title": "User Stories & Acceptance Criteria", "type": "Workshop"},
            {"title": "Technical Specifications", "type": "Template"}
          ]
        }
      ]
    },
    {
      "week_number": 4,
      "phase": "Evolve",
      "title": "Growth & Marketing",
      "days": [
        {
          "day": 1,
          "description": "Learn how to bring products to market successfully with effective go-to-market strategies and positioning.",
          "tasks": [
            {"title": "Go-to-Market Strategy", "type": "Framework"},
            {"title": "Product Positioning", "type": "Workshop"},
            {"title": "Messaging & Communication", "type": "Exercise"}
          ]
        },
        {
          "day": 2,
          "description": "Explore growth frameworks and analytics tools to drive product adoption and measure success.",
          "tasks": [
            {"title": "Growth Frameworks (AARRR)", "type": "Pirate Metrics"},
            {"title": "Product Analytics & KPIs", "type": "Dashboard tutorial"},
            {"title": "A/B Testing Fundamentals", "type": "Practical guide"}
          ]
        },
        {
          "day": 3,
          "description": "Create compelling product roadmaps and learn frameworks for prioritizing features effectively.",
          "tasks": [
            {"title": "Roadmap Creation Process", "type": "Interactive tool"},
            {"title": "Prioritization Frameworks", "type": "ICE, RICE, Kano"},
            {"title": "Roadmap Communication", "type": "Presentation skills"}
          ]
        }
      ]
    },
    {
      "week_number": 5,
      "phase": "Perform",
      "title": "Capstone Project",
      "days": [
        {
          "day": 1,
          "description": "Begin your capstone project by understanding requirements, forming teams, and planning your approach.",
          "tasks": [
            {"title": "Project Brief & Requirements", "type": "Assignment"},
            {"title": "Team Formation & Roles", "type": "Group activity"},
            {"title": "Project Planning & Timeline", "type": "Planning session"}
          ]
        },
        {
          "day": 2,
          "description": "Execute the first phase of your project with market research, problem definition, and solution ideation.",
          "tasks": [
            {"title": "Market Research & Analysis", "type": "Research project"},
            {"title": "Problem Definition & Validation", "type": "Field work"},
            {"title": "Solution Ideation", "type": "Brainstorming session"}
          ]
        },
        {
          "day": 3,
          "description": "Continue project execution by developing product strategy, prioritizing features, and creating prototypes.",
          "tasks": [
            {"title": "Product Strategy & Vision", "type": "Strategy doc"},
            {"title": "Feature Prioritization", "type": "Roadmap creation"},
            {"title": "Prototype Development", "type": "Design sprint"}
          ]
        }
      ]
    },
    {
      "week_number": 6,
      "phase": "Perform",
      "title": "Career & Presentation",
      "days": [
        {
          "day": 1,
          "description": "Prepare compelling presentations of your capstone project with effective storytelling and design.",
          "tasks": [
            {"title": "Presentation Structure & Storytelling", "type": "Workshop"},
            {"title": "Slide Deck Creation", "type": "Design session"},
            {"title": "Demo Preparation", "type": "Practice session"}
          ]
        },
        {
          "day": 2,
          "description": "Build your professional PM brand with optimized resumes, portfolios, and LinkedIn profiles.",
          "tasks": [
            {"title": "PM Resume Writing", "type": "Template & review"},
            {"title": "Portfolio Creation", "type": "Project showcase"},
            {"title": "LinkedIn Optimization", "type": "Profile workshop"}
          ]
        },
        {
          "day": 3,
          "description": "Complete your journey with interview preparation, final presentations, and career guidance.",
          "tasks": [
            {"title": "Interview Preparation", "type": "Mock interviews"},
            {"title": "Final Project Presentations", "type": "Pitch session"},
            {"title": "Course Wrap-up & Next Steps", "type": "Career roadmap"}
          ]
        }
      ]
    }
  ]
};

// State management
let taskCompletionState = {};
let expandedWeeks = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadTaskCompletionState();
    renderWeeks();
    setupEventListeners();
}

// Load task completion state
function loadTaskCompletionState() {
    // Initialize empty state for all tasks
    courseData.weeks.forEach(week => {
        week.days.forEach(day => {
            day.tasks.forEach((task, taskIndex) => {
                const taskId = `week-${week.week_number}-day-${day.day}-task-${taskIndex}`;
                if (!(taskId in taskCompletionState)) {
                    taskCompletionState[taskId] = false;
                }
            });
        });
    });
}

// Render all weeks
function renderWeeks() {
    const weeksContainer = document.getElementById('weeks-container');
    weeksContainer.innerHTML = '';
    
    courseData.weeks.forEach(week => {
        const weekElement = createWeekElement(week);
        weeksContainer.appendChild(weekElement);
    });
}

// Create week element
function createWeekElement(week) {
    const weekDiv = document.createElement('div');
    weekDiv.className = 'week-card';
    weekDiv.setAttribute('data-week', week.week_number);
    
    const isExpanded = expandedWeeks[week.week_number] || false;
    
    weekDiv.innerHTML = `
        <div class="week-header ${isExpanded ? 'expanded' : ''}" onclick="toggleWeek(${week.week_number})">
            <div class="week-header-left">
                <div class="week-number">Week ${week.week_number}</div>
                <div class="week-info">
                    <h3>${week.title}</h3>
                    <div class="week-phase">${week.phase} Phase</div>
                </div>
            </div>
            <div class="expand-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
            </div>
        </div>
        <div class="week-content ${isExpanded ? 'expanded' : ''}">
            <div class="days-container">
                ${week.days.map(day => createDayElement(day, week.week_number)).join('')}
            </div>
        </div>
    `;
    
    return weekDiv;
}

// Create day element
function createDayElement(day, weekNumber) {
    const completedTasks = day.tasks.filter((task, index) => {
        const taskId = `week-${weekNumber}-day-${day.day}-task-${index}`;
        return taskCompletionState[taskId];
    }).length;
    
    const totalTasks = day.tasks.length;
    const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    
    return `
        <div class="day-card">
            <div class="day-header">
                <h4 class="day-title">Day ${day.day}</h4>
                <div class="day-progress">
                    <span class="progress-text">${completedTasks}/${totalTasks}</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                    </div>
                </div>
            </div>
            <p class="day-description">${day.description}</p>
            <div class="tasks-list">
                ${day.tasks.map((task, index) => createTaskElement(task, weekNumber, day.day, index)).join('')}
            </div>
        </div>
    `;
}

// Create task element
function createTaskElement(task, weekNumber, dayNumber, taskIndex) {
    const taskId = `week-${weekNumber}-day-${dayNumber}-task-${taskIndex}`;
    const isCompleted = taskCompletionState[taskId];
    
    return `
        <div class="task-item" onclick="toggleTask('${taskId}')">
            <div class="task-checkbox ${isCompleted ? 'completed' : ''}">
                ${isCompleted ? '✓' : ''}
            </div>
            <div class="task-content">
                <div class="task-title">${task.title}</div>
                <div class="task-type">${task.type}</div>
            </div>
            <div class="external-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </div>
        </div>
    `;
}

// Toggle week expansion
function toggleWeek(weekNumber) {
    expandedWeeks[weekNumber] = !expandedWeeks[weekNumber];
    
    const weekCard = document.querySelector(`[data-week="${weekNumber}"]`);
    const weekHeader = weekCard.querySelector('.week-header');
    const weekContent = weekCard.querySelector('.week-content');
    
    if (expandedWeeks[weekNumber]) {
        weekHeader.classList.add('expanded');
        weekContent.classList.add('expanded');
        weekContent.style.display = 'block';
    } else {
        weekHeader.classList.remove('expanded');
        weekContent.classList.remove('expanded');
        weekContent.style.display = 'none';
    }
}

// Toggle task completion
function toggleTask(taskId) {
    taskCompletionState[taskId] = !taskCompletionState[taskId];
    
    // Re-render to update progress bars and checkmarks
    renderWeeks();
    
    // Restore expanded state
    Object.keys(expandedWeeks).forEach(weekNumber => {
        if (expandedWeeks[weekNumber]) {
            const weekCard = document.querySelector(`[data-week="${weekNumber}"]`);
            const weekHeader = weekCard.querySelector('.week-header');
            const weekContent = weekCard.querySelector('.week-content');
            weekHeader.classList.add('expanded');
            weekContent.classList.add('expanded');
            weekContent.style.display = 'block';
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Discord button
    const discordBtn = document.querySelector('.discord-btn');
    if (discordBtn) {
        discordBtn.addEventListener('click', function() {
            // In a real application, this would open Discord or a specific invite link
            alert('Discord community feature coming soon! 🚀');
        });
    }
    
    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close all expanded weeks
            Object.keys(expandedWeeks).forEach(weekNumber => {
                expandedWeeks[weekNumber] = false;
            });
            renderWeeks();
        }
    });
}

// Utility function to calculate overall progress
function calculateOverallProgress() {
    let totalTasks = 0;
    let completedTasks = 0;
    
    courseData.weeks.forEach(week => {
        week.days.forEach(day => {
            day.tasks.forEach((task, index) => {
                totalTasks++;
                const taskId = `week-${week.week_number}-day-${day.day}-task-${index}`;
                if (taskCompletionState[taskId]) {
                    completedTasks++;
                }
            });
        });
    });
    
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
}

// Make functions globally available
window.toggleWeek = toggleWeek;
window.toggleTask = toggleTask;