const employees = [
  {
    id: 1,
    firstName: "Rahim",
    email: "khbidyut31@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription:
          "Create a responsive homepage UI using React and Tailwind CSS.",
        taskDate: "2026-07-28",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navigation menu issue.",
        taskDate: "2026-07-29",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with user authentication API.",
        taskDate: "2026-07-25",
        category: "Backend",
      },
    ],
  },

  {
    id: 2,
    firstName: "Karim",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Create MongoDB collections and indexes.",
        taskDate: "2026-07-28",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Authentication Setup",
        taskDescription: "Configure JWT authentication.",
        taskDate: "2026-07-24",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate payment service provider.",
        taskDate: "2026-07-20",
        category: "Finance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Unit Testing",
        taskDescription: "Write test cases for API endpoints.",
        taskDate: "2026-07-30",
        category: "Testing",
      },
    ],
  },

  {
    id: 3,
    firstName: "Jamal",
    email: "employee3@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build admin dashboard UI.",
        taskDate: "2026-07-28",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Implement user profile functionality.",
        taskDate: "2026-07-23",
        category: "Frontend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Add dark mode support across app.",
        taskDate: "2026-07-31",
        category: "UI/UX",
      },
    ],
  },

  {
    id: 4,
    firstName: "Sabbir",
    email: "employee4@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website search engine ranking.",
        taskDate: "2026-07-22",
        category: "Marketing",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog articles for company website.",
        taskDate: "2026-07-29",
        category: "Content",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Campaign",
        taskDescription: "Launch newsletter campaign.",
        taskDate: "2026-07-21",
        category: "Marketing",
      },
    ],
  },

  {
    id: 5,
    firstName: "Nayeem",
    email: "employee5@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Bug Tracking",
        taskDescription: "Review and prioritize reported bugs.",
        taskDate: "2026-07-28",
        category: "QA",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Regression Testing",
        taskDescription: "Perform testing before deployment.",
        taskDate: "2026-07-30",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Release Verification",
        taskDescription: "Verify production deployment.",
        taskDate: "2026-07-25",
        category: "QA",
      },
    ],
  },
];

const admin = [
  {
    id: 100,
    firstName: "Hasan",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
};
export const getLocalStorage = () => {
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

//    console.log(employees , admin);
   return {employees, admin}
};
